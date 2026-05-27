const DEFAULT_MODEL = "gpt-5-mini";

function json(res, status, body) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(body));
}

function extractText(data) {
  if (typeof data.output_text === "string") return data.output_text;
  const parts = [];
  for (const item of data.output || []) {
    for (const content of item.content || []) {
      if (content.type === "output_text" && content.text) parts.push(content.text);
      if (content.type === "text" && content.text) parts.push(content.text);
    }
  }
  return parts.join("\n").trim();
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return json(res, 405, { error: "Method not allowed" });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return json(res, 501, { error: "OPENAI_API_KEY is not configured" });
  }

  const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
  const question = String(body.question || "").slice(0, 1200);
  const intent = String(body.intent || "学习").slice(0, 80);
  const resources = Array.isArray(body.resources) ? body.resources.slice(0, 10) : [];
  const guides = Array.isArray(body.guides) ? body.guides.slice(0, 8) : [];
  const trends = Array.isArray(body.trends) ? body.trends.slice(0, 6) : [];

  const prompt = [
    "你是 FashionAtlas 的 AI 时尚学习导师，服务对象是中文时尚爱好者和 AI 产品经理面试展示场景。",
    "必须基于给定推荐清单、趋势内容和资源回答，不要编造不存在的资源。",
    "输出中文，结构包含：1. 学习目标判断 2. 推荐清单 3. 真实趋势参考 4. 3-5 步学习路径 5. 推荐资源 6. 官方/权威入口使用建议 7. 版权提醒。",
    "如果目标类型是“趋势跟踪”，额外输出“本周穿搭灵感摘要”；如果目标类型是“学习”，额外输出“我的学习清单”。",
    "优先推荐官方来源、品牌档案、馆藏、出版社、权威媒体和合法预览入口；YouTube 只作为官方平台上的参考来源，不鼓励下载、搬运或镜像视频。",
    "趋势内容只做审美推荐分享，不做价格分析、预算分层或替代单品推荐。",
    "语气专业、清晰、鼓励新手，但不要空泛。",
    "",
    `目标类型：${intent}`,
    `用户问题：${question}`,
    "",
    `候选推荐清单：${JSON.stringify(guides, null, 2)}`,
    "",
    `候选趋势：${JSON.stringify(trends, null, 2)}`,
    "",
    `候选资源：${JSON.stringify(resources, null, 2)}`,
  ].join("\n");

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL || DEFAULT_MODEL,
      input: prompt,
      max_output_tokens: 900,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    return json(res, response.status, { error: errorText });
  }

  const data = await response.json();
  const answer = extractText(data);
  return json(res, 200, { answer });
};
