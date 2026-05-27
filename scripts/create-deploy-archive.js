const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");
const archive = path.join(dist, "fashionatlas-deploy.zip");

const files = [
  "index.html",
  "styles.css",
  "app.js",
  "package.json",
  "vercel.json",
  "netlify.toml",
  ".env.example",
  "api",
  "netlify",
  "scripts",
  "docs/DEPLOYMENT.md",
  "docs/PRD.md",
  "docs/DESIGN.md",
  "docs/PRODUCT_STRATEGY_AND_PLAN.md",
  "docs/CASE_STUDY.md",
  "docs/INTERVIEW_SCRIPT.md",
  "docs/LAUNCH_CHECKLIST.md",
  "docs/GLOBAL_SOURCE_STRATEGY.md",
  "docs/PROJECT_GOAL.md",
];

if (!fs.existsSync(dist)) fs.mkdirSync(dist);
if (fs.existsSync(archive)) fs.rmSync(archive);

execFileSync("zip", ["-r", archive, ...files], {
  cwd: root,
  stdio: "inherit",
});

console.log(`Deploy archive created: ${archive}`);
