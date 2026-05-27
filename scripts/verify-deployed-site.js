const target = process.env.DEPLOY_URL || process.argv[2];

if (!target) {
  console.error("Usage: DEPLOY_URL=https://your-site.example npm run deploy:verify");
  console.error("   or: npm run deploy:verify -- https://your-site.example");
  process.exit(1);
}

const base = target.replace(/\/$/, "");
const requiredRoutes = [
  "#/",
  "#/guides",
  "#/trends",
  "#/style/minimalism",
  "#/guide/starter-fashion-literacy",
  "#/trend/trend-2026-05-monthly",
  "#/ai",
  "#/board",
];

async function assertPage(route, requiredText) {
  const response = await fetch(`${base}/index.html${route}`);
  if (!response.ok) {
    throw new Error(`${route} returned ${response.status}`);
  }
  const text = await response.text();
  if (!text.includes("FashionAtlas")) {
    throw new Error(`${route} missing FashionAtlas shell`);
  }
  if (requiredText && !text.includes(requiredText)) {
    throw new Error(`${route} missing ${requiredText}`);
  }
}

async function main() {
  await assertPage("#/", "app.js");
  for (const route of requiredRoutes.slice(1)) {
    await assertPage(route, "app.js");
  }

  const apiResponse = await fetch(`${base}/api/ai`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      intent: "学习",
      question: "请用一句话说明 FashionAtlas AI 是否可用。",
      guides: [],
      trends: [],
      resources: [],
    }),
  }).catch((error) => ({ ok: false, status: "network-error", error }));

  console.log(`Static routes checked: ${requiredRoutes.length}`);
  console.log(`AI endpoint status: ${apiResponse.status}`);
  console.log("If AI endpoint is 200, the online OPENAI_API_KEY is configured. If it is 501/404, static pages can still run with local fallback.");
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
