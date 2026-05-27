# FashionAtlas | 时尚图谱

一个面向中文时尚爱好者的全球时尚美学学习与资讯策展网页。它不只做资源跳转，而是用推荐清单、趋势解释、学习路径和灵感板帮助用户决定该看什么、为什么看、怎么看。MVP 采用静态单页应用实现，不需要安装依赖即可打开。

## Open

直接在浏览器打开：

```text
/Users/work/code/VSCode/FashionAtlas/index.html
```

如果本地环境允许启动端口，也可以运行：

```bash
npm run dev
```

然后访问 `http://127.0.0.1:4173`。

部署前检查：

```bash
npm run check
```

该命令会执行语法检查和产品验收检查，覆盖推荐清单、趋势来源、官方来源策略、AI 目标选择、风格研究页和部署配置。

生成可交付部署包：

```bash
npm run deploy:archive
```

输出文件为 `dist/fashionatlas-deploy.zip`。

## Included

- 首页：今日看什么、本周趋势、新手入口、精选推荐清单和搜索
- 推荐清单：8 个情境化清单，覆盖书籍、影片、杂志和秀场，支持目标/难度/类型筛选
- 趋势周报：真实年度/月度/每周趋势观察，支持时间类型筛选，偏中国用户日常穿搭语境，不做价格分析
- 资源库：关键词搜索、频道/标签/难度/访问/语言筛选、卡片/列表视图
- 详情页：官方入口、简介、学习价值、标签、版权说明、相关资源
- 官方来源索引：优先跳转品牌、机构、出版社、馆藏、权威媒体和合法预览入口
- AI 助手：基于推荐清单、趋势和资源库生成学习建议，支持目标选择、学习清单和本周穿搭摘要
- 风格词典：20 个中文风格研究页，拆解气质、颜色、面料、廓形、品牌、代表影像、日常转译和误区
- 秀场路径：30 场经典秀场学习入口，包含 Vogue、YouTube 和品牌档案等官方/权威入口
- 时尚书架：50 本书，按入门、进阶、视觉、专业分类，提供合法入口
- 个人灵感板：用 localStorage 收藏推荐清单、趋势、资源、风格、书籍和秀场路径，并导出 Markdown
- 学习路径：6 条入门与进阶路径
- 文档：`docs/PRD.md`、`docs/PRODUCT_STRATEGY_AND_PLAN.md`、`docs/DESIGN.md`、`docs/GLOBAL_SOURCE_STRATEGY.md`、`docs/CASE_STUDY.md`、`docs/DEPLOYMENT.md`

## Data

当前资源数据在 `app.js` 中，已有 112 条资源、8 个推荐清单、4 期趋势内容、20 个风格词条、30 场秀场路径和 50 本书。后续可以迁移到 JSON、MDX、Pages CMS、Sanity 或 Supabase。

## AI API

复制 `.env.example` 中的变量到 Vercel/Netlify 环境变量：

```text
OPENAI_API_KEY=sk-your-key-here
OPENAI_MODEL=gpt-5-mini
```

不要把真实 key 写进前端代码。未配置 key 时，`#/ai` 会使用本地模拟结果，保证演示可用。
