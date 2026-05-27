# FashionAtlas 全球官方来源策略

FashionAtlas 现在定位为面向中文用户的全球时尚资源策展网页。产品不再把国内替代入口作为核心功能，而是用中文说明帮助用户理解国外资料，并优先跳转官方、权威和合法来源。

## 前台原则
- 资源详情页展示官方入口组：原始来源、品牌/机构档案、Vogue Runway、Google Books、WorldCat、博物馆或权威媒体入口。
- 不展示国内访问状态筛选，不承诺第三方网站在任何地区都可稳定访问。
- YouTube 只作为官方平台上的参考入口，不下载、不搬运、不镜像视频。
- 书籍只提供 WorldCat、Google Books、出版社、图书馆或正规购买/借阅线索。
- 中文价值来自策展解释、学习路径、风格词典、秀场脉络和灵感板，而不是复制资料。

## 数据口径
- 使用 `officialLinks` 组织来源入口。
- 保留 `primaryUrl` 作为主来源。
- 不再生成 `domesticAlternatives`、`mirrorLinks`、`accessRisk` 或 `isChinaFriendly`。
