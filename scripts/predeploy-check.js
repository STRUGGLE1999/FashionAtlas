const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");

function read(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

function extractArray(source, startName, nextName) {
  const start = source.indexOf(`const ${startName} = `);
  const end = source.indexOf(`const ${nextName} = `);
  if (start === -1 || end === -1 || end <= start) {
    throw new Error(`Cannot extract ${startName}`);
  }
  const code = source.slice(start, end);
  return Function(`${code}; return ${startName};`)();
}

function extractFromBlock(source, startToken, endToken, returnName) {
  const start = source.indexOf(startToken);
  const end = source.indexOf(endToken);
  if (start === -1 || end === -1 || end <= start) {
    throw new Error(`Cannot extract ${returnName}`);
  }
  const code = source.slice(start, end);
  return Function(`${code}; return ${returnName};`)();
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function countMatches(text, pattern) {
  return (text.match(pattern) || []).length;
}

const app = read("app.js");
const index = read("index.html");
const pkg = JSON.parse(read("package.json"));
const vercel = JSON.parse(read("vercel.json"));
const netlify = read("netlify.toml");

const resources = extractFromBlock(app, "const channels = ", "const learningPaths = ", "resources");
const guides = extractArray(app, "recommendationGuides", "trendIssues");
const trends = extractArray(app, "trendIssues", "styleDictionary");

const failures = [];

function check(name, fn) {
  try {
    fn();
    console.log(`ok - ${name}`);
  } catch (error) {
    failures.push(`${name}: ${error.message}`);
    console.error(`fail - ${name}: ${error.message}`);
  }
}

check("resource library has at least 100 resources", () => {
  assert(resources.length >= 100, `found ${resources.length}`);
});

check("top navigation is Chinese and excludes case/about", () => {
  assert(index.includes("#/guides") && index.includes("#/trends"), "missing guide/trend links");
  assert(!index.includes("#/case") && !index.includes("#/about"), "case/about still appears in top-level shell");
  assert(index.includes("推荐清单") && index.includes("趋势周报") && index.includes("灵感板"), "missing Chinese nav labels");
});

check("recommendation guides meet MVP count and item requirements", () => {
  assert(guides.length === 8, `found ${guides.length}`);
  const invalid = guides.filter((guide) => guide.items.length < 5 || guide.items.length > 10);
  assert(invalid.length === 0, `invalid guide sizes: ${invalid.map((guide) => `${guide.id}:${guide.items.length}`).join(", ")}`);
  const itemTypes = new Set(guides.flatMap((guide) => guide.items.map((item) => item.type)));
  ["书籍", "影片", "纪录片", "杂志", "秀场"].forEach((type) => {
    assert(itemTypes.has(type), `missing item type ${type}`);
  });
});

check("guide entries include legal source metadata", () => {
  const missing = guides.flatMap((guide) => guide.items.map((item) => ({ guide: guide.id, item })))
    .filter(({ item }) => !item.originalTitle || !item.chineseTitle || !item.coreTakeaway || !item.whereToWatchOrRead || !item.availabilityNote || !item.link);
  assert(missing.length === 0, `missing fields in ${missing.map(({ guide, item }) => `${guide}/${item.chineseTitle || item.originalTitle}`).join(", ")}`);
});

check("trend issues meet annual/monthly/weekly source requirements", () => {
  assert(trends.length >= 4, `found ${trends.length}`);
  assert(trends.some((trend) => trend.type === "年度"), "missing annual trend");
  assert(trends.some((trend) => trend.type === "月度"), "missing monthly trend");
  assert(trends.filter((trend) => trend.type === "周报").length >= 2, "missing two weekly trends");
  const weak = trends.filter((trend) => !trend.evidenceSources || trend.evidenceSources.length < 3);
  assert(weak.length === 0, `weak evidence: ${weak.map((trend) => trend.id).join(", ")}`);
});

check("front-end implements guide/trend filters and style research detail", () => {
  ["bindGuideFilters", "bindTrendFilters", "styleResearchAddon", "代表影像/摄影/杂志", "日常穿搭转译", "常见误区"].forEach((needle) => {
    assert(app.includes(needle), `missing ${needle}`);
  });
});

check("AI assistant supports target selection and grounded outputs", () => {
  ["目标类型", "生成我的学习清单", "生成本周穿搭灵感摘要", "guides", "trends", "resources"].forEach((needle) => {
    assert(app.includes(needle), `missing ${needle}`);
  });
  assert(read("api/ai.js").includes("目标类型"), "Vercel API missing intent prompt");
  assert(read("netlify/functions/ai.js").includes("目标类型"), "Netlify API missing intent prompt");
});

check("copyright and official-source boundaries are present", () => {
  const combined = [app, read("docs/PRD.md"), read("docs/GLOBAL_SOURCE_STRATEGY.md")].join("\n");
  ["不下载", "不搬运", "不提供盗版", "官方", "权威", "合法"].forEach((needle) => {
    assert(combined.includes(needle), `missing boundary text ${needle}`);
  });
});

check("deprecated domestic alternative UI is absent from app shell", () => {
  ["国内替代入口", "B 站搜索", "百度搜索", "domesticAlternatives", "accessRisk", "isChinaFriendly"].forEach((needle) => {
    assert(!app.includes(needle), `found deprecated token ${needle}`);
  });
});

check("deployment configs are present", () => {
  assert(vercel.version === 2, "vercel.json missing version 2");
  assert(Array.isArray(vercel.rewrites), "vercel.json missing rewrites");
  assert(netlify.includes("publish = \".\""), "netlify.toml missing publish dir");
  assert(netlify.includes("functions = \"netlify/functions\""), "netlify.toml missing functions dir");
});

check("package scripts include check command", () => {
  assert(pkg.scripts && pkg.scripts.check, "missing npm run check");
});

console.log("");
console.log(`Summary: ${resources.length} resources, ${guides.length} guides, ${trends.length} trend issues.`);

if (failures.length) {
  console.error("\nPredeploy check failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log("Predeploy check passed.");
