const channels = [
  ["runway", "Runway", "秀场与品牌", "按品牌、季节、城市和设计师建立秀场研究入口。"],
  ["history", "Fashion History", "时尚史", "用年代、服饰制度与文化语境理解风格演变。"],
  ["trend", "Trend", "趋势与色彩", "观察色彩、廓形、面料、消费与平台信号。"],
  ["design", "Design", "设计/面料/廓形", "把灵感落到结构、工艺、材料和造型语言。"],
  ["business", "Business", "商业/零售/品牌", "理解奢侈品、买手、零售、营销和行业战略。"],
  ["culture", "Culture", "文化/艺术/社会", "把时尚放回艺术、电影、性别、城市和亚文化里。"],
  ["tools", "Tools", "工具/数据库/AI", "收录检索、数据、AI、灵感和开源项目。"],
  ["learning", "Learning", "课程/书单/播客", "给初学者建立循序渐进的学习路径。"],
];

const channelMap = Object.fromEntries(channels.map(([id, en, zh, desc]) => [id, { id, en, zh, desc }]));

const images = [
  "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1465408953385-7c4627c29435?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?auto=format&fit=crop&w=900&q=80",
];

const seedResources = [
  ["Vogue Runway", "https://www.vogue.com/fashion-shows", "Vogue", "runway", "秀场、品牌、季节和街拍报道入口，适合建立当代秀场观看习惯。", "用它练习按品牌、城市、季节查找系列，并学习评论如何描述廓形与主题。", "入门", ["runway", "brand archive", "fashion week"], "English", "Freemium", "Database", "Global", "2000s-2020s", "部分内容可能需要订阅，本站只做外链索引。"],
  ["Vogue Image Archive", "https://www.vogue.com/fashion-shows/image-archive", "Vogue", "runway", "基于描述词搜索秀场图片的入口，适合练习视觉关键词。", "帮助初学者把颜色、面料、细节、廓形转成可搜索语言。", "进阶", ["visual search", "runway", "silhouette"], "English", "Freemium", "Database", "Global", "1990s-2020s", "使用来源页面查看原图与访问规则。"],
  ["Tagwalk", "https://www.tag-walk.com/", "Tagwalk", "tools", "时尚搜索引擎，用趋势标签组织秀场与品牌内容。", "可借鉴其颜色、材质、廓形、主题、细节等专业标签体系。", "进阶", ["fashion search", "trend", "tagging"], "English", "Freemium", "Tool", "Global", "2010s-2020s", "遵守 Tagwalk 访问与账号规则。"],
  ["Tagwalk Trends Dashboard", "https://www2.tag-walk.com/en/data-products/dashboard", "Tagwalk", "trend", "趋势仪表盘产品页，展示趋势对比、品牌分析、季节比较等能力。", "适合理解专业趋势工具如何把视觉资料转化为决策指标。", "专业", ["trend forecasting", "dashboard", "brand analysis"], "English", "Paid", "Tool", "Global", "2020s", "产品信息以官方页面为准。"],
  ["WGSN", "https://www.wgsn.com/en/wgsn", "WGSN", "trend", "全球趋势预测机构，覆盖消费者、产品、色彩和市场洞察。", "用来学习趋势报告的层级：宏观文化、消费者变化、产品方向。", "专业", ["forecasting", "consumer insight", "color"], "English", "Paid", "Platform", "Global", "2020s", "付费平台，本站不搬运报告内容。"],
  ["Business of Fashion", "https://www.businessoffashion.com/", "BoF", "business", "时尚商业新闻、行业分析、案例和职业资源。", "帮助把审美兴趣扩展到品牌、零售、供应链和商业模式。", "进阶", ["fashion business", "luxury", "retail"], "English", "Freemium", "Publication", "Global", "2010s-2020s", "部分文章需订阅。"],
  ["Google Arts & Culture Fashion", "https://artsandculture.google.com/project/fashion-art", "Google Arts & Culture", "culture", "汇集博物馆、文化机构与时尚专题展览。", "适合把服装当作文化史、艺术史和社会史材料学习。", "入门", ["museum", "culture", "archive"], "English", "Free", "Archive", "Global", "Historical", "查看每件藏品的来源与授权说明。"],
  ["Europeana Fashion Portal", "https://portal.fashionheritage.eu/", "Europeana Fashion", "history", "欧洲时尚遗产入口，聚合服饰、图像、海报、草图和目录。", "适合从馆藏视角学习历史服装与欧洲时尚文化。", "进阶", ["heritage", "archive", "museum"], "English", "Free", "Archive", "Europe", "Historical", "复用前检查单件藏品授权。"],
  ["V&A Fashion Collection", "https://www.vam.ac.uk/collections/fashion", "Victoria and Albert Museum", "history", "V&A 时尚馆藏与文章入口。", "适合学习 18 世纪以来服装、配饰和设计史。", "入门", ["museum", "fashion history", "textile"], "English", "Free", "Archive", "UK", "Historical", "馆藏图片授权以 V&A 页面为准。"],
  ["The Met Costume Institute", "https://www.metmuseum.org/about-the-met/collection-areas/the-costume-institute", "The Met", "history", "大都会艺术博物馆服装学院介绍与展览入口。", "理解时尚如何进入博物馆叙事与展览体系。", "入门", ["costume institute", "museum", "exhibition"], "English", "Free", "Archive", "US", "Historical", "遵循 The Met 开放访问与图片规则。"],
  ["The Museum at FIT", "https://www.fitnyc.edu/museum/", "FIT", "learning", "纽约时装技术学院博物馆，包含展览、活动和出版信息。", "适合连接时尚教育、策展和服装史研究。", "入门", ["museum", "education", "exhibition"], "English", "Free", "Institution", "US", "Historical", "展览资料以官方页面为准。"],
  ["International Library of Fashion Research", "https://fashionresearchlibrary.com/", "ILFR", "learning", "时尚研究图书馆，关注出版物、印刷品、邀请函等材料。", "提供“时尚材料档案馆”的范式，不只看衣服，也看出版和物料。", "进阶", ["library", "publication", "archive"], "English", "Free", "Institution", "Norway", "Contemporary", "请遵循机构访问规则。"],
  ["Pantone Fashion Color Trend Report", "https://www.pantone.com/articles/fashion-color-trend-report", "Pantone", "trend", "时装周色彩趋势报告入口。", "学习如何命名色彩、建立色彩故事和季节情绪。", "入门", ["color", "trend", "fashion week"], "English", "Free", "Report", "Global", "2020s", "报告版权归 Pantone 所有。"],
  ["Pinterest Predicts", "https://business.pinterest.com/pinterest-predicts/", "Pinterest", "trend", "基于平台搜索行为的年度趋势预测。", "适合理解大众视觉兴趣如何从搜索与收藏里浮现。", "入门", ["social trend", "forecasting", "consumer"], "English", "Free", "Report", "Global", "2020s", "引用数据请回链官方页面。"],
  ["The Lyst Index", "https://www.lyst.com/data/the-lyst-index/", "Lyst", "business", "季度热门品牌和商品指数。", "把时尚热度、品牌势能和消费信号连接起来。", "进阶", ["data", "brand ranking", "luxury"], "English", "Free", "Report", "Global", "2020s", "指数说明以 Lyst 官方为准。"],
  ["Fashionista", "https://fashionista.com/", "Fashionista", "business", "时尚新闻、职业、趋势与品牌报道。", "语言相对易读，适合从爱好者过渡到行业观察。", "入门", ["news", "career", "trend"], "English", "Free", "Publication", "US", "2020s", "本站只链接，不转载全文。"],
  ["Highsnobiety", "https://www.highsnobiety.com/", "Highsnobiety", "culture", "街头、奢侈品、青年文化和潮流商业媒体。", "适合观察高级时装如何与球鞋、音乐、青年文化互相影响。", "入门", ["streetwear", "culture", "luxury"], "English", "Free", "Publication", "Global", "2020s", "引用需遵守来源版权。"],
  ["SSENSE Editorial", "https://www.ssense.com/en-us/editorial", "SSENSE", "culture", "电商之外的编辑内容，覆盖设计师、艺术、文化与风格。", "适合学习兼具商业和文化气质的时尚编辑表达。", "进阶", ["editorial", "culture", "designer"], "English", "Free", "Publication", "Global", "2020s", "内容版权归 SSENSE。"],
  ["Dazed Fashion", "https://www.dazeddigital.com/fashion", "Dazed", "culture", "青年文化、实验时尚、艺术和亚文化媒体。", "理解先锋杂志如何制造审美态度和文化语境。", "进阶", ["subculture", "editorial", "youth"], "English", "Free", "Publication", "UK", "2020s", "仅作学习索引。"],
  ["AnOther Magazine Fashion", "https://www.anothermag.com/fashion-beauty", "AnOther", "culture", "时尚、艺术与摄影导向的杂志内容。", "适合学习视觉叙事、摄影语言和设计师访谈。", "进阶", ["magazine", "photography", "editorial"], "English", "Free", "Publication", "UK", "2020s", "仅作外链。"],
  ["i-D Fashion", "https://i-d.co/category/fashion/", "i-D", "culture", "青年身份、街头和前卫时尚内容。", "适合研究青年文化如何影响服装表达。", "入门", ["youth culture", "street style", "magazine"], "English", "Free", "Publication", "UK", "2020s", "仅作外链。"],
  ["NOWFASHION", "https://nowfashion.com/", "NOWFASHION", "runway", "秀场图片与时装周报道网站。", "补充 Vogue Runway 之外的秀场观看入口。", "入门", ["runway", "fashion week", "archive"], "English", "Freemium", "Database", "Global", "2020s", "查看来源授权。"],
  ["firstVIEW", "https://www.firstview.com/", "firstVIEW", "runway", "早期秀场图片数据库之一。", "适合研究秀场数据库产品如何按品牌和季节组织内容。", "进阶", ["runway archive", "database", "fashion week"], "English", "Paid", "Database", "Global", "1990s-2020s", "受访问和版权限制。"],
  ["CFDA", "https://cfda.com/", "CFDA", "business", "美国时装设计师协会官网。", "了解行业组织、奖项、设计师扶持与美国时尚生态。", "入门", ["industry", "designer", "award"], "English", "Free", "Institution", "US", "2020s", "以官方发布为准。"],
  ["British Fashion Council", "https://www.britishfashioncouncil.co.uk/", "BFC", "business", "英国时装协会，覆盖伦敦时装周与行业计划。", "适合研究时装周组织、设计师支持和行业政策。", "入门", ["fashion week", "industry", "designer"], "English", "Free", "Institution", "UK", "2020s", "以官方发布为准。"],
  ["Fashion Revolution", "https://www.fashionrevolution.org/", "Fashion Revolution", "culture", "关注时尚透明度、劳工与可持续议题。", "帮助建立审美之外的伦理与供应链意识。", "入门", ["sustainability", "ethics", "supply chain"], "English", "Free", "Organization", "Global", "2020s", "引用数据请回链来源。"],
  ["Ellen MacArthur Foundation Fashion", "https://ellenmacarthurfoundation.org/topics/fashion/overview", "Ellen MacArthur Foundation", "business", "循环经济与时尚系统转型研究。", "理解可持续时尚不是风格，而是材料、生产和商业系统。", "专业", ["sustainability", "circular economy", "systems"], "English", "Free", "Report", "Global", "2020s", "报告版权归机构所有。"],
  ["Fashionary", "https://fashionary.org/", "Fashionary", "design", "时尚设计工具书、模板和图解资源。", "适合初学者学习款式图、比例、单品结构和行业词汇。", "入门", ["fashion design", "sketching", "reference"], "English", "Paid", "Book/Tool", "Global", "2020s", "商业图书请通过正规渠道购买。"],
  ["The Cutting Class", "https://www.thecuttingclass.com/", "The Cutting Class", "design", "分析高级时装结构、剪裁和工艺的资源站。", "帮助从图片观看进入结构理解。", "专业", ["pattern cutting", "construction", "couture"], "English", "Freemium", "Publication", "Global", "2010s-2020s", "遵守来源订阅规则。"],
  ["SHOWstudio", "https://showstudio.com/", "SHOWstudio", "culture", "Nick Knight 创办的时尚影像与创意平台。", "适合学习时尚影像、访谈、表演和数字实验。", "进阶", ["fashion film", "photography", "interview"], "English", "Free", "Publication", "UK", "2000s-2020s", "内容版权归 SHOWstudio。"],
  ["The Fashion and Race Database", "https://fashionandrace.org/", "Fashion and Race Database", "culture", "从种族、身份与社会正义角度研究时尚。", "扩展时尚学习的社会文化维度。", "进阶", ["race", "identity", "fashion studies"], "English", "Free", "Database", "US", "Contemporary", "尊重原文与作者署名。"],
  ["Google Trends", "https://trends.google.com/", "Google", "tools", "搜索趋势工具。", "可用来初步观察某个风格词或品牌词的公众兴趣变化。", "入门", ["search data", "trend", "tool"], "English", "Free", "Tool", "Global", "2020s", "趋势数据需谨慎解读。"],
  ["awesome-fashion-ai", "https://github.com/ayushidalmia/awesome-fashion-ai", "GitHub", "tools", "时尚 AI 论文、数据集和工具的开源清单。", "为后续做视觉搜索、推荐、AI 摘要提供技术地图。", "专业", ["AI", "dataset", "research"], "English", "Free", "Open Source", "Global", "2020s", "遵守各项目许可证。"],
  ["GitHub Fashion Tech Topic", "https://github.com/topics/fashion-tech", "GitHub", "tools", "GitHub 上 fashion-tech 主题项目集合。", "发现虚拟试衣、服装理解、CAD、生成式设计等项目。", "进阶", ["fashion tech", "open source", "AI"], "English", "Free", "Open Source", "Global", "2020s", "逐项检查许可证与维护状态。"],
  ["Coursera Fashion as Design", "https://www.coursera.org/learn/fashion-design", "MoMA/Coursera", "learning", "从设计对象和社会语境理解时尚。", "适合非专业爱好者建立第一层时尚研究框架。", "入门", ["course", "fashion studies", "design"], "English", "Freemium", "Course", "Global", "Contemporary", "课程规则以平台为准。"],
  ["University of Fashion", "https://www.universityoffashion.com/", "University of Fashion", "learning", "覆盖制版、缝纫、CAD、插画、产品开发等视频课程。", "适合想从审美进入设计技能的人。", "进阶", ["course", "patternmaking", "sewing"], "English", "Paid", "Course", "Global", "Contemporary", "付费课程不搬运内容。"],
  ["The Business of Fashion Education", "https://www.businessoffashion.com/education/", "BoF Education", "learning", "BoF 的教育、职业和学校资源入口。", "帮助理解时尚职业路径和院校生态。", "入门", ["career", "education", "fashion school"], "English", "Freemium", "Education", "Global", "2020s", "以官方内容为准。"],
  ["Dior Heritage", "https://www.dior.com/en_us/fashion/heritage", "Dior", "runway", "Dior 官方品牌传承入口。", "学习品牌如何讲述创始人、符号、工艺和历史。", "入门", ["brand heritage", "couture", "Dior"], "English", "Free", "Brand Archive", "France", "Historical", "品牌内容版权归 Dior。"],
  ["Chanel Inside", "https://inside.chanel.com/", "Chanel", "runway", "Chanel 官方品牌历史与符号故事。", "适合研究品牌如何长期管理视觉符号和叙事。", "入门", ["brand heritage", "Chanel", "luxury"], "English", "Free", "Brand Archive", "France", "Historical", "品牌内容版权归 Chanel。"],
  ["Prada Group Stories", "https://www.pradagroup.com/en/news-media/stories.html", "Prada Group", "business", "Prada 集团新闻、文化项目与品牌故事。", "观察奢侈品集团如何平衡商业、艺术和社会项目。", "进阶", ["luxury group", "brand", "culture"], "English", "Free", "Brand", "Italy", "2020s", "以官方发布为准。"],
];

const templates = [
  ["Alexander McQueen: Savage Beauty", "https://www.metmuseum.org/exhibitions/listings/2011/alexander-mcqueen", "The Met", "history", "McQueen 展览资料入口，理解戏剧性、自然意象与服装叙事。", "把设计师作品放入策展文本中阅读，适合建立代表系列索引。", "进阶", ["McQueen", "exhibition", "couture"], "English", "Free", "Exhibition", "US", "1990s-2010s", "展览图文版权归来源机构。"],
  ["Christian Dior: Designer of Dreams", "https://www.vam.ac.uk/exhibitions/christian-dior-designer-of-dreams", "V&A", "history", "Dior 展览资料，关注 New Look、工坊与品牌历史。", "适合学习高定品牌如何形成可持续的视觉语言。", "入门", ["Dior", "exhibition", "couture"], "English", "Free", "Exhibition", "UK", "1940s-2020s", "以 V&A 授权说明为准。"],
  ["Comme des Garcons: Art of the In-Between", "https://www.metmuseum.org/exhibitions/listings/2017/rei-kawakubo", "The Met", "design", "川久保玲展览资料，讨论身体、廓形与反时尚。", "理解解构、非对称和概念时装的关键入口。", "专业", ["Rei Kawakubo", "deconstruction", "exhibition"], "English", "Free", "Exhibition", "US", "1980s-2010s", "以 The Met 授权说明为准。"],
  ["Heavenly Bodies", "https://www.metmuseum.org/exhibitions/listings/2018/heavenly-bodies", "The Met", "culture", "宗教图像与时尚想象的展览资料。", "适合学习时尚如何借用艺术、宗教和仪式感。", "进阶", ["religion", "couture", "exhibition"], "English", "Free", "Exhibition", "US", "Historical", "以来源授权为准。"],
  ["About Time: Fashion and Duration", "https://www.metmuseum.org/exhibitions/listings/2020/about-time", "The Met", "history", "用时间和现代性组织服装史的展览。", "适合学习如何用时间线而非品牌清单策展。", "进阶", ["timeline", "fashion history", "exhibition"], "English", "Free", "Exhibition", "US", "1870s-2020s", "以来源授权为准。"],
  ["Camp: Notes on Fashion", "https://www.metmuseum.org/exhibitions/listings/2019/camp-notes-on-fashion", "The Met", "culture", "Camp 审美与时尚的展览资料。", "帮助理解夸张、戏剧化、反讽和品味政治。", "进阶", ["camp", "aesthetic", "culture"], "English", "Free", "Exhibition", "US", "Historical", "以来源授权为准。"],
  ["China: Through the Looking Glass", "https://www.metmuseum.org/exhibitions/listings/2015/china-through-the-looking-glass", "The Met", "culture", "中国意象在西方时尚中的展览资料。", "适合讨论跨文化灵感、凝视与视觉翻译。", "专业", ["China", "culture", "exhibition"], "English", "Free", "Exhibition", "US", "Historical", "以来源授权为准。"],
  ["Items: Is Fashion Modern?", "https://www.moma.org/calendar/exhibitions/1638", "MoMA", "design", "以单品为单位讨论现代时尚。", "适合把白 T、牛仔裤、小黑裙等单品放入现代设计史。", "入门", ["modern fashion", "item", "design"], "English", "Free", "Exhibition", "US", "Modern", "以 MoMA 授权说明为准。"],
  ["Fashion History Timeline", "https://fashionhistory.fitnyc.edu/", "FIT", "history", "按年代、地区和主题整理的时尚史时间线。", "非常适合初学者建立服装史骨架。", "入门", ["timeline", "fashion history", "education"], "English", "Free", "Education", "Global", "Historical", "引用请署名来源。"],
  ["Google Arts & Culture: We Wear Culture", "https://blog.google/topics/arts-culture/we-wear-culture-discover-why-we-wear-what-we-wear/", "Google", "culture", "Google 对 We Wear Culture 项目的介绍。", "理解大型平台如何聚合博物馆与时尚文化内容。", "入门", ["culture", "museum", "archive"], "English", "Free", "Article", "Global", "Historical", "以 Google 与机构授权为准。"],
  ["V&A Collections API", "https://developers.vam.ac.uk/", "V&A", "tools", "V&A 馆藏 API 文档入口。", "后续接公共馆藏数据时可作为重点技术来源。", "专业", ["API", "museum", "data"], "English", "Free", "API", "UK", "Historical", "遵守 API 使用条款。"],
  ["Europeana APIs", "https://pro.europeana.eu/resources/apis", "Europeana", "tools", "Europeana API 文档入口。", "适合把开放文化遗产元数据接入 FashionAtlas 二期。", "专业", ["API", "heritage", "metadata"], "English", "Free", "API", "Europe", "Historical", "遵守 Europeana API 条款。"],
  ["Open Access at The Met", "https://www.metmuseum.org/about-the-met/policies-and-documents/open-access", "The Met", "tools", "The Met 开放访问政策。", "帮助建立图片与数据复用的版权判断能力。", "进阶", ["open access", "license", "museum"], "English", "Free", "Policy", "US", "Historical", "逐项确认是否 Open Access。"],
  ["Fashion-MNIST", "https://github.com/zalandoresearch/fashion-mnist", "Zalando Research", "tools", "机器学习入门用服饰图像数据集。", "适合理解时尚图像分类的基础，但不等于真实行业视觉分析。", "入门", ["dataset", "AI", "classification"], "English", "Free", "Dataset", "Global", "Contemporary", "遵守数据集许可证。"],
  ["DeepFashion", "http://mmlab.ie.cuhk.edu.hk/projects/DeepFashion.html", "CUHK MMLab", "tools", "服装识别、属性和检索相关研究数据集。", "适合未来做图像理解或相似风格推荐时参考。", "专业", ["dataset", "visual search", "AI"], "English", "Free", "Dataset", "Global", "Contemporary", "使用前确认研究用途和许可。"],
  ["The State of Fashion", "https://www.mckinsey.com/industries/retail/our-insights/state-of-fashion", "McKinsey & BoF", "business", "年度时尚行业报告。", "帮助理解宏观经济、消费变化和品牌战略语境。", "专业", ["industry report", "strategy", "luxury"], "English", "Free", "Report", "Global", "2020s", "报告版权归发布方。"],
  ["Fashion Transparency Index", "https://www.fashionrevolution.org/about/transparency/", "Fashion Revolution", "business", "品牌透明度与供应链披露相关资料。", "用来学习可持续议题如何被量化和比较。", "专业", ["transparency", "sustainability", "supply chain"], "English", "Free", "Report", "Global", "2020s", "引用请回链官方。"],
  ["Glossy", "https://www.glossy.co/", "Glossy", "business", "时尚、美妆和奢侈品商业媒体。", "补充品牌营销、DTC、零售和消费者变化案例。", "进阶", ["marketing", "retail", "beauty"], "English", "Freemium", "Publication", "US", "2020s", "部分内容需订阅。"],
  ["Retail Dive Fashion", "https://www.retaildive.com/topic/fashion/", "Retail Dive", "business", "零售行业中的时尚新闻和商业动态。", "从渠道、库存、门店和电商角度看时尚。", "进阶", ["retail", "ecommerce", "market"], "English", "Free", "Publication", "US", "2020s", "仅作外链。"],
  ["Dezeen Fashion", "https://www.dezeen.com/fashion/", "Dezeen", "design", "设计媒体中的时尚、材料与可穿戴项目。", "适合把服装设计与产品、建筑和材料创新连接起来。", "入门", ["design", "material", "wearable"], "English", "Free", "Publication", "Global", "2020s", "仅作外链。"],
  ["Nowness Fashion", "https://www.nowness.com/category/fashion", "Nowness", "culture", "时尚影像、短片和艺术化叙事。", "训练从动态影像理解服装、身体和氛围。", "进阶", ["fashion film", "video", "culture"], "English", "Free", "Video", "Global", "2020s", "视频版权归来源。"],
  ["SHOWstudio Interviews", "https://showstudio.com/projects/in_fashion", "SHOWstudio", "learning", "设计师与行业人物访谈项目。", "通过一手访谈理解创作者语言和职业路径。", "进阶", ["interview", "designer", "career"], "English", "Free", "Interview", "UK", "2000s-2020s", "仅作外链。"],
  ["The Gentlewoman", "https://thegentlewoman.co.uk/", "The Gentlewoman", "culture", "女性人物、摄影与杂志视觉风格。", "适合研究克制、人物导向的编辑审美。", "进阶", ["magazine", "portrait", "editorial"], "English", "Freemium", "Publication", "UK", "2020s", "以来源访问规则为准。"],
  ["System Magazine", "https://system-magazine.com/", "System", "business", "设计师访谈、行业人物与深度专题。", "适合学习行业内部视角和长访谈结构。", "专业", ["interview", "industry", "designer"], "English", "Freemium", "Publication", "Global", "2020s", "以来源访问规则为准。"],
  ["032c", "https://032c.com/", "032c", "culture", "柏林文化、时尚和艺术杂志。", "观察时尚如何与城市、音乐和艺术语境结合。", "进阶", ["magazine", "Berlin", "culture"], "English", "Free", "Publication", "Germany", "2020s", "仅作外链。"],
  ["Purple Magazine", "https://purple.fr/", "Purple", "culture", "艺术、摄影和时尚杂志。", "适合研究独立杂志的艺术化时尚表达。", "专业", ["magazine", "art", "photography"], "English", "Free", "Publication", "France", "2020s", "仅作外链。"],
  ["FashionUnited", "https://fashionunited.com/", "FashionUnited", "business", "时尚行业新闻和职业信息平台。", "补充全球行业新闻与就业生态。", "入门", ["news", "career", "industry"], "English", "Free", "Publication", "Global", "2020s", "仅作外链。"],
  ["WWD", "https://wwd.com/", "WWD", "business", "权威时尚商业与行业新闻媒体。", "适合追踪设计师任命、品牌业绩和行业事件。", "专业", ["news", "luxury", "industry"], "English", "Freemium", "Publication", "US", "2020s", "部分内容需订阅。"],
  ["Vogue Business", "https://www.voguebusiness.com/", "Vogue Business", "business", "Vogue 的时尚商业分析平台。", "从品牌、技术、可持续和消费趋势理解行业。", "专业", ["fashion business", "technology", "sustainability"], "English", "Freemium", "Publication", "Global", "2020s", "部分内容需注册或订阅。"],
  ["The Impression", "https://theimpression.com/", "The Impression", "runway", "广告大片、秀场评论和创意行业观察。", "适合研究品牌 campaign 和创意总监视觉策略。", "进阶", ["campaign", "runway", "creative direction"], "English", "Freemium", "Publication", "Global", "2020s", "仅作外链。"],
  ["Models.com", "https://models.com/", "Models.com", "runway", "模特、摄影师、造型师和行业创意人员资料。", "帮助理解时尚不是只有设计师，也有完整创意网络。", "进阶", ["model", "photographer", "industry"], "English", "Freemium", "Database", "Global", "2020s", "以来源规则为准。"],
  ["Fashion Model Directory", "https://www.fashionmodeldirectory.com/", "FMD", "runway", "模特、品牌、杂志和时装秀资料库。", "可作为人物与品牌交叉索引参考。", "进阶", ["database", "model", "brand"], "English", "Freemium", "Database", "Global", "Historical", "以来源规则为准。"],
  ["Not Just A Label", "https://www.notjustalabel.com/", "NJAL", "runway", "独立设计师平台。", "适合发现大牌之外的新锐设计师和小众审美。", "入门", ["emerging designer", "independent", "brand"], "English", "Free", "Platform", "Global", "2020s", "以来源规则为准。"],
  ["1 Granary", "https://1granary.com/", "1 Granary", "learning", "关注时尚教育、毕业生和创意实践。", "适合了解时尚学生、院校和新锐创作生态。", "进阶", ["fashion school", "graduate", "education"], "English", "Free", "Publication", "Global", "2020s", "仅作外链。"],
  ["Central Saint Martins", "https://www.arts.ac.uk/colleges/central-saint-martins", "UAL", "learning", "中央圣马丁学院官网。", "研究设计教育、课程结构和毕业作品入口。", "入门", ["fashion school", "education", "London"], "English", "Free", "Institution", "UK", "2020s", "以院校官网为准。"],
  ["London College of Fashion", "https://www.arts.ac.uk/colleges/london-college-of-fashion", "UAL", "learning", "伦敦时装学院官网。", "了解时尚设计、商业、媒体和可持续方向的教育框架。", "入门", ["fashion school", "education", "London"], "English", "Free", "Institution", "UK", "2020s", "以院校官网为准。"],
  ["Parsons Fashion", "https://www.newschool.edu/parsons/fashion-school/", "Parsons", "learning", "Parsons 时尚学院入口。", "理解纽约时尚教育如何连接设计、社会和商业。", "入门", ["fashion school", "education", "New York"], "English", "Free", "Institution", "US", "2020s", "以院校官网为准。"],
  ["Institut Francais de la Mode", "https://www.ifmparis.fr/en", "IFM", "learning", "法国时尚学院官网。", "了解巴黎时尚教育、奢侈品管理和设计研究路径。", "入门", ["fashion school", "Paris", "luxury"], "English", "Free", "Institution", "France", "2020s", "以院校官网为准。"],
  ["A Shaded View on Fashion", "https://ashadedviewonfashion.com/", "ASVOF", "culture", "Diane Pernet 的时尚影像与独立视角平台。", "适合接触主流媒体之外的时尚电影和先锋策展。", "专业", ["fashion film", "independent", "culture"], "English", "Free", "Publication", "Global", "2020s", "仅作外链。"],
  ["Fashion Film Festival Milano", "https://fashionfilmfestivalmilano.com/", "FFFMilano", "culture", "米兰时尚电影节。", "理解时尚与短片、广告和艺术影像的关系。", "进阶", ["fashion film", "festival", "video"], "English", "Free", "Festival", "Italy", "2020s", "以来源规则为准。"],
  ["The Costume Society", "https://costumesociety.org.uk/", "The Costume Society", "history", "服装史研究组织。", "适合寻找服装史活动、论文和研究社群。", "进阶", ["costume history", "research", "society"], "English", "Free", "Organization", "UK", "Historical", "以来源规则为准。"],
  ["Berg Fashion Library", "https://www.bloomsburyfashioncentral.com/products/berg-fashion-library", "Bloomsbury", "learning", "专业时尚百科、电子书与参考资料库。", "如果能通过学校或图书馆访问，是系统学习时尚史的重要资源。", "专业", ["library", "encyclopedia", "fashion history"], "English", "Paid", "Database", "Global", "Historical", "通常需机构订阅。"],
  ["Bloomsbury Fashion Central", "https://www.bloomsburyfashioncentral.com/", "Bloomsbury", "learning", "时尚、设计和服装研究数据库入口。", "适合学术型学习路径和论文参考。", "专业", ["academic", "library", "fashion studies"], "English", "Paid", "Database", "Global", "Historical", "通常需机构订阅。"],
  ["Fashion Theory Journal", "https://www.tandfonline.com/journals/rfft20", "Taylor & Francis", "learning", "时尚研究学术期刊。", "适合从兴趣学习进入 fashion studies 理论。", "专业", ["academic", "fashion theory", "journal"], "English", "Paid", "Journal", "Global", "Contemporary", "论文访问遵守平台规则。"],
  ["Dress Practice Collective", "https://dresspracticecollective.com/", "Dress Practice Collective", "culture", "关于服饰、身体和文化实践的研究平台。", "帮助把穿衣理解为社会和文化实践。", "进阶", ["dress studies", "culture", "body"], "English", "Free", "Publication", "Global", "Contemporary", "仅作外链。"],
  ["Fashion and Textile Museum", "https://fashiontextilemuseum.org/", "Fashion and Textile Museum", "history", "伦敦时尚与纺织博物馆。", "补充纺织、印花与时尚展览资源。", "入门", ["textile", "museum", "exhibition"], "English", "Free", "Institution", "UK", "Historical", "以官方页面为准。"],
  ["MoMu Antwerp", "https://www.momu.be/en", "MoMu", "history", "安特卫普时尚博物馆。", "适合研究比利时时尚、安特卫普六君子与展览策展。", "进阶", ["museum", "Antwerp", "designer"], "English", "Free", "Institution", "Belgium", "Contemporary", "以官方页面为准。"],
  ["Kyoto Costume Institute", "https://www.kci.or.jp/en/", "KCI", "history", "京都服饰文化研究财团。", "适合研究西方服装史、日本视角与馆藏展览。", "进阶", ["costume", "museum", "Japan"], "English", "Free", "Institution", "Japan", "Historical", "以官方页面为准。"],
  ["Kerry Taylor Auctions", "https://kerrytaylorauctions.com/", "Kerry Taylor Auctions", "history", "古董时装拍卖与档案图片。", "可观察 archive fashion、古董服饰和市场价值。", "专业", ["vintage", "auction", "archive fashion"], "English", "Free", "Auction", "UK", "Historical", "拍卖图文版权归来源。"],
  ["Sotheby's Fashion", "https://www.sothebys.com/en/departments/fashion", "Sotheby's", "business", "奢侈品与时尚拍卖入口。", "理解稀缺性、品牌历史和二级市场如何塑造价值。", "进阶", ["auction", "luxury", "archive fashion"], "English", "Free", "Auction", "Global", "Historical", "以来源规则为准。"],
  ["Christie's Handbags & Fashion", "https://www.christies.com/en/departments/handbags-and-accessories-58-1.aspx", "Christie's", "business", "手袋和配饰拍卖入口。", "适合学习奢侈品配饰、稀缺款和二级市场。", "进阶", ["auction", "handbag", "luxury"], "English", "Free", "Auction", "Global", "Contemporary", "以来源规则为准。"],
  ["Vestiaire Collective Journal", "https://www.vestiairecollective.com/journal/", "Vestiaire Collective", "business", "二手奢侈品平台的趋势和可持续内容。", "观察转售市场、archive fashion 和循环消费。", "入门", ["resale", "archive fashion", "sustainability"], "English", "Free", "Publication", "Global", "2020s", "平台内容以来源为准。"],
  ["The RealReal Editorial", "https://www.therealreal.com/editorial", "The RealReal", "business", "奢侈品转售平台编辑内容。", "适合研究认证、品牌热度和二手市场语言。", "入门", ["resale", "luxury", "editorial"], "English", "Free", "Publication", "US", "2020s", "平台内容以来源为准。"],
  ["NSS Magazine Fashion", "https://www.nssmag.com/en/fashion", "nss magazine", "culture", "欧洲青年时尚、球鞋、街头和文化媒体。", "补充潮流文化和社交媒体语境。", "入门", ["streetwear", "culture", "Europe"], "English", "Free", "Publication", "Europe", "2020s", "仅作外链。"],
  ["Hypebeast Fashion", "https://hypebeast.com/fashion", "Hypebeast", "culture", "潮流、街头、球鞋和奢侈品新闻。", "理解街头潮流和时尚商业交汇。", "入门", ["streetwear", "sneakers", "luxury"], "English", "Free", "Publication", "Global", "2020s", "仅作外链。"],
  ["Acne Paper", "https://www.acnepaper.com/", "Acne Paper", "culture", "Acne Studios 的文化出版项目。", "学习品牌如何通过杂志构建长期文化气质。", "进阶", ["brand publication", "magazine", "culture"], "English", "Free", "Publication", "Sweden", "2020s", "以来源规则为准。"],
  ["Miu Miu M/Marbles", "https://www.miumiu.com/ww/en/miumiu-club/marbles.html", "Miu Miu", "culture", "Miu Miu 的文化与影像项目入口。", "观察品牌如何通过女性创作、影像和社群建立叙事。", "进阶", ["brand culture", "film", "Miu Miu"], "English", "Free", "Brand", "Italy", "2020s", "品牌内容版权归来源。"],
  ["Saint Laurent Rive Droite", "https://www.ysl.com/en-us/stories/rive-droite", "Saint Laurent", "culture", "Saint Laurent 的文化零售与策展项目。", "学习品牌如何把店铺、艺术、音乐和生活方式连接。", "进阶", ["brand culture", "retail", "curation"], "English", "Free", "Brand", "France", "2020s", "品牌内容版权归来源。"],
  ["Gucci Equilibrium", "https://equilibrium.gucci.com/", "Gucci", "business", "Gucci 的可持续与社会影响平台。", "观察奢侈品牌如何公开 ESG、文化与责任叙事。", "进阶", ["sustainability", "brand", "ESG"], "English", "Free", "Brand", "Italy", "2020s", "品牌内容版权归来源。"],
  ["LVMH", "https://www.lvmh.com/", "LVMH", "business", "全球奢侈品集团官网。", "了解集团品牌矩阵、财报、人才与创意生态。", "进阶", ["luxury group", "brand portfolio", "business"], "English", "Free", "Company", "France", "2020s", "以官方信息为准。"],
  ["Kering", "https://www.kering.com/", "Kering", "business", "奢侈品集团官网，包含品牌、可持续和财务信息。", "适合比较集团战略、品牌定位和可持续议题。", "进阶", ["luxury group", "sustainability", "business"], "English", "Free", "Company", "France", "2020s", "以官方信息为准。"],
  ["Richemont", "https://www.richemont.com/", "Richemont", "business", "奢侈品集团官网，重点覆盖珠宝、腕表与时装品牌。", "补充奢侈品集团和硬奢生态理解。", "进阶", ["luxury group", "jewelry", "watch"], "English", "Free", "Company", "Switzerland", "2020s", "以官方信息为准。"],
  ["Awwwards Fashion Websites", "https://www.awwwards.com/websites/fashion/", "Awwwards", "tools", "时尚网站设计灵感集合。", "为 FashionAtlas 后续视觉升级提供交互和版式参考。", "入门", ["web design", "inspiration", "UI"], "English", "Freemium", "Design Gallery", "Global", "2020s", "设计参考不等于复制。"],
  ["Godly Website Fashion", "https://godly.website/?categories=fashion", "Godly", "tools", "高质量网站灵感目录，可按类别浏览。", "适合寻找杂志感、图片墙和目录型网站参考。", "入门", ["web design", "inspiration", "UI"], "English", "Free", "Design Gallery", "Global", "2020s", "设计参考需原创实现。"],
  ["Mobbin Fashion Apps", "https://mobbin.com/browse/ios/apps?categories=fashion", "Mobbin", "tools", "移动端产品界面参考库。", "帮助设计收藏、筛选、详情页等移动体验。", "进阶", ["mobile UI", "reference", "UX"], "English", "Freemium", "Design Gallery", "Global", "2020s", "以平台访问规则为准。"],
  ["awesome-design", "https://github.com/gztchan/awesome-design", "GitHub", "tools", "设计资源开源清单。", "补充字体、色彩、原型、图库和设计学习资源。", "入门", ["design resources", "open source", "UI"], "English", "Free", "Open Source", "Global", "2020s", "遵守清单与外链许可证。"],
  ["awesome-design-systems", "https://github.com/klaufel/awesome-design-systems", "GitHub", "tools", "设计系统资源清单。", "为 FashionAtlas 后续组件规范和设计 token 提供参考。", "进阶", ["design system", "UI", "components"], "English", "Free", "Open Source", "Global", "2020s", "遵守各项目许可证。"],
  ["free-directory-boilerplate", "https://github.com/javayhu/free-directory-boilerplate", "GitHub", "tools", "开源目录站模板。", "后续升级为 Next.js 目录产品时可参考分类、投稿、CMS 和 SEO。", "进阶", ["directory", "Next.js", "CMS"], "English", "Free", "Open Source", "Global", "2020s", "遵守项目许可证。"],
  ["Pages CMS", "https://pagescms.org/", "Pages CMS", "tools", "适合静态站的开源 Git-backed CMS。", "后续可让非技术编辑直接维护资源 JSON/MDX。", "进阶", ["CMS", "static site", "Git"], "English", "Free", "CMS", "Global", "2020s", "遵守项目许可证。"],
];

const extraResources = [
  ["Alexander McQueen SS1999 No.13 视频参考", "https://www.youtube.com/results?search_query=Alexander+McQueen+Spring+Summer+1999+No.13", "YouTube Search", "runway", "McQueen 机械喷漆裙经典秀场的视频检索入口，用于理解身体、机器、表演和服装的关系。", "适合学习秀场为什么不只是衣服展示，也可以是一次艺术表演。建议搭配 Vogue、品牌档案或博物馆图文资料交叉阅读。", "入门", ["McQueen", "runway video", "performance", "YouTube"], "English", "Free", "Video", "Global", "1999", "只提供 YouTube 官方搜索入口，不下载、不搬运、不嵌入第三方视频。"],
  ["Fashion: The Definitive History of Costume and Style", "https://www.worldcat.org/search?q=Fashion%3A+The+Definitive+History+of+Costume+and+Style", "WorldCat", "learning", "DK 服装与时尚史入门书，适合建立基础年代框架。", "适合中文用户先用作地图式阅读：不必从头背知识，而是建立服装史的大时间线。", "入门", ["book", "fashion history", "costume"], "English", "Paid", "Book", "Global", "Historical", "只提供合法馆藏/购买/预览入口，不提供电子书下载。"],
  ["The Met Open Access Costume Collection", "https://www.metmuseum.org/about-the-met/policies-and-documents/open-access", "The Met", "history", "大都会博物馆开放访问政策入口，用于判断哪些服装馆藏图像可合法复用。", "适合做论文、PPT 和视觉研究前先学习版权边界。", "进阶", ["museum", "open access", "copyright"], "English", "Free", "Archive", "US", "Historical", "开放访问范围需逐项确认，未标记开放的图片不要复制使用。"],
];

const sourceTypeLabels = {
  runway: "秀场",
  video: "视频",
  book: "书籍",
  museum: "博物馆",
  magazine: "杂志",
  course: "课程",
  tool: "工具",
  topic: "专题",
};

function inferSourceType(item) {
  const text = [item[0], item[7].join(" "), item[10], item[2]].join(" ").toLowerCase();
  if (text.includes("youtube") || text.includes("video") || text.includes("film")) return "video";
  if (text.includes("book") || text.includes("library") || text.includes("worldcat")) return "book";
  if (text.includes("museum") || text.includes("met") || text.includes("v&a") || text.includes("archive")) return "museum";
  if (text.includes("magazine") || text.includes("vogue") || text.includes("dazed")) return "magazine";
  if (text.includes("course") || text.includes("education") || text.includes("school")) return "course";
  if (item[3] === "tools") return "tool";
  if (item[3] === "runway") return "runway";
  return "topic";
}

function makeOfficialLinks(item, sourceType) {
  const title = encodeURIComponent(item[0]);
  const links = [{ label: item[2], url: item[1], note: "官方来源或原始发布入口" }];
  if (sourceType === "video") {
    links.push({ label: "Vogue Runway 搜索", url: `https://www.vogue.com/fashion-shows/search?q=${title}`, note: "搭配权威图文资料理解系列背景。" });
  }
  if (sourceType === "book") {
    links.push({ label: "Google Books 预览", url: `https://www.google.com/search?tbm=bks&q=${title}`, note: "查看合法预览和版本信息。" });
  }
  if (sourceType === "museum") {
    links.push({ label: "Google Arts & Culture 搜索", url: `https://artsandculture.google.com/search?q=${title}`, note: "补充博物馆与文化机构的公开资料。" });
  }
  return links;
}

function enrichResource(item, index) {
  const sourceType = inferSourceType(item);
  return {
    id: `res-${String(index + 1).padStart(3, "0")}`,
    title: item[0],
    url: item[1],
    primaryUrl: item[1],
    source: item[2],
    channel: item[3],
    summary: item[4],
    whyUseful: item[5],
    difficulty: item[6],
    tags: item[7],
    language: item[8],
    priceType: item[9],
    contentType: item[10],
    sourceType,
    region: item[11],
    era: item[12],
    licenseNote: item[13],
    officialLinks: makeOfficialLinks(item, sourceType),
    thumbnail: images[index % images.length],
    featured: index < 9 || [14, 31, 40, 51, 63, 76].includes(index),
    createdAt: `2026-05-${String(1 + (index % 24)).padStart(2, "0")}`,
    updatedAt: `2026-05-${String(2 + (index % 24)).padStart(2, "0")}`,
    relatedResourceIds: [],
  };
}

const resources = [...seedResources, ...templates, ...extraResources].map(enrichResource);

resources.forEach((resource) => {
  resource.relatedResourceIds = resources
    .filter((item) => item.id !== resource.id && item.channel === resource.channel)
    .slice(0, 3)
    .map((item) => item.id);
});

const learningPaths = [
  {
    id: "fashion-history",
    title: "时尚史入门",
    subtitle: "从时间线、博物馆和经典展览建立服装史骨架。",
    level: "入门",
    resourceIds: ["res-009", "res-010", "res-048", "res-049", "res-041", "res-042", "res-045", "res-090"],
  },
  {
    id: "runway-reading",
    title: "看懂秀场",
    subtitle: "学会按品牌、季节、城市、主题和视觉关键词阅读系列。",
    level: "入门",
    resourceIds: ["res-001", "res-002", "res-022", "res-023", "res-004", "res-075", "res-076", "res-077"],
  },
  {
    id: "brand-research",
    title: "品牌研究",
    subtitle: "用品牌官网、集团信息、广告和展览建立品牌档案。",
    level: "进阶",
    resourceIds: ["res-038", "res-039", "res-040", "res-085", "res-086", "res-087", "res-088", "res-089"],
  },
  {
    id: "trend-research",
    title: "趋势研究",
    subtitle: "把色彩、平台信号、指数和行业报告结合起来。",
    level: "进阶",
    resourceIds: ["res-004", "res-005", "res-013", "res-014", "res-015", "res-056", "res-057", "res-017"],
  },
  {
    id: "textile-silhouette",
    title: "面料与廓形",
    subtitle: "从单品、结构、剪裁和材料理解设计语言。",
    level: "进阶",
    resourceIds: ["res-028", "res-029", "res-047", "res-044", "res-059", "res-090", "res-064", "res-067"],
  },
  {
    id: "fashion-business",
    title: "时尚商业",
    subtitle: "理解奢侈品集团、零售、转售、可持续和职业路径。",
    level: "进阶",
    resourceIds: ["res-006", "res-016", "res-024", "res-025", "res-026", "res-055", "res-083", "res-084"],
  },
];

const topics = [
  {
    id: "brand-study",
    title: "如何研究一个品牌",
    intro: "从品牌传承、创意总监、秀场、广告、集团财报和二级市场六个角度建立品牌档案。",
    tags: ["brand archive", "luxury", "creative direction"],
    resourceIds: ["res-038", "res-039", "res-075", "res-078", "res-085", "res-088"],
  },
  {
    id: "paris-fashion-week",
    title: "巴黎时装周怎么看",
    intro: "先看官方日程与秀场图片，再用评论、品牌历史和趋势标签做二次整理。",
    tags: ["fashion week", "runway", "Paris"],
    resourceIds: ["res-001", "res-003", "res-004", "res-022", "res-025", "res-076"],
  },
  {
    id: "archive-fashion",
    title: "Archive Fashion 入门",
    intro: "理解古董时装、设计师旧作、拍卖市场和二手奢侈品如何形成新的文化价值。",
    tags: ["archive fashion", "vintage", "auction"],
    resourceIds: ["res-069", "res-070", "res-071", "res-072", "res-073", "res-074"],
  },
  {
    id: "deconstruction",
    title: "解构主义时装",
    intro: "从川久保玲、Margiela、Yamamoto 的身体观和结构实验进入概念时装。",
    tags: ["deconstruction", "silhouette", "concept"],
    resourceIds: ["res-043", "res-029", "res-002", "res-003", "res-030", "res-063"],
  },
  {
    id: "magazine-visual",
    title: "杂志封面里的字体美学",
    intro: "用 Vogue、Dazed、i-D、AnOther、System 等媒体观察版式、摄影和人物叙事。",
    tags: ["magazine", "editorial", "typography"],
    resourceIds: ["res-018", "res-019", "res-020", "res-021", "res-061", "res-062"],
  },
  {
    id: "sustainable-fashion",
    title: "可持续时尚不只是环保色",
    intro: "从透明度、循环经济、转售市场和集团 ESG 建立系统理解。",
    tags: ["sustainability", "resale", "supply chain"],
    resourceIds: ["res-026", "res-027", "res-057", "res-072", "res-073", "res-085"],
  },
];

const recommendationGuides = [
  {
    id: "starter-fashion-literacy",
    title: "时尚零基础入门",
    subtitle: "先建立时尚史、秀场、杂志和日常穿搭的共同语言。",
    goal: "学习",
    level: "入门",
    types: ["书籍", "影片", "杂志", "秀场"],
    summary: "给完全不知道从哪里开始的用户，一次性建立“读书、看片、看秀、看杂志”的起点。",
    items: [
      {
        type: "书籍",
        originalTitle: "Fashion: The Definitive History of Costume and Style",
        chineseTitle: "时尚：服装与风格权威史",
        coreTakeaway: "用大时间线理解服装如何随社会、身体和技术变化。",
        suitableFor: "零基础用户",
        timeCost: "长期翻阅",
        readingOrWatchingFocus: "先看年代结构和关键廓形，不必一次读完。",
        link: "https://www.worldcat.org/search?q=Fashion%3A+The+Definitive+History+of+Costume+and+Style",
        whereToWatchOrRead: "WorldCat 馆藏、Google Books 预览、图书馆或正规购书渠道。",
        availabilityNote: "无官方免费全文，提供馆藏和合法预览入口。",
      },
      {
        type: "书籍",
        originalTitle: "The Fashion Book",
        chineseTitle: "时尚之书",
        coreTakeaway: "快速认识设计师、摄影师、品牌和关键人物。",
        suitableFor: "想建立名字索引的人",
        timeCost: "碎片化翻阅",
        readingOrWatchingFocus: "遇到陌生设计师时回查，建立人物地图。",
        link: "https://www.google.com/search?tbm=bks&q=The+Fashion+Book+Phaidon",
        whereToWatchOrRead: "Google Books 预览、Phaidon 官网、图书馆或正规购书渠道。",
        availabilityNote: "通常为商业图书，不提供下载。",
      },
      {
        type: "影片",
        originalTitle: "The September Issue",
        chineseTitle: "九月刊",
        coreTakeaway: "看懂时尚杂志如何组织视觉、人物和商业目标。",
        suitableFor: "想理解杂志和编辑工作的人",
        timeCost: "约 90 分钟",
        readingOrWatchingFocus: "观察选题、造型、拍摄和最终版面之间的取舍。",
        link: "https://www.justwatch.com/us/movie/the-september-issue",
        whereToWatchOrRead: "可在 JustWatch 查询当前合法流媒体/租赁平台。",
        availabilityNote: "没有稳定官方免费入口时，只提供片名和合法观看渠道查询。",
      },
      {
        type: "杂志",
        originalTitle: "Vogue Runway",
        chineseTitle: "Vogue 秀场档案",
        coreTakeaway: "建立按品牌、季节和城市看秀的基本习惯。",
        suitableFor: "想看懂秀场的新手",
        timeCost: "每次 15-30 分钟",
        readingOrWatchingFocus: "先看系列图，再读评论标题和品牌语境。",
        link: "https://www.vogue.com/fashion-shows",
        whereToWatchOrRead: "Vogue Runway 官方网站。",
        availabilityNote: "部分内容可能有订阅限制，以来源页面为准。",
      },
      {
        type: "秀场",
        originalTitle: "Dior New Look 1947",
        chineseTitle: "Dior 1947 New Look",
        coreTakeaway: "理解现代高定、战后女性曲线和品牌神话的起点。",
        suitableFor: "时尚史入门",
        timeCost: "20 分钟资料检索",
        readingOrWatchingFocus: "重点看收腰、伞裙、肩线和战后语境。",
        link: "https://www.google.com/search?q=Dior+New+Look+1947+official+archive",
        whereToWatchOrRead: "Dior Heritage、Vogue/博物馆图文资料和公开搜索入口。",
        availabilityNote: "历史资料以官方档案和权威图文为主。",
      },
    ],
  },
  {
    id: "daily-style-improvement",
    title: "想提升穿搭先看什么",
    subtitle: "不先买衣服，先建立比例、颜色、材质和场景意识。",
    goal: "穿搭",
    level: "入门",
    types: ["书籍", "影片", "杂志", "秀场"],
    summary: "面向中国日常穿搭语境，把审美提升拆成可观察的单品、比例和场景。",
    items: [
      {
        type: "书籍",
        originalTitle: "The Little Dictionary of Fashion",
        chineseTitle: "时尚小词典",
        coreTakeaway: "Dior 式优雅建议，适合建立基础穿衣原则。",
        suitableFor: "想从规则开始的人",
        timeCost: "2-3 小时",
        readingOrWatchingFocus: "记录关于比例、场合、配饰的经典建议，再用现代语境筛选。",
        link: "https://www.google.com/search?tbm=bks&q=The+Little+Dictionary+of+Fashion+Christian+Dior",
        whereToWatchOrRead: "Google Books 预览、图书馆或正规购书渠道。",
        availabilityNote: "商业图书，只提供合法入口。",
      },
      {
        type: "影片",
        originalTitle: "Funny Face",
        chineseTitle: "甜姐儿",
        coreTakeaway: "用电影看 1950s 时装、摄影棚和优雅造型的流行想象。",
        suitableFor: "想通过电影培养审美的人",
        timeCost: "约 103 分钟",
        readingOrWatchingFocus: "看色彩、裙摆、黑色基础款和摄影姿态。",
        link: "https://www.justwatch.com/us/movie/funny-face",
        whereToWatchOrRead: "JustWatch 查询合法流媒体/租赁平台。",
        availabilityNote: "不提供盗版片源。",
      },
      {
        type: "杂志",
        originalTitle: "The Gentlewoman",
        chineseTitle: "The Gentlewoman",
        coreTakeaway: "学习克制、人物导向和现代女性风格表达。",
        suitableFor: "喜欢极简、通勤、人物风格的人",
        timeCost: "每篇 10-20 分钟",
        readingOrWatchingFocus: "观察人物如何通过单品、姿态和空间建立气质。",
        link: "https://thegentlewoman.co.uk/",
        whereToWatchOrRead: "The Gentlewoman 官方网站和纸刊。",
        availabilityNote: "公开文章以官网为准。",
      },
      {
        type: "秀场",
        originalTitle: "Celine SS2010",
        chineseTitle: "Celine 2010 春夏",
        coreTakeaway: "现代女性衣橱、干净线条和日常高级感的参考。",
        suitableFor: "想改善通勤衣橱的人",
        timeCost: "20 分钟图文检索",
        readingOrWatchingFocus: "看白衬衫、皮革、长裤、极简色彩和配饰比例。",
        link: "https://www.google.com/search?q=Celine+SS2010+Phoebe+Philo+Vogue+Runway",
        whereToWatchOrRead: "Vogue Runway/网络图文搜索。",
        availabilityNote: "历史秀场以权威图文资料为主。",
      },
      {
        type: "书籍",
        originalTitle: "Parisian Chic",
        chineseTitle: "巴黎女人的时尚经",
        coreTakeaway: "用基础单品、比例和场景建立不费力的日常衣橱。",
        suitableFor: "想从穿搭公式开始的人",
        timeCost: "2-3 小时",
        readingOrWatchingFocus: "把书里的单品换成适合中国通勤和周末的版本。",
        link: "https://www.google.com/search?tbm=bks&q=Parisian+Chic+Ines+de+la+Fressange",
        whereToWatchOrRead: "Google Books 预览、图书馆或正规购书渠道。",
        availabilityNote: "商业图书，只提供合法入口。",
      },
      {
        type: "杂志",
        originalTitle: "Who What Wear",
        chineseTitle: "Who What Wear",
        coreTakeaway: "把海外趋势拆成单品、场景和搭配思路，适合做日常参考。",
        suitableFor: "想看趋势但不想太学术的人",
        timeCost: "每篇 5-10 分钟",
        readingOrWatchingFocus: "只记录可迁移到自己衣橱的颜色、版型和组合。",
        link: "https://www.whowhatwear.com/fashion/trends",
        whereToWatchOrRead: "Who What Wear 官方网站。",
        availabilityNote: "公开文章以官网为准，不做价格分析。",
      },
    ],
  },
  {
    id: "runway-first-steps",
    title: "看懂时装秀入门",
    subtitle: "不要只问好不好看，先问它在讲什么、改变了什么。",
    goal: "学习",
    level: "入门",
    types: ["秀场", "影片", "杂志"],
    summary: "用几个强叙事秀场训练观看顺序：廓形、材质、身体、场景、文化语境。",
    items: [
      {
        type: "秀场",
        originalTitle: "Alexander McQueen SS1999 No.13",
        chineseTitle: "Alexander McQueen 1999 春夏 No.13",
        coreTakeaway: "秀场可以是表演、技术和身体关系的现场。",
        suitableFor: "秀场入门",
        timeCost: "15-30 分钟",
        readingOrWatchingFocus: "先看 finale 机械喷漆，再回看整场的白裙、机械和身体张力。",
        link: "https://www.youtube.com/results?search_query=Alexander+McQueen+Spring+Summer+1999+No.13",
        whereToWatchOrRead: "YouTube 官方搜索、Vogue/品牌图文资料。",
        availabilityNote: "只提供官方平台搜索入口，不搬运视频。",
      },
      {
        type: "秀场",
        originalTitle: "Comme des Garcons SS1997 Body Meets Dress",
        chineseTitle: "川久保玲 1997 春夏 Body Meets Dress",
        coreTakeaway: "理解服装如何主动改变身体轮廓和审美边界。",
        suitableFor: "想理解概念时装的人",
        timeCost: "20 分钟",
        readingOrWatchingFocus: "看填充物、异形身体、格纹和美的冲突。",
        link: "https://www.metmuseum.org/exhibitions/listings/2017/rei-kawakubo",
        whereToWatchOrRead: "The Met 展览资料、Vogue/网络图文搜索。",
        availabilityNote: "优先看博物馆和权威评论。",
      },
      {
        type: "影片",
        originalTitle: "McQueen",
        chineseTitle: "麦昆",
        coreTakeaway: "从传记角度理解 McQueen 的创作创伤、戏剧性和时代影响。",
        suitableFor: "想进入设计师个案的人",
        timeCost: "约 111 分钟",
        readingOrWatchingFocus: "把纪录片里的系列名回到 Vogue/博物馆资料中二次检索。",
        link: "https://www.justwatch.com/us/movie/mcqueen",
        whereToWatchOrRead: "JustWatch 查询合法观看平台。",
        availabilityNote: "不提供盗版片源。",
      },
      {
        type: "杂志",
        originalTitle: "Vogue Runway Reviews",
        chineseTitle: "Vogue Runway 秀评",
        coreTakeaway: "学习专业评论如何描述系列主题、廓形、历史引用和商业判断。",
        suitableFor: "想提升看秀表达的人",
        timeCost: "每场 10-20 分钟",
        readingOrWatchingFocus: "先看图，再读评论，最后提炼 3 个关键词。",
        link: "https://www.vogue.com/fashion-shows",
        whereToWatchOrRead: "Vogue Runway 官方网站。",
        availabilityNote: "部分内容可能需要订阅。",
      },
      {
        type: "秀场",
        originalTitle: "Maison Margiela 1989 Debut",
        chineseTitle: "Maison Margiela 1989 首秀",
        coreTakeaway: "理解反时尚、旧物、匿名和街区空间如何改变秀场语言。",
        suitableFor: "想理解 archive fashion 的人",
        timeCost: "20 分钟资料检索",
        readingOrWatchingFocus: "看模特、场地、旧衣和观众关系，而不是只看单件衣服。",
        link: "https://www.google.com/search?q=Maison+Margiela+1989+debut+official+archive",
        whereToWatchOrRead: "品牌档案、展览资料、Vogue/网络图文搜索。",
        availabilityNote: "历史秀场以权威图文资料为主。",
      },
      {
        type: "秀场",
        originalTitle: "Prada SS1996",
        chineseTitle: "Prada 1996 春夏",
        coreTakeaway: "学习“丑美学”和知识分子极简如何成为品牌识别。",
        suitableFor: "想训练审美判断的人",
        timeCost: "20 分钟图文检索",
        readingOrWatchingFocus: "记录颜色、鞋、裙长和反常规的美感来源。",
        link: "https://www.google.com/search?q=Prada+SS1996+Vogue+Runway",
        whereToWatchOrRead: "Vogue Runway/网络图文搜索。",
        availabilityNote: "历史秀场以权威图文资料为主。",
      },
    ],
  },
  {
    id: "fashion-books-starter",
    title: "时尚审美入门书单",
    subtitle: "从通史、单品、人物、杂志和商业五个角度读。",
    goal: "学习",
    level: "入门",
    types: ["书籍"],
    summary: "不用一次读完，先把它当作地图和词典。",
    items: [
      {
        type: "书籍",
        originalTitle: "100 Ideas That Changed Fashion",
        chineseTitle: "改变时尚的 100 个观念",
        coreTakeaway: "用短条目快速建立关键概念。",
        suitableFor: "零基础",
        timeCost: "碎片化阅读",
        readingOrWatchingFocus: "每次读 5 个概念，回到资源库搜对应秀场或人物。",
        link: "https://www.google.com/search?tbm=bks&q=100+Ideas+That+Changed+Fashion",
        whereToWatchOrRead: "Google Books 预览、图书馆或正规购书渠道。",
        availabilityNote: "商业图书，只提供合法入口。",
      },
      {
        type: "书籍",
        originalTitle: "Items: Is Fashion Modern?",
        chineseTitle: "单品：时尚现代吗？",
        coreTakeaway: "用白 T、牛仔裤、小黑裙等单品理解现代时尚。",
        suitableFor: "想把日常衣服和设计史连接的人",
        timeCost: "长期翻阅",
        readingOrWatchingFocus: "每看一个单品，就观察它在今天穿搭里的变化。",
        link: "https://www.moma.org/calendar/exhibitions/1638",
        whereToWatchOrRead: "MoMA 展览资料，图书可通过馆藏/购买渠道获取。",
        availabilityNote: "展览页可公开访问，图书不提供下载。",
      },
      {
        type: "书籍",
        originalTitle: "Take Ivy",
        chineseTitle: "Take Ivy",
        coreTakeaway: "理解 Ivy/老钱/学院风的视觉来源。",
        suitableFor: "喜欢学院风、通勤休闲的人",
        timeCost: "1-2 小时翻图",
        readingOrWatchingFocus: "看比例、鞋、外套、裤长和校园场景。",
        link: "https://www.google.com/search?tbm=bks&q=Take+Ivy",
        whereToWatchOrRead: "Google Books 预览、图书馆或正规购书渠道。",
        availabilityNote: "商业图书，只提供合法入口。",
      },
      {
        type: "书籍",
        originalTitle: "Fashion: The Definitive History of Costume and Style",
        chineseTitle: "DK 时尚通史",
        coreTakeaway: "用图文大时间线建立服装史和风格演变的基本坐标。",
        suitableFor: "完全零基础",
        timeCost: "长期翻阅",
        readingOrWatchingFocus: "先看 20 世纪以后，再回到具体风格词典补细节。",
        link: "https://www.google.com/search?tbm=bks&q=Fashion+The+Definitive+History+of+Costume+and+Style",
        whereToWatchOrRead: "Google Books 预览、图书馆或正规购书渠道。",
        availabilityNote: "商业图书，只提供合法入口。",
      },
      {
        type: "书籍",
        originalTitle: "The Fashion Book",
        chineseTitle: "时尚之书",
        coreTakeaway: "像词典一样快速认识设计师、品牌、摄影师和编辑。",
        suitableFor: "想建立人名/品牌索引的人",
        timeCost: "碎片化阅读",
        readingOrWatchingFocus: "遇到陌生名字就回到资源库或 Vogue Runway 做二次检索。",
        link: "https://www.google.com/search?tbm=bks&q=The+Fashion+Book+Phaidon",
        whereToWatchOrRead: "Google Books 预览、图书馆或正规购书渠道。",
        availabilityNote: "商业图书，只提供合法入口。",
      },
    ],
  },
  {
    id: "fashion-films-documentaries",
    title: "时尚电影/纪录片推荐",
    subtitle: "用影像理解编辑、设计师、品牌和视觉气质。",
    goal: "学习",
    level: "入门",
    types: ["影片"],
    summary: "覆盖纪录片、设计师传记、时尚电影和美学电影。",
    items: [
      {
        type: "纪录片",
        originalTitle: "Dior and I",
        chineseTitle: "迪奥与我",
        coreTakeaway: "看高级定制工坊、创意总监和商业时装屋如何协作。",
        suitableFor: "想理解高定幕后的人",
        timeCost: "约 90 分钟",
        readingOrWatchingFocus: "看 Raf Simons 如何把个人语言放进 Dior 体系。",
        link: "https://www.justwatch.com/us/movie/dior-and-i",
        whereToWatchOrRead: "JustWatch 查询合法流媒体/租赁平台。",
        availabilityNote: "不提供盗版片源。",
      },
      {
        type: "设计师传记",
        originalTitle: "Notebook on Cities and Clothes",
        chineseTitle: "城市时装速记",
        coreTakeaway: "Wim Wenders 通过 Yohji Yamamoto 讨论城市、影像和衣服。",
        suitableFor: "喜欢 Yohji、黑色和城市气质的人",
        timeCost: "约 80 分钟",
        readingOrWatchingFocus: "看衣服如何和城市、身体、影像连接。",
        link: "https://www.justwatch.com/us/movie/notebook-on-cities-and-clothes",
        whereToWatchOrRead: "JustWatch 查询合法观看平台。",
        availabilityNote: "没有稳定免费入口时只保留合法渠道查询。",
      },
      {
        type: "美学电影",
        originalTitle: "In the Mood for Love",
        chineseTitle: "花样年华",
        coreTakeaway: "学习旗袍、色彩、空间和克制情绪如何构成风格。",
        suitableFor: "想提高东方审美和色彩感的人",
        timeCost: "约 98 分钟",
        readingOrWatchingFocus: "看图案重复、窄空间、光影和身体姿态。",
        link: "https://www.justwatch.com/us/movie/in-the-mood-for-love",
        whereToWatchOrRead: "JustWatch 查询合法流媒体/租赁平台。",
        availabilityNote: "不提供盗版片源。",
      },
      {
        type: "纪录片",
        originalTitle: "The September Issue",
        chineseTitle: "九月刊",
        coreTakeaway: "理解杂志编辑、造型、摄影和商业发布周期如何协作。",
        suitableFor: "想了解时尚媒体幕后的人",
        timeCost: "约 90 分钟",
        readingOrWatchingFocus: "看选题会、造型拍摄、封面决策和编辑权力关系。",
        link: "https://www.justwatch.com/us/movie/the-september-issue",
        whereToWatchOrRead: "JustWatch 查询合法流媒体/租赁平台。",
        availabilityNote: "不提供盗版片源。",
      },
      {
        type: "纪录片",
        originalTitle: "Bill Cunningham New York",
        chineseTitle: "街拍鼻祖比尔",
        coreTakeaway: "理解街拍如何记录真实城市穿着和社会变化。",
        suitableFor: "想训练日常观察力的人",
        timeCost: "约 84 分钟",
        readingOrWatchingFocus: "观察他如何从街头而不是广告里判断趋势。",
        link: "https://www.justwatch.com/us/movie/bill-cunningham-new-york",
        whereToWatchOrRead: "JustWatch 查询合法流媒体/租赁平台。",
        availabilityNote: "不提供盗版片源。",
      },
    ],
  },
  {
    id: "fashion-magazines-media",
    title: "杂志与媒体入门推荐",
    subtitle: "用不同媒体学习视觉叙事、青年文化和行业语言。",
    goal: "学习",
    level: "入门",
    types: ["杂志"],
    summary: "不是只看封面，而是学习媒体如何构建审美和话语。",
    items: [
      {
        type: "杂志",
        originalTitle: "i-D",
        chineseTitle: "i-D",
        coreTakeaway: "青年身份、街头、亚文化和时尚视觉的经典入口。",
        suitableFor: "喜欢青年文化和街头风格的人",
        timeCost: "每篇 10 分钟",
        readingOrWatchingFocus: "看人物选择、摄影姿态和标题态度。",
        link: "https://i-d.co/category/fashion/",
        whereToWatchOrRead: "i-D 官方网站。",
        availabilityNote: "公开文章以官网为准。",
      },
      {
        type: "杂志",
        originalTitle: "Dazed Fashion",
        chineseTitle: "Dazed 时尚",
        coreTakeaway: "实验时尚、音乐、艺术和亚文化的连接点。",
        suitableFor: "想看先锋视觉的人",
        timeCost: "每篇 10-20 分钟",
        readingOrWatchingFocus: "记录摄影、造型和文化关键词。",
        link: "https://www.dazeddigital.com/fashion",
        whereToWatchOrRead: "Dazed 官方网站。",
        availabilityNote: "公开文章以官网为准。",
      },
      {
        type: "杂志",
        originalTitle: "AnOther Magazine",
        chineseTitle: "AnOther",
        coreTakeaway: "更偏摄影、艺术和设计师访谈的时尚媒体。",
        suitableFor: "想提升影像审美的人",
        timeCost: "每篇 10-20 分钟",
        readingOrWatchingFocus: "看图像叙事和人物访谈结构。",
        link: "https://www.anothermag.com/fashion-beauty",
        whereToWatchOrRead: "AnOther 官方网站。",
        availabilityNote: "公开文章以官网为准。",
      },
      {
        type: "杂志",
        originalTitle: "Vogue Runway",
        chineseTitle: "Vogue Runway",
        coreTakeaway: "秀场图片、评论和季节索引，是建立品牌档案的基础入口。",
        suitableFor: "想系统看秀的人",
        timeCost: "每场 15-30 分钟",
        readingOrWatchingFocus: "按品牌、年份、季节整理关键词，而不是一次刷完。",
        link: "https://www.vogue.com/fashion-shows",
        whereToWatchOrRead: "Vogue Runway 官方网站。",
        availabilityNote: "部分内容可能需要订阅。",
      },
      {
        type: "杂志",
        originalTitle: "The Business of Fashion",
        chineseTitle: "BoF 时装商业评论",
        coreTakeaway: "理解品牌、零售、创意总监和行业变化背后的商业语境。",
        suitableFor: "想从爱好者进阶到行业理解的人",
        timeCost: "每篇 10-20 分钟",
        readingOrWatchingFocus: "读报道时记录品牌动作、目标用户和文化信号。",
        link: "https://www.businessoffashion.com/",
        whereToWatchOrRead: "The Business of Fashion 官方网站。",
        availabilityNote: "部分内容可能需要注册或订阅。",
      },
    ],
  },
  {
    id: "archive-fashion-primer",
    title: "Archive Fashion 入门",
    subtitle: "理解旧作、古董时装、拍卖和二手市场为什么重新流行。",
    goal: "学习",
    level: "进阶",
    types: ["书籍", "影片", "秀场", "杂志"],
    summary: "把 archive fashion 从“买旧衣”提升到设计史、稀缺性和文化记忆。",
    items: [
      {
        type: "书籍",
        originalTitle: "Maison Martin Margiela",
        chineseTitle: "Maison Martin Margiela",
        coreTakeaway: "理解匿名、旧物再造、比例和解构如何构成档案魅力。",
        suitableFor: "Archive Fashion 入门",
        timeCost: "长期翻阅",
        readingOrWatchingFocus: "看旧衣、复制、标签和匿名机制。",
        link: "https://www.google.com/search?tbm=bks&q=Maison+Martin+Margiela+book",
        whereToWatchOrRead: "Google Books 预览、图书馆或正规购书渠道。",
        availabilityNote: "商业图书，只提供合法入口。",
      },
      {
        type: "秀场",
        originalTitle: "Maison Margiela 1989 Debut",
        chineseTitle: "Maison Margiela 1989 首秀",
        coreTakeaway: "匿名、街区、旧物和反时尚叙事的起点。",
        suitableFor: "想理解 Margiela 的人",
        timeCost: "20 分钟资料检索",
        readingOrWatchingFocus: "看场地、白色、旧物和观众关系。",
        link: "https://www.google.com/search?q=Maison+Margiela+1989+debut+archive",
        whereToWatchOrRead: "网络图文搜索、展览/品牌档案资料。",
        availabilityNote: "历史资料以权威图文为主。",
      },
      {
        type: "杂志",
        originalTitle: "Vestiaire Collective Journal",
        chineseTitle: "Vestiaire Collective Journal",
        coreTakeaway: "观察转售平台如何讲述 archive fashion 和循环消费。",
        suitableFor: "想理解二手奢侈品语境的人",
        timeCost: "每篇 10 分钟",
        readingOrWatchingFocus: "区分文化价值、稀缺性和消费话术。",
        link: "https://www.vestiairecollective.com/journal/",
        whereToWatchOrRead: "Vestiaire Collective 官方 Journal。",
        availabilityNote: "平台内容以来源规则为准。",
      },
      {
        type: "影片",
        originalTitle: "Martin Margiela: In His Own Words",
        chineseTitle: "马丁·马吉拉：以自己的话说",
        coreTakeaway: "从设计师本人角度理解匿名、团队和反商业神话。",
        suitableFor: "想深入 Margiela 的人",
        timeCost: "约 90 分钟",
        readingOrWatchingFocus: "把纪录片里的系列和概念回到图片档案二次检索。",
        link: "https://www.justwatch.com/us/movie/martin-margiela-in-his-own-words",
        whereToWatchOrRead: "JustWatch 查询合法观看平台。",
        availabilityNote: "不提供盗版片源。",
      },
      {
        type: "平台",
        originalTitle: "The RealReal Editorial",
        chineseTitle: "The RealReal 编辑内容",
        coreTakeaway: "观察转售平台如何解释品牌保值、热门档案和二手消费文化。",
        suitableFor: "想理解 archive 市场叙事的人",
        timeCost: "每篇 5-10 分钟",
        readingOrWatchingFocus: "区分文化分析和销售话术，不做价格判断。",
        link: "https://realstyle.therealreal.com/",
        whereToWatchOrRead: "The RealReal 官方编辑内容。",
        availabilityNote: "平台内容以来源规则为准，不做代购/价格分析。",
      },
    ],
  },
  {
    id: "luxury-brand-visual-language",
    title: "奢侈品牌视觉语言入门",
    subtitle: "从品牌历史、秀场、广告、集团和文化项目建立品牌档案。",
    goal: "品牌研究",
    level: "进阶",
    types: ["书籍", "杂志", "秀场"],
    summary: "适合想研究 Dior、Chanel、Prada、Miu Miu 这类品牌的人。",
    items: [
      {
        type: "书籍",
        originalTitle: "Chanel: Collections and Creations",
        chineseTitle: "Chanel：系列与创作",
        coreTakeaway: "理解 Chanel 如何长期管理山茶花、珍珠、斜纹软呢等符号。",
        suitableFor: "品牌研究入门",
        timeCost: "长期翻阅",
        readingOrWatchingFocus: "按符号做笔记，而不是按年份死记。",
        link: "https://www.google.com/search?tbm=bks&q=Chanel+Collections+and+Creations",
        whereToWatchOrRead: "Google Books 预览、图书馆或正规购书渠道。",
        availabilityNote: "商业图书，只提供合法入口。",
      },
      {
        type: "秀场",
        originalTitle: "Prada SS1996",
        chineseTitle: "Prada 1996 春夏",
        coreTakeaway: "丑美学、知识分子气质和 90 年代极简的重要参考。",
        suitableFor: "想研究 Prada 的人",
        timeCost: "20 分钟图文检索",
        readingOrWatchingFocus: "看色彩、鞋、裙长和“反漂亮”的判断。",
        link: "https://www.google.com/search?q=Prada+SS1996+Vogue+Runway",
        whereToWatchOrRead: "Vogue/网络图文搜索。",
        availabilityNote: "历史秀场以权威图文资料为主。",
      },
      {
        type: "杂志",
        originalTitle: "Vogue Business",
        chineseTitle: "Vogue Business",
        coreTakeaway: "从商业、技术和可持续维度理解品牌动作。",
        suitableFor: "想把审美和商业连接的人",
        timeCost: "每篇 10-20 分钟",
        readingOrWatchingFocus: "读品牌报道时记录：目标人群、渠道、产品和文化项目。",
        link: "https://www.voguebusiness.com/",
        whereToWatchOrRead: "Vogue Business 官方网站。",
        availabilityNote: "部分内容可能需注册或订阅。",
      },
      {
        type: "书籍",
        originalTitle: "Dior by Dior",
        chineseTitle: "迪奥自传",
        coreTakeaway: "从创始人视角理解高级定制、客户、发布和品牌神话。",
        suitableFor: "想研究 Dior 的人",
        timeCost: "长期阅读",
        readingOrWatchingFocus: "把书中的高定制度和今天品牌发布方式对照。",
        link: "https://www.google.com/search?tbm=bks&q=Dior+by+Dior+Christian+Dior",
        whereToWatchOrRead: "Google Books 预览、图书馆或正规购书渠道。",
        availabilityNote: "商业图书，只提供合法入口。",
      },
      {
        type: "秀场",
        originalTitle: "Miu Miu SS2022",
        chineseTitle: "Miu Miu 2022 春夏",
        coreTakeaway: "低腰、学院感和少女叛逆如何变成全球流行视觉。",
        suitableFor: "想研究 Miu Miu 和当代传播的人",
        timeCost: "20 分钟图文检索",
        readingOrWatchingFocus: "看单品比例、造型重复和社交媒体传播点。",
        link: "https://www.google.com/search?q=Miu+Miu+SS2022+Vogue+Runway",
        whereToWatchOrRead: "Vogue Runway/网络图文搜索。",
        availabilityNote: "历史秀场以权威图文资料为主。",
      },
    ],
  },
];

const trendIssues = [
  {
    id: "trend-2026-annual",
    type: "年度",
    title: "2026 年春夏趋势总览",
    periodLabel: "2026 春夏",
    periodYear: "2026",
    periodMonth: "全年",
    periodWeek: "",
    trendName: "柔和色彩、松弛通勤与日常运动化",
    audience: "中国时尚小白/爱好者",
    summary: "把国际趋势转译到中国日常衣橱，重点看低饱和色、轻运动、透明层次和更松弛的办公室穿搭。",
    keyItems: ["轻薄衬衫", "宽松西裤", "薄针织", "芭蕾平底鞋", "运动外套"],
    keyColors: ["黄油黄", "粉蜡色", "白", "灰", "海军蓝"],
    keyMaterials: ["棉府绸", "薄针织", "尼龙", "透明薄纱", "轻羊毛"],
    outfitFormulas: ["白衬衫 + 宽松西裤 + 平底鞋", "薄针织 + 半裙 + 低饱和配色", "运动外套 + 直筒裤 + 简洁包"],
    suitableScenarios: ["通勤", "周末", "城市旅行"],
    avoidScenarios: ["正式晚宴", "强制服要求场合"],
    editorialJudgement: "对中国用户来说，最实用的不是照搬秀场，而是把柔和色彩和松弛廓形落到通勤、周末和轻运动场景。",
    evidenceSources: [
      { label: "Vogue 2026 春季趋势", url: "https://www.vogue.com/article/spring-2026-fashion-trends" },
      { label: "Pinterest Predicts 2026", url: "https://business.pinterest.com/pinterest-predicts/" },
      { label: "Google Trends", url: "https://trends.google.com/" },
    ],
    relatedGuideIds: ["daily-style-improvement", "runway-first-steps"],
    relatedResourceIds: ["res-001", "res-013", "res-014"],
  },
  {
    id: "trend-2026-05-monthly",
    type: "月度",
    title: "2026 年 5 月中国日常穿搭趋势观察",
    periodLabel: "2026 年 5 月",
    periodYear: "2026",
    periodMonth: "5 月",
    periodWeek: "",
    trendName: "轻通勤、户外化周末与新中式细节",
    audience: "中国城市日常穿搭用户",
    summary: "5 月气温上升，日常穿搭更强调透气、可通勤、能周末出行；新中式细节从礼服语境进入衬衫、半裙和配饰。",
    keyItems: ["短袖衬衫", "亚麻外套", "宽松半裙", "薄防晒外套", "盘扣细节上衣"],
    keyColors: ["米白", "浅灰", "竹青", "黑", "浅黄"],
    keyMaterials: ["亚麻", "棉", "薄尼龙", "香云纱感面料"],
    outfitFormulas: ["短袖衬衫 + 直筒半裙", "盘扣上衣 + 宽松长裤", "防晒外套 + 背心 + 长裙"],
    suitableScenarios: ["上班", "逛展", "周末短途", "约会"],
    avoidScenarios: ["强商务会议", "高强度户外"],
    editorialJudgement: "中国用户的 5 月趋势更像“轻量化生活方式”：不追求强造型，而是在通勤、出游、防晒和文化细节之间找平衡。",
    evidenceSources: [
      { label: "中国国际时装周相关报道", url: "https://www.chinadaily.com.cn/a/202503/28/WS67e66a4ca3101d4e4dc2af8f.html" },
      { label: "Vogue Runway", url: "https://www.vogue.com/fashion-shows" },
      { label: "小红书公开搜索：新中式穿搭", url: "https://www.xiaohongshu.com/search_result?keyword=%E6%96%B0%E4%B8%AD%E5%BC%8F%E7%A9%BF%E6%90%AD" },
    ],
    relatedGuideIds: ["daily-style-improvement", "starter-fashion-literacy"],
    relatedResourceIds: ["res-001", "res-007", "res-013"],
  },
  {
    id: "trend-2026-w21-office",
    type: "周报",
    title: "本周穿搭趋势：轻通勤和办公室松弛感",
    periodLabel: "2026 第 21 周",
    periodYear: "2026",
    periodMonth: "5 月",
    periodWeek: "第 21 周",
    trendName: "办公室松弛感",
    audience: "中国城市通勤用户",
    summary: "本周重点不是正式西装，而是更轻的衬衫、宽松裤、薄针织和低饱和色，适合从办公室走到下班社交。",
    keyItems: ["宽松衬衫", "直筒西裤", "薄针织开衫", "中号托特包"],
    keyColors: ["白", "浅蓝", "灰", "奶油色"],
    keyMaterials: ["棉府绸", "轻羊毛", "薄针织"],
    outfitFormulas: ["浅蓝衬衫 + 灰色直筒裤", "白 T + 薄针织 + 西裤", "短袖衬衫 + 中长半裙"],
    suitableScenarios: ["日常办公", "面试准备", "下班聚餐"],
    avoidScenarios: ["黑领结晚宴", "严格制服场景"],
    editorialJudgement: "对时尚小白最友好的一点是：不用买很夸张的单品，只要调整裤型、衬衫面料和色彩明度，就能显得更像“认真打理过”。",
    evidenceSources: [
      { label: "Who What Wear office trends", url: "https://www.whowhatwear.com/fashion/trends/office-fashion-trends" },
      { label: "Vogue Spring 2026 trends", url: "https://www.vogue.com/article/spring-2026-fashion-trends" },
      { label: "小红书公开搜索：通勤穿搭", url: "https://www.xiaohongshu.com/search_result?keyword=%E9%80%9A%E5%8B%A4%E7%A9%BF%E6%90%AD" },
    ],
    relatedGuideIds: ["daily-style-improvement", "fashion-magazines-media"],
    relatedResourceIds: ["res-018", "res-020", "res-001"],
  },
  {
    id: "trend-2026-w22-weekend",
    type: "周报",
    title: "本周穿搭趋势：周末户外化和城市轻运动",
    periodLabel: "2026 第 22 周",
    periodYear: "2026",
    periodMonth: "5 月",
    periodWeek: "第 22 周",
    trendName: "城市轻运动",
    audience: "中国周末出行用户",
    summary: "周末穿搭继续向轻运动和户外化靠拢，但更城市、更干净：防晒外套、尼龙半裙、运动鞋和简洁包成为可复制组合。",
    keyItems: ["防晒外套", "尼龙半裙", "运动鞋", "棒球帽", "轻量背包"],
    keyColors: ["白", "灰", "军绿", "浅黄"],
    keyMaterials: ["尼龙", "速干棉", "网眼", "薄棉"],
    outfitFormulas: ["防晒外套 + 背心 + 尼龙半裙", "宽松 T 恤 + 直筒短裤 + 运动鞋", "衬衫外套 + 长裤 + 棒球帽"],
    suitableScenarios: ["周末逛街", "城市徒步", "短途旅行", "音乐节外围"],
    avoidScenarios: ["正式职场", "高强度专业户外"],
    editorialJudgement: "对中国日常用户来说，户外化趋势最好控制在一两个功能单品，不必全套装备化，否则容易从时尚变成纯户外。",
    evidenceSources: [
      { label: "Pinterest Predicts 2026", url: "https://business.pinterest.com/pinterest-predicts/" },
      { label: "Highsnobiety Fashion", url: "https://www.highsnobiety.com/style/" },
      { label: "小红书公开搜索：户外穿搭", url: "https://www.xiaohongshu.com/search_result?keyword=%E6%88%B7%E5%A4%96%E7%A9%BF%E6%90%AD" },
    ],
    relatedGuideIds: ["daily-style-improvement", "starter-fashion-literacy"],
    relatedResourceIds: ["res-017", "res-074", "res-014"],
  },
];

const styleDictionary = [
  ["minimalism", "极简主义", "用克制线条、低饱和色和精准比例表达高级感。", ["克制", "冷静", "都市", "留白"], ["黑", "白", "灰", "海军蓝"], ["羊毛", "棉府绸", "精纺西装料"], ["直线", "窄长", "利落肩线"], ["Jil Sander", "Helmut Lang", "Calvin Klein"], ["Helmut Lang 1998 SS", "Jil Sander 1997 FW"], ["Fashion: The Definitive History", "The End of Fashion"], "通勤穿搭、品牌视觉、PPT 排版"],
  ["deconstruction", "解构主义", "把服装结构拆开、外露、错位，挑战传统身体和完成度。", ["未完成", "外露结构", "不对称", "反时尚"], ["黑", "白", "灰", "旧布色"], ["棉布", "毛料", "里布", "旧衣材料"], ["错位", "破坏", "多层", "不对称"], ["Maison Margiela", "Comme des Garcons", "Yohji Yamamoto"], ["Comme des Garcons 1997", "Margiela 1990s"], ["Fashion at the Edge", "Maison Martin Margiela"], "概念服装、视觉海报、实验造型"],
  ["gothic-romance", "哥特浪漫", "把阴郁、宗教感、华丽和脆弱感结合起来。", ["暗黑", "戏剧", "宗教感", "神秘"], ["黑", "酒红", "深紫", "银"], ["蕾丝", "天鹅绒", "皮革", "薄纱"], ["束腰", "长裙", "披风", "高领"], ["Alexander McQueen", "Ann Demeulemeester", "Rodarte"], ["McQueen FW1996", "Givenchy Couture"], ["Savage Beauty", "Gothic Fashion"], "摄影造型、舞台视觉、暗黑品牌概念"],
  ["quiet-luxury", "静奢风", "用低调材质和精准剪裁表达不张扬的财富感。", ["低调", "精致", "无 Logo", "质感"], ["驼色", "奶油白", "深灰", "海军蓝"], ["羊绒", "真丝", "羊毛", "皮革"], ["合体", "长线条", "大衣", "针织套装"], ["The Row", "Loro Piana", "Bottega Veneta"], ["The Row 2020s", "Jil Sander 1990s"], ["Deluxe", "The Luxury Strategy"], "职场穿搭、品牌调性、生活方式内容"],
  ["old-money", "老钱风", "借用传统上流社会运动、校园和度假衣橱符号。", ["传统", "松弛", "家族感", "学院"], ["海军蓝", "白", "棕", "猎绿"], ["粗花呢", "棉布", "羊毛", "皮革"], ["Polo", "西装外套", "百褶裙", "乐福鞋"], ["Ralph Lauren", "Celine", "Hermes"], ["Ralph Lauren 1990s", "Celine 2010s"], ["Take Ivy", "Ametora"], "穿搭内容、复古品牌视觉"],
  ["y2k", "Y2K", "千禧年前后的科技乐观、Logo 狂热和身体展示。", ["闪亮", "低腰", "未来感", "少女"], ["银", "粉", "蓝", "糖果色"], ["PVC", "牛仔", "亮片", "弹力针织"], ["低腰", "短上衣", "迷你裙", "紧身"], ["Blumarine", "Versace", "Dior by Galliano"], ["Dior 2000s", "Blumarine 2020s"], ["Fashioning the Nineties", "The Fashion Book"], "短视频造型、派对穿搭、流行文化研究"],
  ["balletcore", "芭蕾风", "把舞蹈训练服、柔软身体和少女感转为日常造型。", ["轻盈", "柔软", "训练感", "浪漫"], ["粉", "奶白", "灰", "黑"], ["薄纱", "针织", "缎面", "罗纹"], ["裹身", "蓬裙", "绑带", "露肩"], ["Miu Miu", "Simone Rocha", "Molly Goddard"], ["Miu Miu 2022", "Simone Rocha"], ["Ballets Russes Style", "Fashion and Dance"], "穿搭、拍摄、女性气质专题"],
  ["dark-academia", "暗黑学院风", "把旧书、学院、哥特建筑和复古知识分子气质结合。", ["学院", "怀旧", "阴郁", "文学"], ["棕", "黑", "酒红", "墨绿"], ["羊毛", "灯芯绒", "格纹", "皮革"], ["西装", "马甲", "长裙", "大衣"], ["Prada", "Miu Miu", "Margaret Howell"], ["Prada 1990s", "Miu Miu 2020"], ["Take Ivy", "Fashion and Fiction"], "校园穿搭、书影音内容、空间视觉"],
  ["cyber-futurism", "赛博未来", "科技、身体改造、金属材质和虚拟身份的时尚想象。", ["科技", "金属", "异形", "虚拟"], ["银", "黑", "荧光绿", "电蓝"], ["金属面料", "乳胶", "尼龙", "网眼"], ["贴身", "护甲", "异形肩线", "机能结构"], ["Mugler", "Iris van Herpen", "Rick Owens"], ["Mugler 1995", "Iris van Herpen Couture"], ["Techno Fashion", "Fashioning the Future"], "概念视觉、AI 影像、舞台造型"],
  ["new-chinese", "新中式", "将中式结构、纹样和含蓄气质转译到现代衣橱。", ["含蓄", "东方", "结构", "留白"], ["墨黑", "米白", "朱红", "青绿"], ["丝", "香云纱", "棉麻", "提花"], ["立领", "盘扣", "斜襟", "宽袖"], ["Uma Wang", "Shiatzy Chen", "Heaven Gaia"], ["Guo Pei Couture", "Uma Wang"], ["China Chic", "Chinese Dress"], "国风视觉、品牌包装、现代礼服"],
  ["wabi-sabi", "日系侘寂", "强调不完美、自然肌理、时间感和安静的空。", ["自然", "旧化", "不完美", "安静"], ["亚麻色", "灰", "炭黑", "泥土色"], ["亚麻", "棉", "粗纺", "纸感材料"], ["宽松", "层叠", "低肩", "不规则"], ["Yohji Yamamoto", "Issey Miyake", "Arts & Science"], ["Yohji 1980s", "Issey Miyake Pleats"], ["Wabi-Sabi for Artists", "Japanese Fashion Designers"], "空间视觉、慢生活穿搭、摄影"],
  ["french-ease", "法式松弛感", "不费力的优雅，强调比例、头发、态度和基础单品。", ["松弛", "自然", "性感", "不过度"], ["黑", "白", "牛仔蓝", "红"], ["牛仔", "棉", "针织", "真丝"], ["直筒牛仔", "衬衫", "西装", "茶裙"], ["Celine", "Saint Laurent", "Isabel Marant"], ["Celine by Phoebe", "YSL 1970s"], ["Parisian Chic", "The Little Dictionary of Fashion"], "日常穿搭、生活方式内容"],
  ["supermodel-90s", "90年代超模风", "强调健康身体、简洁造型、强镜头感和商业高级感。", ["自信", "性感", "简洁", "镜头感"], ["黑", "白", "裸色", "红"], ["弹力针织", "缎面", "西装料", "牛仔"], ["吊带裙", "紧身裙", "西装", "高腰裤"], ["Versace", "Calvin Klein", "Alaia"], ["Versace 1991", "Calvin Klein 1995"], ["Models of Influence", "Fashioning the Nineties"], "人像摄影、红毯造型、短视频"],
  ["futurism", "未来主义", "以速度、空间、技术和非日常身体想象构建新审美。", ["速度", "空间", "实验", "非人类"], ["银", "白", "黑", "橙"], ["金属", "塑料", "科技面料", "硬挺材料"], ["几何", "护甲", "太空服", "异形"], ["Courreges", "Paco Rabanne", "Pierre Cardin"], ["Space Age 1960s", "Paco Rabanne"], ["Future Fashion", "Space Age Fashion"], "概念海报、科幻造型、展览视觉"],
  ["gorpcore", "机能风", "户外装备、城市通勤和技术面料的混合。", ["户外", "实用", "层叠", "装备感"], ["黑", "军绿", "灰", "橙"], ["Gore-Tex", "尼龙", "抓绒", "防水面料"], ["冲锋衣", "多口袋", "抽绳", "宽松"], ["Arc'teryx", "Stone Island", "Acronym"], ["Acronym", "Prada Linea Rossa"], ["Functional Clothing Design", "Outdoor Style"], "城市穿搭、产品设计、户外内容"],
  ["punk", "朋克", "用破坏、DIY、金属和反叛态度挑战秩序。", ["反叛", "DIY", "破坏", "噪音"], ["黑", "红", "银", "格纹"], ["皮革", "牛仔", "金属", "网眼"], ["破洞", "铆钉", "绑带", "紧身"], ["Vivienne Westwood", "Jean Paul Gaultier", "McQueen"], ["Westwood 1970s", "Gaultier 1990s"], ["Punk: Chaos to Couture", "Vivienne Westwood"], "乐队视觉、街头造型、反叛主题"],
  ["rococo-revival", "洛可可复兴", "把宫廷、甜美、曲线和装饰性重新转译为当代浪漫。", ["华丽", "甜美", "宫廷", "装饰"], ["粉", "奶油白", "金", "浅蓝"], ["丝缎", "蕾丝", "刺绣", "薄纱"], ["束腰", "蓬裙", "荷叶边", "蝴蝶结"], ["Dior", "Simone Rocha", "Vivienne Westwood"], ["Dior Couture", "Westwood Corset"], ["Rococo Fashion", "Fashion and Versailles"], "礼服、甜美视觉、品牌橱窗"],
  ["street-couture", "街头高定", "把街头符号和高定工艺放在同一套视觉系统里。", ["街头", "奢华", "混搭", "Logo"], ["黑", "白", "荧光色", "金"], ["卫衣棉", "皮革", "刺绣", "牛仔"], ["Oversize", "运动套装", "高定裙", "球鞋"], ["Off-White", "Balenciaga", "Louis Vuitton"], ["LV by Virgil", "Balenciaga 2020s"], ["The Incomplete", "Sneaker Freaker"], "潮流内容、品牌联名、街拍"],
  ["bohemian", "波西米亚", "流动廓形、民族纹样和自由旅行想象。", ["自由", "旅行", "手工", "浪漫"], ["土橙", "棕", "白", "绿"], ["麂皮", "棉麻", "流苏", "印花"], ["长裙", "披肩", "喇叭裤", "层叠"], ["Chloe", "Etro", "Isabel Marant"], ["Chloe 1970s", "Etro"], ["Bohemian Style", "Fashion and Orientalism"], "度假穿搭、音乐节、旅行视觉"],
  ["retro-futurism", "复古未来主义", "用过去时代想象中的未来构建怀旧科技感。", ["怀旧", "太空", "塑料感", "乐观"], ["橙", "白", "银", "棕"], ["PVC", "漆皮", "金属", "针织"], ["A 字", "迷你裙", "几何", "头盔感"], ["Courreges", "Miu Miu", "Prada"], ["Courreges 1960s", "Prada 1990s"], ["Space Age Fashion", "Retro Future"], "海报、短片、复古科技主题"],
].map(([id, title, explanation, keywords, colors, materials, silhouettes, brands, runwayRefs, books, useCases]) => ({
  id, title, explanation, keywords, colors, materials, silhouettes, brands, runwayRefs, books, useCases,
  sourceLinks: [
    { label: "Vogue Runway 搜索", url: `https://www.vogue.com/fashion-shows/search?q=${encodeURIComponent(title)}` },
    { label: "Google Arts & Culture 搜索", url: `https://artsandculture.google.com/search?q=${encodeURIComponent(title + " fashion")}` },
  ],
}));

const runwayShows = [
  ["dior-1947-new-look", "Dior New Look 1947", "Christian Dior", "1947", "现代高定和战后女性曲线的重要起点。", ["New Look", "couture", "history"]],
  ["mcqueen-1999-no13", "Alexander McQueen SS1999 No.13", "Alexander McQueen", "1999", "机械喷漆裙让秀场成为艺术表演。", ["McQueen", "performance", "runway video"]],
  ["mcqueen-2001-voss", "Alexander McQueen SS2001 VOSS", "Alexander McQueen", "2001", "关于观看、精神病院和身体展示的戏剧化秀场。", ["McQueen", "gothic romance", "body"]],
  ["mcqueen-2010-platos-atlantis", "Alexander McQueen SS2010 Plato's Atlantis", "Alexander McQueen", "2010", "数字印花、未来身体和非人类想象的标志系列。", ["digital print", "futurism", "McQueen"]],
  ["cdg-1997-body", "Comme des Garcons SS1997 Body Meets Dress", "Comme des Garcons", "1997", "用异形填充挑战身体和美的边界。", ["deconstruction", "body", "Rei Kawakubo"]],
  ["margiela-1989", "Maison Margiela 1989 Debut", "Maison Margiela", "1989", "匿名、旧物、反时尚和解构语言的起点之一。", ["Margiela", "deconstruction", "archive fashion"]],
  ["margiela-1994-doll", "Maison Margiela FW1994 Doll Wardrobe", "Maison Margiela", "1994", "比例、复制和记忆构成 Margiela 的档案魅力。", ["Margiela", "proportion", "archive"]],
  ["prada-1996", "Prada SS1996", "Prada", "1996", "丑美学、知识分子气质和 90 年代极简的关键参考。", ["Prada", "minimalism", "ugly chic"]],
  ["prada-1999", "Prada FW1999", "Prada", "1999", "尼龙、制服感和都市冷静气质。", ["Prada", "nylon", "urban"]],
  ["helmut-lang-1998", "Helmut Lang SS1998", "Helmut Lang", "1998", "极简、都市和身体线条的经典样本。", ["minimalism", "90s", "urban"]],
  ["jil-sander-1997", "Jil Sander FW1997", "Jil Sander", "1997", "克制剪裁和高级面料建立静奢源头。", ["minimalism", "quiet luxury", "tailoring"]],
  ["calvin-klein-1995", "Calvin Klein FW1995", "Calvin Klein", "1995", "90 年代美国极简和超模商业美学。", ["90s", "minimalism", "supermodel"]],
  ["dior-galliano-1998", "Dior by Galliano Couture 1998", "Dior", "1998", "历史主义、戏剧性和高定工艺的结合。", ["Dior", "couture", "Galliano"]],
  ["dior-galliano-2004", "Dior Couture 2004", "Dior", "2004", "Galliano 式视觉奇观和文化混搭。", ["Dior", "spectacle", "couture"]],
  ["chanel-1991", "Chanel FW1991", "Chanel", "1991", "超模时代、套装、珠宝和品牌符号管理。", ["Chanel", "supermodel", "brand code"]],
  ["chanel-1994", "Chanel SS1994", "Chanel", "1994", "街头元素进入 Chanel 符号系统。", ["Chanel", "street", "luxury"]],
  ["rick-owens-2014", "Rick Owens SS2014 Vicious", "Rick Owens", "2014", "Step team 表演让身体政治进入秀场。", ["Rick Owens", "performance", "body"]],
  ["rick-owens-2015", "Rick Owens FW2015 Sphinx", "Rick Owens", "2015", "暗黑、雕塑和反传统身体展示。", ["Rick Owens", "gothic", "body"]],
  ["ysl-1966", "Yves Saint Laurent Le Smoking 1966", "YSL", "1966", "女性穿西装的现代权力符号。", ["YSL", "tailoring", "gender"]],
  ["paco-rabanne-1966", "Paco Rabanne 1966", "Paco Rabanne", "1966", "金属、未来主义和太空时代服装实验。", ["futurism", "metal", "space age"]],
  ["courreges-1964", "Courreges Space Age 1964", "Courreges", "1964", "A 字裙、白色和太空时代轮廓。", ["space age", "retro futurism", "modern"]],
  ["mugler-1995", "Thierry Mugler FW1995 Couture", "Mugler", "1995", "昆虫、机械身体和戏剧高定。", ["Mugler", "cyber futurism", "couture"]],
  ["gaultier-1994", "Jean Paul Gaultier 1994", "Jean Paul Gaultier", "1994", "内衣外穿、性别游戏和流行文化。", ["Gaultier", "gender", "corset"]],
  ["vivienne-westwood-1993", "Vivienne Westwood Anglomania 1993", "Vivienne Westwood", "1993", "朋克、历史服饰和英伦身份。", ["punk", "history", "corset"]],
  ["raf-simons-2002", "Raf Simons FW2002 Virginia Creeper", "Raf Simons", "2002", "青年文化、恐惧和男装叙事。", ["youth", "menswear", "subculture"]],
  ["balenciaga-2007", "Balenciaga FW2007", "Balenciaga", "2007", "Nicolas Ghesquiere 的未来感剪裁。", ["Balenciaga", "futurism", "tailoring"]],
  ["celine-2010", "Celine SS2010", "Celine", "2010", "Phoebe Philo 的现代女性衣橱起点。", ["Celine", "minimalism", "quiet luxury"]],
  ["the-row-2020", "The Row 2020s", "The Row", "2020s", "静奢风与极致材质的当代样本。", ["quiet luxury", "minimalism", "material"]],
  ["miu-miu-2022", "Miu Miu SS2022", "Miu Miu", "2022", "低腰、学院和少女感重回流行文化。", ["Miu Miu", "balletcore", "y2k"]],
  ["guo-pei-2015", "Guo Pei 2015 Couture", "Guo Pei", "2015", "中国高定、刺绣和仪式感的全球传播样本。", ["new chinese", "couture", "craft"]],
].map(([id, title, designer, year, whyImportant, tags]) => ({
  id, title, designer, year, whyImportant, tags,
  watchPoints: ["先看整体廓形和出场顺序", "再看材质、造型和秀场叙事", "最后记录可迁移的风格关键词"],
  links: [
    { label: "Vogue Runway/网络图文搜索", url: `https://www.google.com/search?q=${encodeURIComponent(title + " Vogue Runway")}` },
    { label: "YouTube 参考搜索", url: `https://www.youtube.com/results?search_query=${encodeURIComponent(title)}` },
    { label: "品牌/设计师官网搜索", url: `https://www.google.com/search?q=${encodeURIComponent(title + " official archive runway")}` },
  ],
}));

const bookSeed = [
  ["Fashion: The Definitive History of Costume and Style", "入门", "服装史总览", "DK", "建立服装史大时间线。"],
  ["The Fashion Book", "入门", "人物与品牌索引", "Phaidon", "快速认识设计师、品牌和摄影师。"],
  ["The Little Dictionary of Fashion", "入门", "经典穿衣原则", "Christian Dior", "理解 Dior 式优雅语言。"],
  ["Fashion Since 1900", "入门", "现代时尚史", "Valerie Mendes", "建立 20 世纪时尚脉络。"],
  ["A History of Fashion", "入门", "服装史", "J. Anderson Black", "补充历史服饰基础。"],
  ["Alexander McQueen: Savage Beauty", "进阶", "设计师研究", "The Met", "理解 McQueen 的暗黑浪漫。"],
  ["Maison Martin Margiela", "进阶", "品牌研究", "Rizzoli", "理解匿名、解构和档案时尚。"],
  ["Rei Kawakubo / Comme des Garcons", "进阶", "设计师研究", "Terry Jones", "理解反时尚和概念廓形。"],
  ["Yohji Yamamoto", "进阶", "设计师研究", "V&A", "理解黑色、身体和东方剪裁。"],
  ["Dior by Dior", "进阶", "品牌历史", "Christian Dior", "从创始人口吻理解高定体系。"],
  ["Chanel: Collections and Creations", "进阶", "品牌符号", "Danièle Bott", "研究 Chanel 的符号系统。"],
  ["Prada", "进阶", "品牌研究", "Miuccia Prada", "理解丑美学和知识分子时尚。"],
  ["The End of Fashion", "专业", "时尚商业", "Teri Agins", "理解设计师品牌和商业系统变化。"],
  ["Deluxe: How Luxury Lost Its Luster", "专业", "奢侈品商业", "Dana Thomas", "理解奢侈品规模化和品牌价值。"],
  ["The Luxury Strategy", "专业", "品牌战略", "Kapferer", "理解奢侈品增长逻辑。"],
  ["Fashionopolis", "专业", "可持续时尚", "Dana Thomas", "理解供应链和伦理议题。"],
  ["Overdressed", "专业", "快时尚批判", "Elizabeth Cline", "理解消费和生产系统。"],
  ["Fashion at the Edge", "专业", "时尚理论", "Caroline Evans", "理解现代性、身体和秀场。"],
  ["Adorned in Dreams", "专业", "时尚理论", "Elizabeth Wilson", "从社会文化角度理解时尚。"],
  ["The Language of Fashion", "专业", "符号学", "Roland Barthes", "理解时尚如何作为语言运作。"],
  ["The Fashion System", "专业", "符号学", "Roland Barthes", "更理论化地理解时尚文本。"],
  ["Fashion Theory: A Reader", "专业", "论文集", "Routledge", "进入 fashion studies 的阅读入口。"],
  ["Fashion and Orientalism", "专业", "文化研究", "Adam Geczy", "理解跨文化灵感和凝视。"],
  ["The Culture of Fashion", "专业", "文化史", "Christopher Breward", "连接服装、城市和现代生活。"],
  ["Fashion and Museums", "专业", "策展研究", "Marie Riegels Melchior", "理解时尚如何进入博物馆。"],
  ["Exhibiting Fashion", "专业", "策展研究", "Judith Clark", "理解展览叙事和物件陈列。"],
  ["Fashion Photography Next", "视觉", "摄影", "Thames & Hudson", "理解当代时尚摄影语言。"],
  ["Vogue: The Covers", "视觉", "杂志史", "Vogue", "研究封面构图、字体和人物。"],
  ["Dior Images: Paolo Roversi", "视觉", "时尚摄影", "Rizzoli", "学习柔光和高定影像。"],
  ["Peter Lindbergh: A Different Vision on Fashion Photography", "视觉", "摄影", "Taschen", "理解 90 年代超模与黑白影像。"],
  ["Helmut Newton: SUMO", "视觉", "摄影", "Taschen", "理解权力、身体和时尚摄影争议。"],
  ["Guy Bourdin", "视觉", "摄影", "Assouline", "学习超现实商业影像。"],
  ["Grace: Thirty Years of Fashion at Vogue", "视觉", "编辑造型", "Grace Coddington", "理解造型叙事和杂志制作。"],
  ["The September Issue", "视觉", "杂志制作", "Vogue", "可配合纪录片理解编辑流程。"],
  ["Take Ivy", "视觉", "学院风", "PowerHouse", "理解 Ivy/老钱风基础视觉。"],
  ["Ametora", "进阶", "日美风格交流", "W. David Marx", "理解美式风格在日本的再造。"],
  ["Sneaker Freaker", "视觉", "球鞋文化", "Simon Wood", "理解球鞋和街头文化。"],
  ["Punk: Chaos to Couture", "视觉", "朋克", "The Met", "从展览角度理解朋克和高定。"],
  ["China: Through the Looking Glass", "视觉", "跨文化展览", "The Met", "理解中国意象在西方时尚中的转译。"],
  ["Camp: Notes on Fashion", "视觉", "审美理论", "The Met", "理解 Camp 和夸张审美。"],
  ["Heavenly Bodies", "视觉", "宗教与时尚", "The Met", "理解宗教图像和高定想象。"],
  ["Items: Is Fashion Modern?", "入门", "现代单品", "MoMA", "从单品理解现代时尚。"],
  ["Pattern Magic", "进阶", "结构设计", "Tomoko Nakamichi", "学习立体剪裁和结构想象。"],
  ["Metric Pattern Cutting for Women's Wear", "专业", "制版", "Winifred Aldrich", "进入服装结构专业技能。"],
  ["Fashionary", "入门", "设计工具", "Fashionary", "学习款式图和行业词汇。"],
  ["Textiles: The Whole Story", "入门", "纺织", "Beverly Gordon", "建立面料和纺织文化基础。"],
  ["The Anatomy of Fashion", "入门", "服装结构", "Colin McDowell", "从身体部位理解服饰变化。"],
  ["100 Ideas That Changed Fashion", "入门", "关键概念", "Harriet Worsley", "快速建立时尚关键词。"],
  ["Gods and Kings", "进阶", "McQueen/Galliano", "Dana Thomas", "理解两位设计师与时代系统。"],
  ["The Beautiful Fall", "进阶", "巴黎时尚史", "Alicia Drake", "理解 YSL 与 Lagerfeld 的巴黎时代。"],
];

const fashionBooks = bookSeed.map(([title, stage, category, author, why], index) => ({
  id: `book-${String(index + 1).padStart(2, "0")}`,
  title, stage, category, author, why,
  tags: [stage, category, "合法入口"],
  links: [
    { label: "WorldCat 馆藏", url: `https://www.worldcat.org/search?q=${encodeURIComponent(title)}` },
    { label: "Google Books 预览", url: `https://www.google.com/search?tbm=bks&q=${encodeURIComponent(title)}` },
    { label: "豆瓣读书", url: `https://search.douban.com/book/subject_search?search_text=${encodeURIComponent(title)}` },
  ],
  licenseNote: "只提供合法购买、馆藏、预览和书评入口，不提供电子书下载。",
}));

let state = {
  query: "",
  channel: "all",
  tag: "all",
  difficulty: "all",
  priceType: "all",
  language: "all",
  sourceType: "all",
  view: "card",
};

const app = document.querySelector("#app");

function uniqueValues(key) {
  return [...new Set(resources.flatMap((item) => Array.isArray(item[key]) ? item[key] : item[key]))].sort();
}

function byId(id) {
  return resources.find((item) => item.id === id);
}

function styleById(id) {
  return styleDictionary.find((item) => item.id === id);
}

function runwayById(id) {
  return runwayShows.find((item) => item.id === id);
}

function bookById(id) {
  return fashionBooks.find((item) => item.id === id);
}

function guideById(id) {
  return recommendationGuides.find((item) => item.id === id);
}

function trendById(id) {
  return trendIssues.find((item) => item.id === id);
}

function filterResources() {
  const term = state.query.trim().toLowerCase();
  return resources.filter((item) => {
    const haystack = [item.title, item.source, item.summary, item.whyUseful, item.channel, item.contentType, item.sourceType, item.region, item.era, ...item.tags]
      .join(" ")
      .toLowerCase();
    return (
      (!term || haystack.includes(term)) &&
      (state.channel === "all" || item.channel === state.channel) &&
      (state.tag === "all" || item.tags.includes(state.tag)) &&
      (state.difficulty === "all" || item.difficulty === state.difficulty) &&
      (state.priceType === "all" || item.priceType === state.priceType) &&
      (state.language === "all" || item.language === state.language) &&
      (state.sourceType === "all" || item.sourceType === state.sourceType)
    );
  });
}

function readBoard() {
  try {
    return JSON.parse(localStorage.getItem("fashionAtlasBoard") || '{"resource":[],"style":[],"book":[],"runway":[],"guide":[],"trend":[]}');
  } catch (error) {
    return { resource: [], style: [], book: [], runway: [], guide: [], trend: [] };
  }
}

function writeBoard(board) {
  localStorage.setItem("fashionAtlasBoard", JSON.stringify(board));
}

function saveToBoard(type, id) {
  const board = readBoard();
  board[type] = board[type] || [];
  if (!board[type].includes(id)) board[type].push(id);
  writeBoard(board);
  const status = document.querySelector("#boardStatus");
  if (status) status.textContent = "已加入个人灵感板。";
}

function removeFromBoard(type, id) {
  const board = readBoard();
  board[type] = (board[type] || []).filter((item) => item !== id);
  writeBoard(board);
  renderBoard();
}

function isSaved(type, id) {
  return (readBoard()[type] || []).includes(id);
}

function shell(content) {
  app.innerHTML = content;
  app.focus({ preventScroll: true });
  markActiveNav();
}

function markActiveNav() {
  const current = location.hash || "#/";
  document.querySelectorAll(".nav a").forEach((link) => {
    const href = link.getAttribute("href");
    const active = current.startsWith(href)
      || (href === "#/guides" && current.startsWith("#/guide/"))
      || (href === "#/trends" && current.startsWith("#/trend/"));
    link.classList.toggle("is-active", active);
  });
}

function resourceCard(item) {
  const channel = channelMap[item.channel];
  return `
    <article class="resource-card">
      <a class="resource-media" style="--image:url('${item.thumbnail}')" href="#/resource/${item.id}" aria-label="查看 ${item.title}"></a>
      <div class="resource-body">
        <div class="resource-meta">
          <span class="meta-chip strong">${channel.en}</span>
          <span class="meta-chip">${item.difficulty}</span>
          <span class="meta-chip">${item.priceType}</span>
          <span class="meta-chip">${sourceTypeLabels[item.sourceType]}</span>
        </div>
        <h3><a href="#/resource/${item.id}">${item.title}</a></h3>
        <p>${item.summary}</p>
        <div class="tag-row">${item.tags.slice(0, 3).map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
        <div class="card-actions">
          <a class="secondary-button" href="#/resource/${item.id}">详情</a>
          <button class="secondary-button" type="button" onclick="saveToBoard('resource','${item.id}')">收藏</button>
          <a class="primary-button" href="${item.url}" target="_blank" rel="noreferrer">访问来源</a>
        </div>
      </div>
    </article>
  `;
}

function guideCard(guide) {
  return `
    <article class="topic-card">
      <div class="tag-row">${guide.types.map((type) => `<span class="tag">${type}</span>`).join("")}</div>
      <h3 style="margin-top: 12px;"><a href="#/guide/${guide.id}">${guide.title}</a></h3>
      <p>${guide.subtitle}</p>
      <p>${guide.summary}</p>
      <div class="card-actions">
        <button class="secondary-button" type="button" onclick="saveToBoard('guide','${guide.id}')">收藏</button>
        <a class="primary-button" href="#/guide/${guide.id}">查看清单</a>
      </div>
    </article>
  `;
}

function trendCard(trend) {
  return `
    <article class="topic-card">
      <div class="tag-row">
        <span class="tag">${trend.type}</span>
        <span class="tag">${trend.periodLabel}</span>
      </div>
      <h3 style="margin-top: 12px;"><a href="#/trend/${trend.id}">${trend.title}</a></h3>
      <p>${trend.summary}</p>
      <div class="mini-meta">${trend.keyItems.slice(0, 3).map((item) => `<span class="tag">${item}</span>`).join("")}</div>
      <div class="card-actions">
        <button class="secondary-button" type="button" onclick="saveToBoard('trend','${trend.id}')">收藏</button>
        <a class="primary-button" href="#/trend/${trend.id}">阅读趋势</a>
      </div>
    </article>
  `;
}

function renderHome() {
  const featured = resources.filter((item) => item.featured).slice(0, 6);
  const todayGuide = recommendationGuides[0];
  const weeklyTrends = trendIssues.filter((item) => item.type === "周报").slice(0, 2);
  shell(`
    <section class="hero">
      <div class="hero-copy">
        <span class="eyebrow">Fashion Learning 60% · Trend Notes 40%</span>
        <h1 class="hero-title"><span>在灵感里，</span><span>看懂时尚。</span></h1>
        <p class="lead">FashionAtlas 面向中文时尚爱好者，把书籍、影片、秀场、杂志和中国日常穿搭趋势整理成可执行的推荐清单。先找到值得看的内容，再慢慢形成自己的审美判断。</p>
        <form class="search-panel" id="homeSearch">
          <div class="search-row">
            <input class="search-input" name="q" placeholder="搜索书籍、影片、秀场、杂志、趋势、风格..." />
            <button class="primary-button" type="submit">搜索</button>
          </div>
          <div class="hint-list">
            ${["新手入门", "通勤穿搭", "时尚电影", "Archive Fashion", "新中式"].map((tag) => `<button class="pill" type="button" data-search="${tag}">${tag}</button>`).join("")}
          </div>
        </form>
        <div class="proof-strip" aria-label="FashionAtlas current coverage">
          <div class="proof-item"><strong>${recommendationGuides.length}</strong><span>推荐清单</span></div>
          <div class="proof-item"><strong>${trendIssues.length}</strong><span>趋势期刊</span></div>
          <div class="proof-item"><strong>${resources.length}</strong><span>底层资源</span></div>
          <div class="proof-item"><strong>4</strong><span>书/影/刊/秀</span></div>
        </div>
      </div>
      <div class="hero-visual" aria-hidden="true"></div>
    </section>
    <div class="page">
      <section class="section">
        <div class="section-head">
          <div>
            <span class="eyebrow">Start Here</span>
            <h2>今日看什么</h2>
          </div>
          <a class="secondary-button" href="#/guides">全部推荐清单</a>
        </div>
        <div class="feature-grid">
          <article class="feature-card">
            <span class="meta-chip strong">${todayGuide.level}</span>
            <h3><a href="#/guide/${todayGuide.id}">${todayGuide.title}</a></h3>
            <p>${todayGuide.summary}</p>
            <div class="mini-meta">${todayGuide.types.map((type) => `<span class="tag">${type}</span>`).join("")}</div>
            <a class="primary-button" href="#/guide/${todayGuide.id}">开始阅读</a>
          </article>
          ${weeklyTrends.map((trend) => `
            <article class="feature-card">
              <span class="meta-chip strong">${trend.type}</span>
              <h3><a href="#/trend/${trend.id}">${trend.title}</a></h3>
              <p>${trend.summary}</p>
              <div class="mini-meta">${trend.keyItems.slice(0, 3).map((item) => `<span class="tag">${item}</span>`).join("")}</div>
              <a class="secondary-button" href="#/trend/${trend.id}">看趋势</a>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="section">
        <div class="section-head">
          <div>
            <span class="eyebrow">Guides</span>
            <h2>按场景推荐书、影片、杂志和秀场</h2>
          </div>
          <p>推荐清单解决“我不知道该看什么”的问题。每条都说明适合谁、怎么看、在哪里可以看到资源。</p>
        </div>
        <div class="topic-grid">${recommendationGuides.slice(0, 4).map(guideCard).join("")}</div>
      </section>

      <section class="section">
        <div class="section-head">
          <div>
            <span class="eyebrow">Trend Notes</span>
            <h2>中国日常穿搭趋势</h2>
          </div>
          <a class="secondary-button" href="#/trends">全部趋势</a>
        </div>
        <div class="topic-grid">${trendIssues.slice(0, 4).map(trendCard).join("")}</div>
      </section>

      <section class="section">
        <div class="section-head">
          <div>
            <span class="eyebrow">Core Tools</span>
            <h2>学习和沉淀工具</h2>
          </div>
          <p>底层资源库、风格词典、秀场路径、时尚书架和灵感板继续作为长期使用工具。</p>
        </div>
        <div class="channel-grid">
          <a class="channel-card" data-index="1" href="#/styles"><b>Style Dictionary</b><span>风格词典</span><p>20 个风格词条，把抽象审美拆成颜色、面料、廓形、品牌和应用场景。</p></a>
          <a class="channel-card" data-index="2" href="#/runway-paths"><b>Runway Paths</b><span>秀场路径</span><p>30 场经典秀场，讲清楚为什么重要、怎么看、关联什么风格。</p></a>
          <a class="channel-card" data-index="3" href="#/bookshelf"><b>Bookshelf</b><span>时尚书架</span><p>50 本书按入门、进阶、视觉、专业分类，只提供合法入口。</p></a>
          <a class="channel-card" data-index="4" href="#/board"><b>Moodboard</b><span>个人灵感板</span><p>收藏推荐清单、趋势、资源、风格、书籍和秀场。</p></a>
        </div>
      </section>

      <section class="section">
        <div class="section-head">
          <div>
            <span class="eyebrow">Source Layer</span>
            <h2>底层资源库</h2>
          </div>
          <a class="secondary-button" href="#/library">查看全部资源</a>
        </div>
        <div class="card-grid">${featured.map(resourceCard).join("")}</div>
      </section>
    </div>
  `);

  document.querySelector("#homeSearch").addEventListener("submit", (event) => {
    event.preventDefault();
    const query = new FormData(event.currentTarget).get("q").trim();
    location.hash = `#/library?q=${encodeURIComponent(query)}`;
  });
  document.querySelectorAll("[data-search]").forEach((button) => {
    button.addEventListener("click", () => {
      location.hash = `#/library?q=${encodeURIComponent(button.dataset.search)}`;
    });
  });
}

function topResourcesForQuery(query, limit = 8) {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  const scored = resources.map((item) => {
    const haystack = [item.title, item.source, item.summary, item.whyUseful, item.channel, item.contentType, item.region, item.era, ...item.tags]
      .join(" ")
      .toLowerCase();
    const score = terms.reduce((total, term) => total + (haystack.includes(term) ? 2 : 0), 0)
      + (item.featured ? 1 : 0)
      + (item.difficulty === "入门" ? 0.5 : 0);
    return { item, score };
  });
  return scored.sort((a, b) => b.score - a.score).slice(0, limit).map(({ item }) => item);
}

function localAiAnswer(question, matched, intent = "学习") {
  const starter = matched.slice(0, 5);
  const firstPath = learningPaths.find((path) => path.resourceIds.some((id) => starter.some((item) => item.id === id))) || learningPaths[0];
  const lowerQuestion = question.toLowerCase();
  const guide = recommendationGuides.find((item) => question.includes(item.title.slice(0, 2)) || item.items.some((entry) => lowerQuestion.includes(entry.originalTitle.toLowerCase()))) || recommendationGuides.find((item) => item.goal === intent) || recommendationGuides[0];
  const trend = intent === "趋势跟踪" || question.includes("趋势") || question.includes("穿搭") ? trendIssues[1] : trendIssues[0];
  return [
    "这是本地演示结果。配置 OPENAI_API_KEY 后，会由真实模型基于资源库生成回答。",
    "",
    `目标类型：${intent}`,
    `你的问题：${question}`,
    "",
    "优先推荐清单：",
    `- ${guide.title}：${guide.subtitle}`,
    "",
    "可参考趋势：",
    `- ${trend.title}：${trend.summary}`,
    "",
    "建议学习路径：",
    `1. 先走「${firstPath.title}」：${firstPath.subtitle}`,
    "2. 每看一个资源，记录 3 个词：风格、材料/廓形、文化语境。",
    "3. 回到资源库用这些词横向搜索，形成自己的二级索引。",
    "",
    "优先查看资源：",
    ...starter.map((item, index) => `${index + 1}. ${item.title}｜${item.source}：${item.whyUseful}\n   建议从官方来源进入，再用标签和推荐书目做延伸阅读。`),
    "",
    intent === "趋势跟踪"
      ? "本周穿搭灵感摘要：先选一个低风险场景，例如通勤或周末；只采用 1-2 个趋势信号，如轻薄衬衫、低饱和色或防晒外套；避免一次叠加太多符号。"
      : "生成我的学习清单：先收藏 1 个推荐清单、1 个趋势条目、2 个资源和 1 个风格词条，再导出 Markdown 做复盘。",
    "",
    "推荐检索词：archive fashion、runway、museum、trend forecasting、fashion business。",
    "版权提醒：YouTube、Vogue、出版社和博物馆内容只做来源跳转与学习参考，不下载、不搬运、不提供盗版副本。",
  ].join("\n");
}

async function requestAiAnswer(question, matched, intent) {
  const payload = {
    question,
    intent,
    guides: recommendationGuides.map((guide) => ({
      id: guide.id,
      title: guide.title,
      subtitle: guide.subtitle,
      summary: guide.summary,
      types: guide.types,
      items: guide.items.slice(0, 4).map((item) => ({
        type: item.type,
        originalTitle: item.originalTitle,
        chineseTitle: item.chineseTitle,
        coreTakeaway: item.coreTakeaway,
        whereToWatchOrRead: item.whereToWatchOrRead,
      })),
    })),
    trends: trendIssues.map((trend) => ({
      id: trend.id,
      title: trend.title,
      periodLabel: trend.periodLabel,
      summary: trend.summary,
      keyItems: trend.keyItems,
      outfitFormulas: trend.outfitFormulas,
      evidenceSources: trend.evidenceSources.map((source) => source.label),
    })),
    resources: matched.map((item) => ({
      title: item.title,
      source: item.source,
      channel: item.channel,
      summary: item.summary,
      whyUseful: item.whyUseful,
      tags: item.tags,
      url: item.url,
      officialLinks: item.officialLinks.slice(0, 3),
    })),
  };
  const endpoints = ["/api/ai", "/.netlify/functions/ai"];
  for (const endpoint of endpoints) {
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        const data = await response.json();
        if (data.answer) return data.answer;
      }
    } catch (error) {
      // Static file previews and GitHub Pages do not provide serverless endpoints.
    }
  }
  return localAiAnswer(question, matched, intent);
}

function renderAI() {
  const examples = [
    "我是小白，想看懂巴黎时装周，应该从哪里开始？",
    "我想了解 Archive Fashion 和古董时装市场。",
    "请给我一条学习趋势预测的 7 天路径。",
    "我想研究 Dior、Chanel 这类品牌的视觉语言。",
  ];
  shell(`
    <div class="page">
      <section>
        <span class="eyebrow">AI Learning Assistant</span>
        <h1 class="detail-title">AI 时尚学习助手</h1>
        <p class="lead">这是面试展示用的 AI 产品原型：基于 FashionAtlas 的结构化资源库，生成学习路径、推荐资源和检索关键词。可接入真实 OpenAI API，也可离线演示。</p>
      </section>
      <section class="ai-layout section">
        <form class="ai-panel" id="aiForm">
          <h3>描述你的学习目标</h3>
          <p>可以写兴趣、职业目标、想研究的品牌、看不懂的术语或一张图背后的风格问题。</p>
          <label class="form-field full">
            目标类型
            <select name="intent" class="filter-select">
              <option value="学习">学习</option>
              <option value="穿搭">穿搭</option>
              <option value="品牌研究">品牌研究</option>
              <option value="趋势跟踪">趋势跟踪</option>
            </select>
          </label>
          <label class="form-field full">
            问题
            <textarea name="question" required>我是时尚小白，想了解 Archive Fashion，给我一条入门学习路径。</textarea>
          </label>
          <div class="button-row" style="margin-top: 14px;">
            <button class="primary-button" type="submit">生成学习建议</button>
            <button class="secondary-button" type="button" data-ai-action="学习清单">生成我的学习清单</button>
            <button class="secondary-button" type="button" data-ai-action="穿搭摘要">生成本周穿搭灵感摘要</button>
          </div>
          <div class="suggestion-grid" style="margin-top: 14px;">
            ${examples.map((example) => `<button class="pill" type="button" data-ai-example="${escapeHtml(example)}">${example}</button>`).join("")}
          </div>
        </form>
        <aside>
          <div class="note-panel">
            <span class="meta-chip strong">AI PM Demo</span>
            <h3 style="margin-top: 12px;">产品能力说明</h3>
            <p>这个功能验证的是“资源库 + AI 导学”的闭环，而不是简单聊天。AI 的上下文来自本地匹配出的资源条目，输出必须回到可点击资源和学习路径。</p>
          </div>
          <div class="note-panel">
            <h3>真实 API 接入</h3>
            <p>部署到 Vercel 或 Netlify 后，在环境变量中配置 <code>OPENAI_API_KEY</code> 和可选 <code>OPENAI_MODEL</code> 即可启用真实模型。</p>
          </div>
        </aside>
      </section>
      <section class="section">
        <div class="section-head">
          <div>
            <span class="eyebrow">Output</span>
            <h2>生成结果</h2>
          </div>
        </div>
        <div id="aiOutput" class="ai-output">等待生成。你可以直接使用默认问题，也可以换成自己的学习目标。</div>
      </section>
    </div>
  `);
  bindAI();
}

function bindAI() {
  const form = document.querySelector("#aiForm");
  const textarea = form.querySelector("textarea");
  const intentSelect = form.querySelector("[name='intent']");
  const output = document.querySelector("#aiOutput");
  document.querySelectorAll("[data-ai-example]").forEach((button) => {
    button.addEventListener("click", () => {
      textarea.value = button.dataset.aiExample;
    });
  });
  document.querySelectorAll("[data-ai-action]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.aiAction === "学习清单") {
        intentSelect.value = "学习";
        textarea.value = "请基于站内推荐清单和资源，生成我的 7 天时尚入门学习清单，并说明每天看什么。";
      } else {
        intentSelect.value = "趋势跟踪";
        textarea.value = "请基于趋势周报，生成一份本周可执行穿搭灵感摘要，不要做价格分析或购买推荐。";
      }
    });
  });
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const question = data.get("question").trim();
    const intent = data.get("intent");
    const matched = topResourcesForQuery(question);
    output.classList.add("is-loading");
    output.textContent = "正在基于资源库生成建议...";
    const answer = await requestAiAnswer(question, matched, intent);
    output.classList.remove("is-loading");
    output.textContent = answer;
  });
}

function renderGuides() {
  const goals = [...new Set(recommendationGuides.map((guide) => guide.goal))];
  const levels = [...new Set(recommendationGuides.map((guide) => guide.level))];
  const types = [...new Set(recommendationGuides.flatMap((guide) => guide.types))];
  shell(`
    <div class="page">
      <section>
        <span class="eyebrow">Curated Guides</span>
        <h1 class="detail-title">推荐清单</h1>
        <p class="lead">面向时尚小白/爱好者，把书籍、影片、杂志和秀场按具体场景组织起来。重点不是堆链接，而是说明适合谁、为什么看、怎么看、在哪里看。</p>
      </section>
      <section class="library-layout section">
        <aside class="filter-panel">
          <div class="filter-group">
            <label for="guideGoal">学习目标</label>
            <select id="guideGoal" class="filter-select" data-guide-filter="goal">
              <option value="all">全部目标</option>
              ${goals.map((goal) => `<option value="${goal}">${goal}</option>`).join("")}
            </select>
          </div>
          <div class="filter-group">
            <label for="guideLevel">难度</label>
            <select id="guideLevel" class="filter-select" data-guide-filter="level">
              <option value="all">全部难度</option>
              ${levels.map((level) => `<option value="${level}">${level}</option>`).join("")}
            </select>
          </div>
          <div class="filter-group">
            <label for="guideType">内容类型</label>
            <select id="guideType" class="filter-select" data-guide-filter="type">
              <option value="all">全部类型</option>
              ${types.map((type) => `<option value="${type}">${type}</option>`).join("")}
            </select>
          </div>
        </aside>
        <div class="library-results">
          <div class="toolbar"><strong id="guideCount">${recommendationGuides.length} 个清单</strong></div>
          <div id="guideResults" class="topic-grid">${recommendationGuides.map(guideCard).join("")}</div>
        </div>
      </section>
    </div>
  `);
  bindGuideFilters();
}

function bindGuideFilters() {
  const filters = { goal: "all", level: "all", type: "all" };
  const update = () => {
    const results = recommendationGuides.filter((guide) => (
      (filters.goal === "all" || guide.goal === filters.goal)
      && (filters.level === "all" || guide.level === filters.level)
      && (filters.type === "all" || guide.types.includes(filters.type))
    ));
    document.querySelector("#guideCount").textContent = `${results.length} 个清单`;
    document.querySelector("#guideResults").innerHTML = results.length
      ? results.map(guideCard).join("")
      : `<div class="empty-state">没有找到匹配清单，试试减少筛选条件。</div>`;
  };
  document.querySelectorAll("[data-guide-filter]").forEach((select) => {
    select.addEventListener("change", (event) => {
      filters[event.target.dataset.guideFilter] = event.target.value;
      update();
    });
  });
}

function guideItemCard(item, index) {
  return `
    <article class="detail-panel">
      <div class="mini-meta">
        <span class="meta-chip strong">${item.type}</span>
        <span class="meta-chip">${item.suitableFor}</span>
        <span class="meta-chip">${item.timeCost}</span>
      </div>
      <h3 style="margin-top: 12px;">${index + 1}. ${item.chineseTitle}</h3>
      <p><strong>${item.originalTitle}</strong></p>
      <p>${item.coreTakeaway}</p>
      <p><strong>怎么看：</strong>${item.readingOrWatchingFocus}</p>
      <p><strong>在哪里可以看到/获取：</strong>${item.whereToWatchOrRead}</p>
      <p class="muted-note">${item.availabilityNote}</p>
      <a class="source-link" href="${item.link}" target="_blank" rel="noreferrer">
        <strong>可到达链接</strong>
        <span>${item.link}</span>
      </a>
    </article>
  `;
}

function renderGuide(id) {
  const guide = guideById(id) || recommendationGuides[0];
  shell(`
    <div class="page">
      <section class="two-col">
        <article>
          <span class="eyebrow">Guide / ${guide.goal}</span>
          <h1 class="detail-title">${guide.title}</h1>
          <p class="lead">${guide.subtitle}</p>
          <div class="mini-meta">
            <span class="meta-chip strong">${guide.level}</span>
            ${guide.types.map((type) => `<span class="meta-chip">${type}</span>`).join("")}
          </div>
          <div class="detail-panel">
            <h3>这份清单解决什么问题</h3>
            <p>${guide.summary}</p>
          </div>
          <section class="section" style="margin-top: 18px;">
            ${guide.items.map(guideItemCard).join("")}
          </section>
        </article>
        <aside>
          <div class="note-panel">
            <h3>使用方法</h3>
            <p>先选 1 本书或 1 部影片建立语境，再看对应秀场/杂志。不要一次性收藏太多，先完成一个小闭环。</p>
            <button class="primary-button" type="button" style="margin-top: 12px;" onclick="saveToBoard('guide','${guide.id}')">加入灵感板</button>
            <p id="boardStatus" class="muted-note"></p>
          </div>
          <div class="note-panel">
            <h3>版权边界</h3>
            <p>没有官方免费入口时，只提供片名、书名、渠道查询和合法获取建议，不提供盗版链接。</p>
          </div>
        </aside>
      </section>
    </div>
  `);
}

function renderTrends() {
  const types = [...new Set(trendIssues.map((trend) => trend.type))];
  shell(`
    <div class="page">
      <section>
        <span class="eyebrow">Trend Notes</span>
        <h1 class="detail-title">趋势周报</h1>
        <p class="lead">以中国用户日常穿搭语境为主，记录真实月度趋势和每周穿搭观察。这里只做推荐分享和审美解释，不做价格分析和替代单品推荐。</p>
      </section>
      <section class="library-layout section">
        <aside class="filter-panel">
          <div class="filter-group">
            <label for="trendType">时间类型</label>
            <select id="trendType" class="filter-select" data-trend-filter="type">
              <option value="all">全部趋势</option>
              ${types.map((type) => `<option value="${type}">${type}</option>`).join("")}
            </select>
          </div>
          <div class="detail-panel" style="margin-top: 14px;">
            <h3>时间轴</h3>
            <p>年度总览 -> 月度趋势 -> 每周穿搭观察。第一版以静态人工策展为主，后续再接半自动资料搜集。</p>
          </div>
        </aside>
        <div class="library-results">
          <div class="toolbar"><strong id="trendCount">${trendIssues.length} 期趋势</strong></div>
          <div id="trendResults" class="topic-grid">${trendIssues.map(trendCard).join("")}</div>
        </div>
      </section>
    </div>
  `);
  bindTrendFilters();
}

function bindTrendFilters() {
  const update = (type) => {
    const results = type === "all" ? trendIssues : trendIssues.filter((trend) => trend.type === type);
    document.querySelector("#trendCount").textContent = `${results.length} 期趋势`;
    document.querySelector("#trendResults").innerHTML = results.length
      ? results.map(trendCard).join("")
      : `<div class="empty-state">没有找到匹配趋势。</div>`;
  };
  document.querySelector("[data-trend-filter]").addEventListener("change", (event) => update(event.target.value));
}

function renderTrend(id) {
  const trend = trendById(id) || trendIssues[0];
  const relatedGuides = trend.relatedGuideIds.map(guideById).filter(Boolean);
  const relatedResources = trend.relatedResourceIds.map(byId).filter(Boolean);
  shell(`
    <div class="page">
      <section class="two-col">
        <article>
          <span class="eyebrow">${trend.type} / ${trend.periodLabel}</span>
          <h1 class="detail-title">${trend.title}</h1>
          <p class="lead">${trend.summary}</p>
          <div class="mini-meta">
            <span class="meta-chip strong">${trend.trendName}</span>
            <span class="meta-chip">${trend.audience}</span>
            <span class="meta-chip">${trend.periodYear}</span>
            <span class="meta-chip">${trend.periodMonth}</span>
            ${trend.periodWeek ? `<span class="meta-chip">${trend.periodWeek}</span>` : ""}
          </div>
          <div class="detail-panel">
            <h3>编辑判断</h3>
            <p>${trend.editorialJudgement}</p>
          </div>
          ${detailListPanel("关键单品", trend.keyItems)}
          ${detailListPanel("关键颜色", trend.keyColors)}
          ${detailListPanel("关键材质", trend.keyMaterials)}
          ${detailListPanel("搭配公式", trend.outfitFormulas)}
          ${detailListPanel("适合场景", trend.suitableScenarios)}
          ${detailListPanel("不适合场景", trend.avoidScenarios)}
          <div class="detail-panel">
            <h3>来源依据</h3>
            <p>趋势内容区分公开来源线索和本站编辑判断。以下链接只用于核查趋势背景，不搬运来源内容。</p>
            <div class="source-list">
              ${trend.evidenceSources.map((source) => `<a class="source-link" href="${source.url}" target="_blank" rel="noreferrer"><strong>${source.label}</strong><span>${source.url}</span></a>`).join("")}
            </div>
          </div>
        </article>
        <aside>
          <div class="note-panel">
            <h3>收藏趋势</h3>
            <p>加入灵感板后，可以和书籍、秀场、风格词条一起形成自己的审美资料夹。</p>
            <button class="primary-button" type="button" onclick="saveToBoard('trend','${trend.id}')">加入灵感板</button>
            <p id="boardStatus" class="muted-note"></p>
          </div>
          <div class="note-panel">
            <h3>延伸推荐清单</h3>
            <div class="step-list">
              ${relatedGuides.map((guide) => `<a class="secondary-button" href="#/guide/${guide.id}">${guide.title}</a>`).join("")}
            </div>
          </div>
          <div class="note-panel">
            <h3>相关资源</h3>
            <div class="step-list">
              ${relatedResources.map((resource) => `<a class="secondary-button" href="#/resource/${resource.id}">${resource.title}</a>`).join("")}
            </div>
          </div>
        </aside>
      </section>
    </div>
  `);
}

function styleCard(style) {
  return `
    <article class="topic-card">
      <div class="tag-row">${style.keywords.slice(0, 3).map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
      <h3 style="margin-top: 12px;"><a href="#/style/${style.id}">${style.title}</a></h3>
      <p>${style.explanation}</p>
      <div class="card-actions">
        <a class="secondary-button" href="#/style/${style.id}">查看词条</a>
        <button class="secondary-button" type="button" onclick="saveToBoard('style','${style.id}')">收藏</button>
      </div>
    </article>
  `;
}

function renderStyles() {
  shell(`
    <div class="page">
      <section>
        <span class="eyebrow">Style Dictionary</span>
        <h1 class="detail-title">风格词典</h1>
        <p class="lead">把中文用户常见的风格词拆成气质、颜色、面料、廓形、代表品牌、秀场和应用场景。先做 20 个高频词条，不追求泛泛堆词。</p>
      </section>
      <section class="topic-grid section">${styleDictionary.map(styleCard).join("")}</section>
    </div>
  `);
}

function renderStyle(id) {
  const style = styleById(id) || styleDictionary[0];
  const research = styleResearchAddon(style);
  const relatedTrends = research.trendIds.map(trendById).filter(Boolean);
  shell(`
    <div class="page">
      <section class="two-col">
        <article>
          <span class="eyebrow">Style Dictionary</span>
          <h1 class="detail-title">${style.title}</h1>
          <p class="lead">${style.explanation}</p>
          ${detailListPanel("视觉关键词", style.keywords)}
          ${detailListPanel("常见颜色", style.colors)}
          ${detailListPanel("面料与材质", style.materials)}
          ${detailListPanel("廓形语言", style.silhouettes)}
          ${detailListPanel("代表品牌", style.brands)}
          ${detailListPanel("代表秀场", style.runwayRefs)}
          ${detailListPanel("推荐书籍", style.books)}
          <div class="detail-panel"><h3>适合应用</h3><p>${style.useCases}</p></div>
          ${detailListPanel("代表影像/摄影/杂志", research.mediaRefs)}
          ${detailListPanel("日常穿搭转译", research.dailyTranslation)}
          ${detailListPanel("常见误区", research.commonMistakes)}
        </article>
        <aside>
          <div class="note-panel">
            <h3>相关趋势文章</h3>
            <div class="step-list">
              ${relatedTrends.length ? relatedTrends.map((trend) => `<a class="secondary-button" href="#/trend/${trend.id}">${trend.title}</a>`).join("") : `<p>暂无直接关联趋势，可以从趋势周报继续横向阅读。</p>`}
            </div>
          </div>
          <div class="note-panel">
            <h3>来源跳转</h3>
            <div class="source-list">
              ${style.sourceLinks.map((link) => `<a class="source-link" href="${link.url}" target="_blank" rel="noreferrer"><strong>${link.label}</strong><span>从权威图文、机构资料或官方档案延伸阅读。</span></a>`).join("")}
            </div>
            <button class="primary-button" type="button" style="margin-top: 12px;" onclick="saveToBoard('style','${style.id}')">加入灵感板</button>
            <p id="boardStatus" class="muted-note"></p>
          </div>
        </aside>
      </section>
    </div>
  `);
}

function styleResearchAddon(style) {
  const addonMap = {
    minimalism: {
      mediaRefs: ["The Gentlewoman 人物影像", "Peter Lindbergh 黑白时尚摄影", "Celine SS2010 图文档案"],
      dailyTranslation: ["减少颜色数量", "用合身裤型和干净鞋型提高完成度", "把面料质感放在 Logo 前面"],
      commonMistakes: ["把极简理解成无聊", "只穿黑白灰但忽略比例", "用廉价皱面料破坏干净感"],
      trendIds: ["trend-2026-w21-office", "trend-2026-annual"],
    },
    "quiet-luxury": {
      mediaRefs: ["The Row lookbook", "Vogue Runway 极简秀评", "Vogue Business 品牌报道"],
      dailyTranslation: ["选择低饱和色", "控制包鞋和首饰存在感", "优先整理肩线、裤长和针织质感"],
      commonMistakes: ["把静奢等同于昂贵", "过度追求无 Logo", "忽略版型导致显得普通"],
      trendIds: ["trend-2026-w21-office", "trend-2026-annual"],
    },
    "new-chinese": {
      mediaRefs: ["Guo Pei 高定图文资料", "中国国际时装周报道", "Google Arts & Culture 中国服饰资料"],
      dailyTranslation: ["用盘扣或立领做小面积提示", "用现代裤装平衡礼服感", "控制纹样和配饰数量"],
      commonMistakes: ["把新中式穿成影楼服", "堆叠太多传统符号", "忽略日常场景的轻量化"],
      trendIds: ["trend-2026-05-monthly"],
    },
    gorpcore: {
      mediaRefs: ["Highsnobiety style", "Pinterest Predicts", "品牌 lookbook/官方户外系列"],
      dailyTranslation: ["保留一个功能单品", "用干净裤型和基础色压住装备感", "让防晒、通勤和周末出行共用"],
      commonMistakes: ["全套装备化", "颜色过多", "把专业户外和城市穿搭混为一谈"],
      trendIds: ["trend-2026-w22-weekend", "trend-2026-annual"],
    },
    balletcore: {
      mediaRefs: ["Miu Miu SS2022", "Simone Rocha 图文资料", "舞蹈与时尚摄影资料"],
      dailyTranslation: ["用平底鞋或薄针织小面积引入", "用直筒裤/半裙降低甜度", "选择低饱和粉白灰"],
      commonMistakes: ["过度少女化", "忽略腿部比例", "把舞台服直接搬到日常"],
      trendIds: ["trend-2026-annual"],
    },
    "archive-fashion-primer": {
      mediaRefs: ["Vestiaire Collective Journal", "The RealReal Editorial", "Martin Margiela: In His Own Words"],
      dailyTranslation: ["从一件旧外套或包开始", "记录品牌年份和系列线索", "把档案感和现代基础款混搭"],
      commonMistakes: ["只看稀缺性不看设计语言", "把二手消费等同于 archive", "过度迷信年份"],
      trendIds: ["trend-2026-05-monthly"],
    },
  };
  const fallback = {
    mediaRefs: ["Vogue Runway 图文档案", "AnOther / i-D / Dazed 时尚影像", "Google Arts & Culture 博物馆资料"],
    dailyTranslation: [`从 ${style.colors.slice(0, 2).join("、")} 两个颜色开始`, `选择一个代表廓形：${style.silhouettes[0]}`, `只保留 1 个强风格符号，其余用基础款承接`],
    commonMistakes: ["只复制表面符号，不理解来源语境", "一次堆叠太多关键词", "忽略场景、比例和材质"],
    trendIds: ["trend-2026-annual", "trend-2026-05-monthly"],
  };
  return addonMap[style.id] || fallback;
}

function detailListPanel(title, values) {
  return `<div class="detail-panel"><h3>${title}</h3><div class="tag-row" style="margin-top: 12px;">${values.map((value) => `<span class="tag">${value}</span>`).join("")}</div></div>`;
}

function runwayCard(show) {
  return `
    <article class="topic-card">
      <div class="tag-row">${show.tags.slice(0, 3).map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
      <h3 style="margin-top: 12px;">${show.title}</h3>
      <p>${show.designer} · ${show.year}</p>
      <p>${show.whyImportant}</p>
      <div class="card-actions">
        <button class="secondary-button" type="button" onclick="saveToBoard('runway','${show.id}')">收藏</button>
        <a class="primary-button" href="${show.links[0].url}" target="_blank" rel="noreferrer">查资料</a>
      </div>
    </article>
  `;
}

function renderRunwayPaths() {
  shell(`
    <div class="page">
      <section>
        <span class="eyebrow">Runway Paths</span>
        <h1 class="detail-title">秀场学习路径</h1>
        <p class="lead">先做 30 场必看秀场。重点不是收录最多，而是解释为什么重要、怎么看、关联什么风格，并提供 Vogue、YouTube 和品牌档案等官方/权威入口。</p>
      </section>
      <section class="topic-grid section">${runwayShows.map(runwayCard).join("")}</section>
    </div>
  `);
}

function bookCard(book) {
  return `
    <article class="topic-card">
      <div class="tag-row">${book.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
      <h3 style="margin-top: 12px;">${book.title}</h3>
      <p>${book.author} · ${book.category}</p>
      <p>${book.why}</p>
      <div class="card-actions">
        <button class="secondary-button" type="button" onclick="saveToBoard('book','${book.id}')">收藏</button>
        <a class="primary-button" href="${book.links[0].url}" target="_blank" rel="noreferrer">合法入口</a>
      </div>
    </article>
  `;
}

function renderBookshelf() {
  const groups = ["入门", "进阶", "视觉", "专业"];
  shell(`
    <div class="page">
      <section>
        <span class="eyebrow">Bookshelf</span>
        <h1 class="detail-title">时尚书架</h1>
        <p class="lead">50 本书按学习阶段组织，只提供 WorldCat、Google Books、豆瓣等合法购买、借阅、预览和书评入口，不提供下载。</p>
      </section>
      ${groups.map((group) => `
        <section class="section">
          <div class="section-head"><div><span class="eyebrow">${group}</span><h2>${group}书单</h2></div></div>
          <div class="card-grid">${fashionBooks.filter((book) => book.stage === group).map(bookCard).join("")}</div>
        </section>
      `).join("")}
    </div>
  `);
}

function boardItem(type, item) {
  const title = item.title;
  const body = item.summary || item.explanation || item.whyImportant || item.why || "";
  const href = type === "resource" ? `#/resource/${item.id}`
    : type === "style" ? `#/style/${item.id}`
    : type === "guide" ? `#/guide/${item.id}`
    : type === "trend" ? `#/trend/${item.id}`
    : type === "runway" ? "#/runway-paths"
    : "#/bookshelf";
  return `
    <article class="topic-card">
      <span class="meta-chip strong">${type}</span>
      <h3 style="margin-top: 12px;"><a href="${href}">${title}</a></h3>
      <p>${body}</p>
      <button class="secondary-button" type="button" onclick="removeFromBoard('${type}','${item.id}')">移除</button>
    </article>
  `;
}

function renderBoard() {
  const board = readBoard();
  const sections = [
    ["guide", "推荐清单", (board.guide || []).map(guideById).filter(Boolean)],
    ["trend", "趋势", (board.trend || []).map(trendById).filter(Boolean)],
    ["resource", "资源", (board.resource || []).map(byId).filter(Boolean)],
    ["style", "风格", (board.style || []).map(styleById).filter(Boolean)],
    ["book", "书籍", (board.book || []).map(bookById).filter(Boolean)],
    ["runway", "秀场", (board.runway || []).map(runwayById).filter(Boolean)],
  ];
  const total = sections.reduce((sum, [, , items]) => sum + items.length, 0);
  shell(`
    <div class="page">
      <section>
        <span class="eyebrow">Personal Moodboard</span>
        <h1 class="detail-title">个人灵感板</h1>
        <p class="lead">收藏会保存在当前浏览器的 localStorage 中，不需要账号。现在可以收藏推荐清单、趋势、资源、风格、书籍和秀场，并导出 Markdown 摘要。</p>
        <div style="margin-top: 18px;">
          <button class="primary-button" id="exportBoard" type="button">导出 Markdown</button>
        </div>
      </section>
      ${total ? sections.map(([type, title, items]) => `
        <section class="section">
          <div class="section-head"><div><span class="eyebrow">${type}</span><h2>${title}</h2></div><p>${items.length} 条收藏</p></div>
          <div class="card-grid">${items.length ? items.map((item) => boardItem(type, item)).join("") : `<div class="empty-state">暂无${title}收藏。</div>`}</div>
        </section>
      `).join("") : `<section class="section"><div class="empty-state">还没有收藏。你可以在推荐清单、趋势、资源详情、风格词典、时尚书架或秀场路径里点击“收藏”。</div></section>`}
      <section class="section">
        <div class="ai-output" id="boardExport">点击“导出 Markdown”生成可复制摘要。</div>
      </section>
    </div>
  `);
  document.querySelector("#exportBoard").addEventListener("click", () => {
    document.querySelector("#boardExport").textContent = boardToMarkdown(sections);
  });
}

function boardToMarkdown(sections) {
  const lines = ["# FashionAtlas 个人灵感板", ""];
  sections.forEach(([, title, items]) => {
    if (!items.length) return;
    lines.push(`## ${title}`, "");
    items.forEach((item) => {
      const desc = item.summary || item.explanation || item.whyImportant || item.why || item.subtitle || "";
      lines.push(`- **${item.title}**：${desc}`);
    });
    lines.push("");
  });
  return lines.join("\n").trim();
}

function renderLibrary(params = new URLSearchParams()) {
  state = {
    ...state,
    query: params.get("q") || state.query || "",
    channel: params.get("channel") || state.channel || "all",
  };
  const results = filterResources();
  shell(`
    <div class="page">
      <section class="section" style="margin-top: 10px;">
        <span class="eyebrow">Library</span>
        <h1 class="detail-title">资源库</h1>
        <p class="lead">卡片/列表双视图，支持关键词、频道、标签、难度、免费/付费、语言筛选。当前共收录 ${resources.length} 条资源。</p>
      </section>
      <section class="library-layout section">
        <aside class="filter-panel">
          <div class="filter-group">
            <label for="query">关键词</label>
            <input id="query" class="search-input" value="${escapeHtml(state.query)}" placeholder="Search..." />
          </div>
          ${selectGroup("channel", "频道", [["all", "全部频道"], ...channels.map(([id, en, zh]) => [id, `${en} / ${zh}`])])}
          ${selectGroup("tag", "标签", [["all", "全部标签"], ...uniqueValues("tags").map((tag) => [tag, tag])])}
          ${selectGroup("difficulty", "难度", [["all", "全部难度"], ...uniqueValues("difficulty").map((v) => [v, v])])}
          ${selectGroup("priceType", "访问", [["all", "全部"], ...uniqueValues("priceType").map((v) => [v, v])])}
          ${selectGroup("language", "语言", [["all", "全部语言"], ...uniqueValues("language").map((v) => [v, v])])}
          ${selectGroup("sourceType", "内容类型", [["all", "全部内容类型"], ...Object.entries(sourceTypeLabels).map(([value, text]) => [value, text])])}
          <div class="filter-group">
            <button class="secondary-button" id="resetFilters" type="button">重置筛选</button>
          </div>
        </aside>
        <div class="library-results">
          <div class="toolbar">
            <strong id="resultCount">${results.length} 条结果</strong>
            <div class="view-toggle" aria-label="View toggle">
              <button class="icon-button ${state.view === "card" ? "is-active" : ""}" data-view="card" title="卡片视图">▦</button>
              <button class="icon-button ${state.view === "list" ? "is-active" : ""}" data-view="list" title="列表视图">☰</button>
            </div>
          </div>
          <div id="results" class="${state.view === "list" ? "list-view" : "card-grid"}">
            ${results.length ? results.map(resourceCard).join("") : `<div class="empty-state">没有找到匹配资源，试试减少筛选条件。</div>`}
          </div>
        </div>
      </section>
    </div>
  `);
  bindLibrary();
}

function selectGroup(id, label, options) {
  return `
    <div class="filter-group">
      <label for="${id}">${label}</label>
      <select id="${id}" class="filter-select">
        ${options.map(([value, text]) => `<option value="${value}" ${state[id] === value ? "selected" : ""}>${text}</option>`).join("")}
      </select>
    </div>
  `;
}

function bindLibrary() {
  const update = () => {
    const results = filterResources();
    const resultEl = document.querySelector("#results");
    document.querySelector("#resultCount").textContent = `${results.length} 条结果`;
    resultEl.className = state.view === "list" ? "list-view" : "card-grid";
    resultEl.innerHTML = results.length
      ? results.map(resourceCard).join("")
      : `<div class="empty-state">没有找到匹配资源，试试减少筛选条件。</div>`;
    document.querySelectorAll("[data-view]").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.view === state.view);
    });
  };
  document.querySelector("#query").addEventListener("input", (event) => {
    state.query = event.target.value;
    update();
  });
  ["channel", "tag", "difficulty", "priceType", "language", "sourceType"].forEach((id) => {
    document.querySelector(`#${id}`).addEventListener("change", (event) => {
      state[id] = event.target.value;
      update();
    });
  });
  document.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => {
      state.view = button.dataset.view;
      update();
    });
  });
  document.querySelector("#resetFilters").addEventListener("click", () => {
    state = { query: "", channel: "all", tag: "all", difficulty: "all", priceType: "all", language: "all", sourceType: "all", view: state.view };
    document.querySelector("#query").value = "";
    ["channel", "tag", "difficulty", "priceType", "language", "sourceType"].forEach((id) => {
      document.querySelector(`#${id}`).value = "all";
    });
    update();
  });
}

function pathCard(path) {
  const items = path.resourceIds.map(byId).filter(Boolean);
  return `
    <a class="path-card" href="#/path/${path.id}">
      <span class="meta-chip strong">${path.level}</span>
      <h3 style="margin-top: 12px;">${path.title}</h3>
      <p>${path.subtitle}</p>
      <div class="mini-meta">
        ${items.slice(0, 4).map((item) => `<span class="tag">${item.source}</span>`).join("")}
      </div>
    </a>
  `;
}

function topicCard(topic) {
  return `
    <a class="topic-card" href="#/topic/${topic.id}">
      <div class="tag-row">${topic.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
      <h3 style="margin-top: 12px;">${topic.title}</h3>
      <p>${topic.intro}</p>
    </a>
  `;
}

function renderPaths() {
  shell(`
    <div class="page">
      <section class="section" style="margin-top: 10px;">
        <span class="eyebrow">Routes</span>
        <h1 class="detail-title">学习路径</h1>
        <p class="lead">每条路径用 8 个左右资源建立一个可执行的学习顺序，适合从兴趣进入系统理解。</p>
      </section>
      <section class="path-grid section">${learningPaths.map(pathCard).join("")}</section>
    </div>
  `);
}

function renderPath(id) {
  const path = learningPaths.find((item) => item.id === id) || learningPaths[0];
  const items = path.resourceIds.map(byId).filter(Boolean);
  shell(`
    <div class="page">
      <section class="two-col">
        <div>
          <span class="eyebrow">Learning Path</span>
          <h1 class="detail-title">${path.title}</h1>
          <p class="lead">${path.subtitle}</p>
          <ol class="step-list">
            ${items.map((item) => `
              <li>
                <div>
                  <a href="#/resource/${item.id}"><strong>${item.title}</strong></a>
                  <p>${item.whyUseful}</p>
                </div>
              </li>
            `).join("")}
          </ol>
        </div>
        <aside>
          <div class="note-panel">
            <span class="meta-chip strong">${path.level}</span>
            <h3 style="margin-top: 12px;">学习建议</h3>
            <p>先快速浏览所有来源，再为每个资源记录 3 个关键词：风格、材料/廓形、文化语境。最后回到资源库继续横向搜索。</p>
          </div>
        </aside>
      </section>
    </div>
  `);
}

function renderTopics() {
  shell(`
    <div class="page">
      <section class="section" style="margin-top: 10px;">
        <span class="eyebrow">Editorial Curation</span>
        <h1 class="detail-title">专题</h1>
        <p class="lead">专题不是新闻流，而是把资源按一个具体问题重新组织，帮助你带着问题阅读。</p>
      </section>
      <section class="topic-grid section">${topics.map(topicCard).join("")}</section>
    </div>
  `);
}

function renderTopic(id) {
  const topic = topics.find((item) => item.id === id) || topics[0];
  const items = topic.resourceIds.map(byId).filter(Boolean);
  shell(`
    <div class="page">
      <section>
        <span class="eyebrow">Topic</span>
        <h1 class="detail-title">${topic.title}</h1>
        <p class="lead">${topic.intro}</p>
        <div class="tag-row" style="margin-top: 18px;">${topic.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
      </section>
      <section class="card-grid section">${items.map(resourceCard).join("")}</section>
    </div>
  `);
}

function renderResource(id) {
  const item = byId(id);
  if (!item) {
    renderLibrary(new URLSearchParams());
    return;
  }
  const related = item.relatedResourceIds.map(byId).filter(Boolean);
  const relatedGuides = recommendationGuides
    .filter((guide) => guide.items.some((entry) => entry.originalTitle === item.title || entry.chineseTitle === item.title || entry.link === item.primaryUrl))
    .slice(0, 3);
  const relatedTrends = trendIssues
    .filter((trend) => trend.relatedResourceIds.includes(item.id))
    .slice(0, 3);
  shell(`
    <div class="page">
      <section class="two-col">
        <article>
          <span class="eyebrow">${channelMap[item.channel].en} / ${channelMap[item.channel].zh}</span>
          <h1 class="detail-title">${item.title}</h1>
          <p class="lead">${item.summary}</p>
          <div class="mini-meta">
            <span class="meta-chip strong">${item.source}</span>
            <span class="meta-chip">${item.difficulty}</span>
            <span class="meta-chip">${item.priceType}</span>
            <span class="meta-chip">${item.language}</span>
            <span class="meta-chip">${sourceTypeLabels[item.sourceType]}</span>
            <span class="meta-chip">${item.region}</span>
            <span class="meta-chip">${item.era}</span>
          </div>
          <div class="detail-panel">
            <h3>为什么值得看</h3>
            <p>${item.whyUseful}</p>
          </div>
          <div class="detail-panel">
            <h3>如何阅读/观看</h3>
            <p>先用中文摘要理解它解决什么问题，再打开官方入口。阅读时记录 3 个关键词：风格、材料/廓形、文化语境；如果是影片或秀场，再记录一个你能转译到日常穿搭的细节。</p>
          </div>
          <div class="detail-panel">
            <h3>标签</h3>
            <div class="tag-row" style="margin-top: 12px;">${item.tags.map((tag) => `<a class="tag" href="#/library?q=${encodeURIComponent(tag)}">${tag}</a>`).join("")}</div>
          </div>
          <div class="detail-panel">
            <h3>版权/访问说明</h3>
            <p>${item.licenseNote}</p>
          </div>
          <div class="detail-panel">
            <h3>官方入口</h3>
            <p>优先从来源网站、品牌/机构档案、出版社、馆藏或权威媒体进入。本站只做中文策展说明，不复制、不搬运第三方内容。</p>
            <div class="source-list">
              ${item.officialLinks.map((link) => `<a class="source-link" href="${link.url}" target="_blank" rel="noreferrer"><strong>${link.label}</strong><span>${link.note}</span></a>`).join("")}
            </div>
          </div>
        </article>
        <aside>
          <div class="resource-media" style="--image:url('${item.thumbnail}'); min-height: 280px; border-radius: 8px;"></div>
          <div class="note-panel">
            <h3>来源链接</h3>
            <p>${item.contentType} · ${item.source} · ${item.priceType}</p>
            <a class="primary-button" href="${item.primaryUrl}" target="_blank" rel="noreferrer">访问主来源</a>
            <button class="secondary-button" type="button" style="margin-top: 8px;" onclick="saveToBoard('resource','${item.id}')">加入灵感板</button>
            <p id="boardStatus" class="muted-note"></p>
          </div>
          <div class="note-panel">
            <h3>相关资源</h3>
            <div class="step-list">
              ${related.map((rel) => `<a class="secondary-button" href="#/resource/${rel.id}">${rel.title}</a>`).join("")}
            </div>
          </div>
          ${relatedGuides.length ? `<div class="note-panel">
            <h3>出现于推荐清单</h3>
            <div class="step-list">
              ${relatedGuides.map((guide) => `<a class="secondary-button" href="#/guide/${guide.id}">${guide.title}</a>`).join("")}
            </div>
          </div>` : ""}
          ${relatedTrends.length ? `<div class="note-panel">
            <h3>相关趋势</h3>
            <div class="step-list">
              ${relatedTrends.map((trend) => `<a class="secondary-button" href="#/trend/${trend.id}">${trend.title}</a>`).join("")}
            </div>
          </div>` : ""}
        </aside>
      </section>
    </div>
  `);
}

function renderAbout() {
  shell(`
    <div class="page">
      <section>
        <span class="eyebrow">About / Submit</span>
        <h1 class="detail-title">收录与版权规范</h1>
        <p class="lead">FashionAtlas 是策展型学习目录，不是内容搬运站。我们重视来源、语境、版权和长期可维护性。</p>
      </section>
      <section class="two-col section">
        <div>
          <div class="detail-panel">
            <h3>收录标准</h3>
            <p>优先收录官方、博物馆、院校、出版物、开源项目和可长期访问资源。每条资源需要有人工判断标签、学习价值和访问说明。</p>
          </div>
          <div class="detail-panel">
            <h3>版权策略</h3>
            <p>不搬运受版权保护的正文和图片；只展示短摘要、来源、外链和必要缩略图。公共馆藏图片也必须逐项检查授权。</p>
          </div>
          <div class="detail-panel">
            <h3>后续地基</h3>
            <p>数据模型已包含频道、标签、访问类型、语言、难度、区域、年代、版权说明和关联资源。未来可迁移到 Git-backed CMS、Sanity、Supabase 或接入 Europeana/V&A API。</p>
          </div>
        </div>
        <form class="note-panel" id="submitForm">
          <h3>提交资源</h3>
          <p>当前为前端原型，提交会在本地生成一条待审核预览。</p>
          <div class="form-grid">
            <label class="form-field">
              资源名称
              <input name="title" required />
            </label>
            <label class="form-field">
              来源
              <input name="source" required />
            </label>
            <label class="form-field full">
              链接
              <input name="url" type="url" required />
            </label>
            <label class="form-field full">
              推荐理由
              <textarea name="reason" rows="4" required></textarea>
            </label>
          </div>
          <button class="primary-button" type="submit" style="margin-top: 14px;">生成待审核预览</button>
          <div id="submissionPreview" style="margin-top: 14px;"></div>
        </form>
      </section>
    </div>
  `);
  document.querySelector("#submitForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    document.querySelector("#submissionPreview").innerHTML = `
      <div class="detail-panel">
        <span class="meta-chip strong">待审核</span>
        <h3 style="margin-top: 10px;">${escapeHtml(data.title)}</h3>
        <p>${escapeHtml(data.reason)}</p>
        <a href="${escapeHtml(data.url)}" target="_blank" rel="noreferrer">${escapeHtml(data.source)}</a>
      </div>
    `;
    event.currentTarget.reset();
  });
}

function renderCaseStudy() {
  shell(`
    <div class="page">
      <section>
        <span class="eyebrow">Portfolio Case Study</span>
        <h1 class="detail-title">FashionAtlas 项目复盘</h1>
        <p class="lead">这是面向 AI 产品经理面试的项目说明页，重点展示 FashionAtlas 如何从“资源跳转目录”升级为“时尚学习推荐 + 真实趋势策展 + 个人灵感沉淀”的产品。</p>
      </section>
      <section class="case-grid section">
        <article class="case-card">
          <h3>用户痛点</h3>
          <ul>
            <li>时尚小白对时尚感兴趣，但不知道该看什么、先看什么、怎么看。</li>
            <li>书籍、影片、秀场、杂志和趋势信息分散，单纯链接无法形成学习路径。</li>
            <li>中国日常穿搭趋势容易被种草内容带偏，缺少审美解释和来源依据。</li>
          </ul>
        </article>
        <article class="case-card">
          <h3>MVP 决策</h3>
          <ul>
            <li>学习型资料站占 60%，日常穿搭趋势资讯占 40%。</li>
            <li>新增 8 个推荐清单，覆盖书籍、影片、杂志和秀场。</li>
            <li>新增真实周/月趋势栏目，只做推荐分享和审美解释，不做价格分析。</li>
          </ul>
        </article>
        <article class="case-card">
          <h3>AI 产品设计</h3>
          <ul>
            <li>AI 不泛聊，而是基于推荐清单、趋势内容和资源库回答。</li>
            <li>输出必须回到站内清单、趋势和官方/权威来源。</li>
            <li>趋势回答不做价格分析、预算分层或替代单品推荐。</li>
          </ul>
        </article>
        <article class="case-card">
          <h3>核心指标</h3>
          <ul>
            <li>推荐清单采纳率：用户是否进入详情、收藏或继续浏览。</li>
            <li>趋势留存率：用户是否阅读周/月趋势并收藏穿搭灵感。</li>
            <li>AI 采纳率：AI 输出后是否点击站内推荐内容。</li>
            <li>灵感板导出率：验证内容是否能沉淀为个人审美档案。</li>
          </ul>
        </article>
        <article class="case-card">
          <h3>竞品启发</h3>
          <ul>
            <li>Vogue Runway：秀场与品牌档案入口。</li>
            <li>小红书/抖音：观察中国日常穿搭语境，但不复制内容。</li>
            <li>Pinterest/Vogue/BoF：趋势和行业背景参考。</li>
            <li>豆瓣/书单：启发资源推荐，但 FashionAtlas 更强调学习顺序。</li>
          </ul>
        </article>
        <article class="case-card">
          <h3>下一阶段</h3>
          <ul>
            <li>部署公开 URL，验证推荐清单和趋势栏目点击行为。</li>
            <li>把清单、趋势和资源迁移到 JSON/CMS，便于持续维护。</li>
            <li>接入半自动公开资料搜集，只保留元信息和自写策展说明。</li>
            <li>为面试准备“用户问题 -> 推荐清单 -> 趋势 -> 灵感板 -> AI”的演示链路。</li>
          </ul>
        </article>
      </section>
    </div>
  `);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function route() {
  const hash = location.hash || "#/";
  const [pathPart, queryPart] = hash.slice(2).split("?");
  const params = new URLSearchParams(queryPart || "");
  const parts = pathPart.split("/").filter(Boolean);

  if (!parts.length) renderHome();
  else if (parts[0] === "guides") renderGuides();
  else if (parts[0] === "guide") renderGuide(parts[1]);
  else if (parts[0] === "trends") renderTrends();
  else if (parts[0] === "trend") renderTrend(parts[1]);
  else if (parts[0] === "library") renderLibrary(params);
  else if (parts[0] === "ai") renderAI();
  else if (parts[0] === "styles") renderStyles();
  else if (parts[0] === "style") renderStyle(parts[1]);
  else if (parts[0] === "runway-paths") renderRunwayPaths();
  else if (parts[0] === "bookshelf") renderBookshelf();
  else if (parts[0] === "board") renderBoard();
  else if (parts[0] === "paths") renderPaths();
  else if (parts[0] === "path") renderPath(parts[1]);
  else if (parts[0] === "topics") renderTopics();
  else if (parts[0] === "topic") renderTopic(parts[1]);
  else if (parts[0] === "resource") renderResource(parts[1]);
  else if (parts[0] === "case") renderCaseStudy();
  else if (parts[0] === "about") renderAbout();
  else renderHome();
}

window.addEventListener("hashchange", route);
route();
