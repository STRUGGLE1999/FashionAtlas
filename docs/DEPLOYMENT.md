# FashionAtlas 部署说明

## 推荐方案
优先使用 Vercel 或 Netlify，因为它们可以同时托管静态页面和 AI serverless function。

## 部署前检查
本地先运行：

```bash
npm run check
```

这个命令会同时做：
- `app.js`、`api/ai.js`、`netlify/functions/ai.js` 语法检查。
- `scripts/predeploy-check.js` 产品验收检查：资源数、8 个推荐清单、趋势来源、中文导航、官方来源策略、AI 目标选择、风格研究页和部署配置。

如果需要把当前项目交给别人部署，可以生成压缩包：

```bash
npm run deploy:archive
```

生成文件：

```text
dist/fashionatlas-deploy.zip
```

压缩包已包含静态页面、Vercel/Netlify 配置、AI serverless 函数、部署说明和验收脚本；不包含 `.env`、`node_modules`、`dist`、本地平台缓存等不应上传的文件。

## Vercel
1. 将项目推送到 GitHub。
2. 在 Vercel 导入仓库。
3. Framework Preset 选择 Other。
4. Build Command 使用 `npm run check`。
5. Output Directory 留空或设为 `.`。
6. 在 Environment Variables 中配置：
   - `OPENAI_API_KEY`
   - `OPENAI_MODEL`，可选，默认 `gpt-5-mini`
7. 部署后访问线上 URL，打开 `#/ai` 测试 AI 助手。

本机已预留命令：

```bash
npm run deploy:vercel
```

需要先安装并登录 Vercel CLI。

## Netlify
1. 将项目推送到 GitHub。
2. 在 Netlify 导入仓库。
3. Build command 设置为 `npm run check`。
4. Publish directory 设置为 `.`。
5. Functions directory 设置为 `netlify/functions`。
6. 配置同样的环境变量。
7. 部署后打开 `#/ai` 测试。

本机已预留命令：

```bash
npm run deploy:netlify
```

需要先安装并登录 Netlify CLI。

## 线上验收
部署成功后，用公开 URL 运行：

```bash
DEPLOY_URL=https://your-site.example npm run deploy:verify
```

该脚本会检查首页、推荐清单、趋势页、风格页、AI 页和灵感板的线上静态路由，并探测 AI endpoint 状态。

## GitHub Pages
GitHub Pages 可以展示静态页面，但不能运行内置 serverless AI 接口。AI 助手会自动使用本地模拟结果，适合作为无成本备用展示页。

## 安全注意
- 不要把真实 API key 写入前端代码或提交到 GitHub。
- 只在 Vercel/Netlify 的环境变量里保存密钥。
- 面试演示前先准备一个无 API 也可运行的兜底版本。
