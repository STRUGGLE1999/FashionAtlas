# FashionAtlas 计划完成审计

审计日期：2026-05-28

## 已验证完成

| 计划项 | 当前证据 |
| --- | --- |
| 首页从资源目录升级为策展首页 | `app.js` 的 `renderHome()` 展示今日看什么、推荐清单、中国日常穿搭趋势和核心工具入口。 |
| 导航以推荐清单和趋势周报为核心 | `index.html` 顶部导航包含推荐清单、趋势周报、风格词典、秀场路径、时尚书架、资源库、学习路径、AI 助手、灵感板。 |
| 去掉顶部项目复盘/关于提交 | `index.html` 不再包含 `#/case` 和 `#/about` 顶部入口。 |
| 放弃国内替代入口，改用官方/权威来源 | `docs/GLOBAL_SOURCE_STRATEGY.md`、`index.html`、`app.js` 均强调官方、权威、合法入口。 |
| 8 个推荐清单 | `app.js` 中 `recommendationGuides.length === 8`。 |
| 每个推荐清单 5-10 条 | 脚本验证结果：8 个清单条目数分别为 5、6、6、5、5、5、5、5。 |
| 推荐清单覆盖书籍、影片、杂志、秀场 | `recommendationGuides` 每条清单包含 `types` 和条目 `type`，覆盖四类内容。 |
| 推荐清单说明适合谁、怎么看、在哪里获取 | `guideItemCard()` 渲染 `suitableFor`、`readingOrWatchingFocus`、`whereToWatchOrRead`、`availabilityNote`。 |
| 推荐清单支持筛选 | `renderGuides()` 和 `bindGuideFilters()` 支持学习目标、难度、内容类型筛选。 |
| 趋势栏目数据结构 | `trendIssues` 包含 `periodYear`、`periodMonth`、`periodWeek`、`trendName`、`evidenceSources`、`editorialJudgement`、单品/颜色/材质/公式/场景字段。 |
| 1 个年度趋势、1 个真实月度趋势、2 个周趋势样例 | `trendIssues.length === 4`，类型包含年度、月度、周报、周报。 |
| 每期趋势至少 3 个来源依据 | 脚本验证 4 期趋势的 `evidenceSources.length` 都为 3。 |
| 趋势不做价格/预算/平替导购 | 前台趋势文案、AI prompt、文档均明确禁止价格分析、预算分层和替代单品推荐。 |
| 趋势页支持时间类型筛选 | `renderTrends()` 和 `bindTrendFilters()` 支持年度/月度/周报筛选，并展示时间轴说明。 |
| 风格词典升级为风格研究页 | `renderStyle()` 增加代表影像/摄影/杂志、日常穿搭转译、常见误区、相关趋势文章。 |
| 资源详情页升级 | `renderResource()` 展示官方入口组、学习价值、版权说明、如何阅读/观看、相关推荐清单与趋势。 |
| 灵感板升级 | `readBoard()`、`renderBoard()`、`boardToMarkdown()` 支持收藏推荐清单、趋势、资源、风格、书籍、秀场并导出 Markdown。 |
| AI 助手升级 | `renderAI()` 支持学习、穿搭、品牌研究、趋势跟踪目标；提供学习清单和本周穿搭摘要按钮。 |
| AI 输出引用 Guide/TrendIssue/Resource | `requestAiAnswer()` 向 API 发送 `guides`、`trends`、`resources`，`api/ai.js` 和 `netlify/functions/ai.js` prompt 要求基于给定内容回答。 |
| 文档和面试材料更新 | `README.md`、`docs/PRD.md`、`docs/DESIGN.md`、`docs/CASE_STUDY.md`、`docs/INTERVIEW_SCRIPT.md`、`docs/PROJECT_GOAL.md`、`docs/LAUNCH_CHECKLIST.md` 已同步新版定位。 |
| 基础检查通过 | `npm run check` 通过：语法检查 + `scripts/predeploy-check.js` 产品验收检查。 |
| 部署前机器自检 | `scripts/predeploy-check.js` 检查资源数、推荐清单、趋势来源、中文导航、官方来源策略、AI 目标选择、风格研究页和部署配置。 |
| 部署交付包 | `npm run deploy:archive` 已生成 `dist/fashionatlas-deploy.zip`，压缩包包含静态页面、Vercel/Netlify 配置、AI serverless 函数、部署文档和验收脚本。 |
| 本地 Git 仓库 | 已初始化本地 Git 仓库，当前分支为 `main`，初始提交为 `e96ce0e Initial FashionAtlas project`。 |
| GitHub 远端仓库 | 已配置 `origin` 为 `https://github.com/STRUGGLE1999/FashionAtlas.git`，并已推送 `main` 分支。 |
| 远端仓库配置说明 | `docs/GIT_REMOTE_SETUP.md` 已补充 GitHub 空仓库创建、`origin` 配置、`main` 分支推送和部署后验收步骤。 |
| Netlify 公开部署 | 已通过 Netlify 从 GitHub 仓库 `STRUGGLE1999/FashionAtlas` 导入并部署。线上地址：`https://classy-frangipane-caf975.netlify.app`。 |
| 线上部署验证 | Netlify 首次部署成功，上传 28 个静态文件，部署 1 个 Netlify Function；`DEPLOY_URL=https://classy-frangipane-caf975.netlify.app npm run deploy:verify` 通过，静态路由检查 8 个成功。 |
| 仓库清理 | 已删除根目录非必要中文草稿文档：`FashionAtlas 竞争性说明-1.md`、`产品定位.md`、`产品目标.md`、`分享链接.md`、`时尚网页竞品分析.md`。提交：`b673df8 Remove nonessential root documents`。 |
| README 线上地址 | `README.md` 已新增 Online 区块，写入 Netlify 访问地址和 GitHub main 分支自动部署说明。提交：`e2a87f6 Update README deployment URL`。 |

## 未完成/外部依赖

| 计划项 | 当前状态 | 需要什么 |
| --- | --- | --- |
| 配置真实 `OPENAI_API_KEY` 并线上测试 AI | 尚未完成。代码已支持 Netlify Function，但 Netlify 当前没有配置线上环境变量，所以 AI 助手会使用本地模拟兜底。 | 在 Netlify 项目 `classy-frangipane-caf975` 的 Project configuration -> Environment variables 中添加 `OPENAI_API_KEY` 和 `OPENAI_MODEL=gpt-5-mini`，然后重新部署并测试 `#/ai`。 |
| Notion 项目进展仪表盘 | 尚未完成。已整理出 Timeline、里程碑 Board、版本演进 Gallery 三张表，但当前会话没有拿到 Notion create/search 工具，无法直接写入 Notion。 | 用户可手动复制本文件中的 Notion 表格，或在 Notion 连接器工具刷新可用后由 Codex 创建页面。 |

## 当前结论

除线上真实 `OPENAI_API_KEY` 配置外，`docs/PRODUCT_STRATEGY_AND_PLAN.md` 中的产品、内容、交互、AI、版权、作品集材料、GitHub 远端仓库和 Netlify 公开部署目标已经完成。当前公开访问地址是 `https://classy-frangipane-caf975.netlify.app`，GitHub 仓库是 `https://github.com/STRUGGLE1999/FashionAtlas`。

## 2026-05-28 会话与进展补充

### 读取过的会话

| 会话 ID | 本地文件 | 主要内容 |
| --- | --- | --- |
| `019e6346-b0b8-7cb2-aec5-92bb79ada9b8` | `/Users/xiaolifang/.codex/sessions/2026/05/26/rollout-2026-05-26T15-53-57-019e6346-b0b8-7cb2-aec5-92bb79ada9b8.jsonl` | 从项目想法、竞品调研、MVP 搭建、版权边界、UI/UX 升级、AI 助手、国内用户增强，到新会话交接。 |
| `019e6753-a6f4-7ce0-822c-d623b2f2df95` | `/Users/xiaolifang/.codex/sessions/2026/05/27/rollout-2026-05-27T10-46-36-019e6753-a6f4-7ce0-822c-d623b2f2df95.jsonl` | 承接项目、重新定位、推荐清单/趋势模块落地、Git 初始化、GitHub 推送、Netlify 部署、仓库清理、README 更新、Notion 进度表整理。 |

### 当前关键状态

| 项目 | 当前状态 |
| --- | --- |
| 本地路径 | `/Users/work/code/VSCode/FashionAtlas` |
| GitHub 仓库 | `https://github.com/STRUGGLE1999/FashionAtlas` |
| Netlify 线上地址 | `https://classy-frangipane-caf975.netlify.app` |
| 当前分支 | `main` |
| 最新提交 | `e2a87f6 Update README deployment URL` |
| 工作区 | 最近一次检查为干净。 |
| 自动部署 | GitHub `main` 分支 push 后 Netlify 会自动部署。 |
| AI 助手 | 未配置线上 `OPENAI_API_KEY` 时使用本地模拟兜底，不影响静态页面浏览。 |
| Notion | 用户希望建立项目进展仪表盘；当前会话未获得 Notion 写入工具。 |

## Notion 项目进展仪表盘草稿

建议在 Notion 中建立 3 个数据库视图：`项目时间线 Timeline`、`里程碑 Board`、`版本演进 Gallery`。下面内容可直接复制到 Notion。

### 表 1：项目时间线 Timeline

| 日期 | 阶段 | 工作类型 | 当天目标 | 关键进展 | 主要产出 | 验证/状态 |
| --- | --- | --- | --- | --- | --- | --- |
| 2026-05-26 | 项目启动与可行性评估 | 调研 / 产品定义 | 判断“时尚资源整合网页”是否值得做，以及应该做成什么样。 | 从空目录开始，调研 Vogue Runway、Tagwalk、WGSN、BoF、Google Arts & Culture 等竞品；确定不做盗版资源库，而做“时尚学习资源档案”。 | 初版产品方案、PRD、设计文档、竞品判断。 | 明确 MVP 可行：先用高质量外链、中文策展、标签和学习路径打地基。 |
| 2026-05-26 | MVP 搭建 | 前端实现 / 数据建设 | 做出可运行的第一版网页。 | 创建静态 SPA，包含首页、资源库、资源详情、学习路径、专题、关于/提交页；内置 100+ 时尚资源。 | `index.html`、`app.js`、`styles.css`、`docs/PRD.md`、`docs/DESIGN.md`、`README.md`。 | `npm run check` 通过，资源数量 109 条。 |
| 2026-05-26 | 版权边界确认 | 产品策略 / 合规 | 判断 Z-Library、电子书、YouTube 视频能不能放到网站。 | 明确不能上传盗版书籍、PDF、搬运视频；网站只能做合法入口、书单、导读、来源说明和授权资源链接。 | PRD 增加内容与版权规则。 | 产品边界变清楚：帮用户找到书和理解书，不替版权方分发内容。 |
| 2026-05-26 | UI/UX 升级 | 设计优化 / MVP 强化 | 让项目更适合作品集和面试展示。 | 安装并使用 `ui-ux-pro-max`；把网站从普通资源站升级为更像“专业编辑部档案索引”的视觉方向；生成最终设计图。 | `.codex/skills/ui-ux-pro-max/`、设计图、更新后的首页/资源库 UI。 | MVP 更像专业产品，而不是简单链接页。 |
| 2026-05-26 | AI 与作品集化 | AI 功能 / 面试材料 | 增加 AI 产品经理项目亮点。 | 新增 AI 学习助手、项目复盘页、面试讲述脚本、上线清单；未配置 API Key 时提供本地模拟兜底。 | `api/ai.js`、`netlify/functions/ai.js`、`docs/CASE_STUDY.md`、`docs/INTERVIEW_SCRIPT.md`、`docs/LAUNCH_CHECKLIST.md`。 | 具备面试演示能力：能讲用户痛点、MVP 取舍、AI 设计和指标。 |
| 2026-05-26 | 国内用户增强 | 功能扩展 / 信息架构 | 面向国内用户解决全球资源访问和学习门槛。 | 扩展资源模型；新增风格词典、秀场路径、时尚书架、个人灵感板；提供多来源跳转和访问提示。 | `#/styles`、`#/runway-paths`、`#/bookshelf`、`#/board`。 | 数据规模扩展到资源 112 条、风格词条 20 个、秀场 30 场、书籍 50 本。 |
| 2026-05-27 | 新会话交接 | 项目管理 | 承接前一轮项目状态。 | 整理当前项目定位、实现状态、修改文件、下一步注意事项。 | 项目交接总结。 | 新会话可继续推进，不丢上下文。 |
| 2026-05-27 | 官方来源策略调整 | 产品定位 / 前端修改 | 从“国内替代入口”转向“全球官方来源中文策展”。 | 移除前台国内替代入口、访问风险筛选和项目复盘/关于提交入口；导航改为更像时尚档案站，后续又根据反馈改成中文目录。 | `index.html`、`styles.css`、`app.js`、`docs/GLOBAL_SOURCE_STRATEGY.md`。 | 导航变为中文：资源库、风格词典、秀场路径、时尚书架、学习路径、专题、AI 助手、灵感板。 |
| 2026-05-27 | 产品定位重构 | 产品策略 / 文档 | 判断“链接目录”是否有竞争力，并重做方向。 | 用《用户体验要素》五层模型分析：战略层、范围层、结构层、框架层、表现层；把产品升级为“中文时尚美学学习与资讯策展平台”。 | `docs/PRODUCT_STRATEGY_AND_PLAN.md`、更新 `docs/PRD.md`、`README.md`。 | 明确竞争力来自情境化推荐、趋势解释、中文策展判断和灵感沉淀。 |
| 2026-05-27 | 推荐与趋势规划确认 | 产品决策 | 明确学习资料和趋势资讯怎么分配。 | 确认内容比例：学习型时尚资料站 60%，日常穿搭趋势资讯站 40%；趋势按周/月做真实分析；目标用户偏时尚小白/爱好者。 | 更新 `PRODUCT_STRATEGY_AND_PLAN.md`、`PRD.md`。 | MVP 范围更清晰：书籍、影片、杂志、秀场推荐都要做。 |
| 2026-05-27 | 推荐清单与趋势模块落地 | 功能实现 | 按产品计划实现前台模块。 | 新增推荐清单、趋势周报/月报、详情页；首页改成“今天该看什么 + 本周趋势 + 推荐清单”；灵感板接入收藏。 | `#/guides`、`#/guide/:id`、`#/trends`、`#/trend/:id`。 | 检查通过，新入口和关键路由可用。 |
| 2026-05-27 | Git 初始化 | 工程管理 | 把本地项目纳入版本管理。 | 初始化本地 Git 仓库，形成初始提交。 | Commit `e96ce0e Initial FashionAtlas project`。 | 本地仓库建立，项目进入可追踪状态。 |
| 2026-05-27 | 本地仓库状态记录 | 文档 / 交付 | 记录当前 Git 状态。 | 补充本地 Git 仓库状态审计。 | Commit `40d6164 Document local git repository status`。 | 工作区状态清晰。 |
| 2026-05-28 | GitHub 远端准备 | 部署准备 / 文档 | 为公开仓库和部署闭环做准备。 | 编写远端仓库配置步骤；更新部署说明和完成审计。 | `docs/GIT_REMOTE_SETUP.md`、`docs/DEPLOYMENT.md`、`docs/COMPLETION_AUDIT.md`。 | Commit `95c6d71 Document remote repository setup`。 |
| 2026-05-28 | GitHub 推送 | 工程交付 | 把项目推送到 GitHub。 | 配置 `origin` 为 `STRUGGLE1999/FashionAtlas`，推送 `main` 分支。 | GitHub 仓库：`https://github.com/STRUGGLE1999/FashionAtlas`。 | Commit `e25c8c3 Document GitHub remote push`。 |
| 2026-05-28 | Netlify 上线 | 部署 / 发布 | 让别人能公开访问网站。 | 通过 Netlify 导入 GitHub 仓库并部署；上传 28 个文件，部署 1 个 Function。 | 线上地址：`https://classy-frangipane-caf975.netlify.app`。 | 生产站点可访问，静态路由检查 8 个成功。 |
| 2026-05-28 | 仓库清理 | 代码仓库整理 | 删除非项目必须的中文草稿文档。 | 删除根目录下竞争性说明、产品定位、产品目标、分享链接、竞品分析等非必要文档。 | Commit `b673df8 Remove nonessential root documents`。 | GitHub 和 Netlify 后续自动同步清理。 |
| 2026-05-28 | README 更新 | 文档完善 | 把线上访问地址写入 README。 | 新增 Online 区块，说明 Netlify 访问地址和 GitHub main 分支自动部署。 | `README.md`。 | Commit `e2a87f6 Update README deployment URL`。 |

### 表 2：里程碑 Board

| 里程碑 | 阶段分组 | 状态 | 时间 | 做成了什么 | 为什么重要 | 相关产出 |
| --- | --- | --- | --- | --- | --- | --- |
| 完成项目可行性判断 | 想法验证 | 已完成 | 2026-05-26 | 判断 FashionAtlas 不应做“资源搬运站”，而应做中文策展型学习资源档案。 | 避免一开始就陷入版权风险和低竞争力链接堆积。 | 产品方案、竞品分析、PRD 初稿。 |
| 完成静态 SPA MVP | MVP 搭建 | 已完成 | 2026-05-26 | 首页、资源库、详情页、学习路径、专题、关于页可用。 | 项目从想法变成可演示产品。 | `index.html`、`app.js`、`styles.css`。 |
| 建立合法内容边界 | 合规与内容策略 | 已完成 | 2026-05-26 | 明确不托管盗版书籍、PDF、搬运视频，只做合法入口和学习导读。 | 保证项目能长期存在，不因版权问题失控。 | PRD 内容版权规则。 |
| UI 升级为专业档案站风格 | UI/UX 升级 | 已完成 | 2026-05-26 | 使用 `ui-ux-pro-max` 优化首页和资源库，使其更像专业编辑部索引。 | 提升作品集和面试展示质量。 | 设计图、更新后的页面 UI。 |
| 增加 AI 学习助手 | AI 产品化 | 已完成 | 2026-05-26 | 用户可输入问题，获得学习路径和资源建议；未配置 Key 时有本地兜底。 | 让项目具备 AI 产品经理项目亮点。 | `api/ai.js`、`netlify/functions/ai.js`。 |
| 增加风格词典、秀场路径、书架、灵感板 | 功能扩展 | 已完成 | 2026-05-26 | 用户不只是搜资源，还能按风格、秀场、书籍和收藏体系学习。 | 从“资源列表”升级为“学习系统”。 | `#/styles`、`#/runway-paths`、`#/bookshelf`、`#/board`。 |
| 调整为官方来源中文策展 | 产品定位调整 | 已完成 | 2026-05-27 | 移除国内替代入口主叙事，强调官方/权威来源和中文解释。 | 让产品定位更高级，不像访问导航工具。 | `docs/GLOBAL_SOURCE_STRATEGY.md`。 |
| 完成五层模型产品重构 | 产品战略升级 | 已完成 | 2026-05-27 | 用战略层、范围层、结构层、框架层、表现层重新定义产品。 | 明确竞争力：推荐、趋势、策展、灵感沉淀。 | `docs/PRODUCT_STRATEGY_AND_PLAN.md`。 |
| 确认 60/40 内容结构 | 范围层确认 | 已完成 | 2026-05-27 | 学习型资料 60%，日常穿搭趋势资讯 40%，趋势按周/月更新。 | 避免产品只做资料库，增加持续访问理由。 | 更新 PRD 和产品计划。 |
| 落地推荐清单和趋势模块 | 核心功能实现 | 已完成 | 2026-05-27 | 新增推荐清单、趋势周报/月报和详情页。 | 解决用户“不知道看什么”的核心痛点。 | `#/guides`、`#/trends`。 |
| 初始化 Git 仓库 | 工程规范 | 已完成 | 2026-05-27 | 本地项目进入版本管理。 | 后续可以提交、回滚、部署、协作。 | Commit `e96ce0e`。 |
| 推送 GitHub | 远端托管 | 已完成 | 2026-05-28 | 项目进入公开 GitHub 仓库。 | 为 Netlify 自动部署和作品集展示打基础。 | GitHub `STRUGGLE1999/FashionAtlas`。 |
| 完成 Netlify 部署 | 上线发布 | 已完成 | 2026-05-28 | 网站公开可访问。 | 项目从本地作品变成真实上线产品。 | `https://classy-frangipane-caf975.netlify.app`。 |
| 清理仓库非必要文档 | 仓库整理 | 已完成 | 2026-05-28 | 删除根目录草稿、分享链接和非必要中文文档。 | 仓库更像正式项目，不暴露过程草稿。 | Commit `b673df8`。 |
| 更新 README 线上地址 | 交付完善 | 已完成 | 2026-05-28 | README 显示线上访问地址和自动部署说明。 | 访问者打开仓库就能找到产品入口。 | Commit `e2a87f6`。 |

### 表 3：版本演进 Gallery

| 版本 | 时间 | 阶段名称 | 当时的产品形态 | 核心功能 | 相比上一版的变化 | 可展示亮点 | 状态 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| V0 | 2026-05-26 上午 | 空白起点 | 目录基本为空，还不是 Git 仓库。 | 无正式产品功能。 | 从一个模糊想法开始：想做时尚资源整合网页。 | 展示从 0 到 1 的起点。 | 已完成 |
| V1 | 2026-05-26 上午 | 时尚学习资源档案 MVP | 可直接打开的静态单页网页。 | 首页、资源库、详情页、学习路径、专题、关于页；100+ 种子资源。 | 从空目录变成可运行网页。 | 能演示基本信息架构和资源搜索。 | 已完成 |
| V2 | 2026-05-26 中午 | 专业编辑部档案站 UI | 更像杂志式、档案式、编辑部索引的视觉系统。 | 强化首页、资源卡片、筛选、详情结构。 | 从普通卡片资源站升级为更专业的视觉体验。 | 适合作品集截图和面试展示。 | 已完成 |
| V3 | 2026-05-26 下午 | AI 产品经理展示版 | 带 AI 学习助手和项目复盘材料的 MVP。 | AI Guide、项目复盘页、面试脚本、上线清单、API/Netlify/Vercel 配置。 | 从普通网页升级为 AI-native 学习导航产品。 | 能讲 AI 如何降低时尚学习门槛。 | 已完成 |
| V4 | 2026-05-26 下午 | 国内用户增强版 | 面向国内用户的全球时尚学习索引平台。 | 风格词典、秀场路径、时尚书架、灵感板、多来源跳转。 | 从资源库升级为“中文学习入口 + 长期收藏体系”。 | 解决国内用户看不懂、找不到、打不开的问题。 | 已完成 |
| V5 | 2026-05-27 上午 | 官方来源中文策展版 | 全球时尚资源的中文策展网页。 | 中文导航、官方来源策略、移除国内访问风险前台逻辑。 | 从“访问替代工具”变成“官方来源策展平台”。 | 产品调性更高级，更接近时尚档案站。 | 已完成 |
| V6 | 2026-05-27 中午 | 美学学习与资讯策展平台 | 资料学习 60% + 趋势资讯 40% 的复合型产品。 | 推荐清单、趋势周报/月报、影片/杂志/书籍/秀场推荐规划。 | 从“链接目录”升级为“帮用户决定看什么”的产品。 | 竞争力更强，适合讲产品策略。 | 已完成 |
| V7 | 2026-05-27 下午 | 推荐清单与趋势模块版 | 首页突出“今天该看什么、本周趋势、推荐清单”。 | `#/guides`、`#/guide/:id`、`#/trends`、`#/trend/:id`、收藏接入。 | 从文档计划真正落成前台功能。 | 解决用户“不知道该看什么”的核心痛点。 | 已完成 |
| V8 | 2026-05-28 下午 | GitHub 托管版 | 项目进入远端仓库，可被版本追踪和展示。 | GitHub 仓库、提交历史、部署文档。 | 从本地项目变成可公开查看的工程项目。 | 面试官可以看代码和提交记录。 | 已完成 |
| V9 | 2026-05-28 下午 | Netlify 上线版 | 公开可访问的网站。 | 线上访问、自动部署、Netlify Function、README 线上地址。 | 从本地/仓库项目变成真实上线产品。 | 可以直接发链接给别人体验。 | 已完成 |
| V10 | 2026-05-28 下午 | 仓库清理交付版 | 更干净的正式项目仓库。 | 删除非必要中文草稿文档，README 更新线上地址。 | 从开发过程仓库整理成正式展示仓库。 | 更适合公开展示和投递作品集。 | 已完成 |

## 后续继续工作时需要记住

- 普通代码修改后流程：`git status` -> `npm run check` -> `git add ...` -> `git commit -m "..."` -> `git push origin main`。Netlify 会自动部署，线上 URL 不变。
- 不要把草稿、聊天分享链接、未经整理的中文分析文档放在根目录并提交到公开仓库；正式文档放 `docs/`。
- 不要托管盗版书籍、Z-Library 文件、下载搬运的视频、付费内容全文、图片包或任何绕过访问限制获得的内容。
- YouTube/书籍/杂志/秀场资源的正确做法是：官方链接、合法预览、出版社/品牌/博物馆/权威媒体入口、中文导读和策展说明。
- 当前产品叙事不是“链接跳转站”，而是“面向中文时尚爱好者的全球时尚美学学习与资讯策展平台”。
- 当前用户希望在 Notion 里做更直观的项目进展仪表盘，优先是 Timeline、Board、Gallery 三个视图。
