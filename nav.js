// 共享导航：侧边栏 + 移动端开关
// 修复：insertAdjacentHTML 会自动闭合未闭合标签，导致页面内容落在 .layout 之外、
// 顶部出现整屏空白。改为真实 DOM 操作：把 body 原有内容整体移入 .main。
const SECTIONS = [
  ["index.html",  "目录",  "CONTENTS", ""],
  ["page01.html", "封面",  "COVER", ""],
  ["page02.html", "为什么需要决策层", "WHY A DECISION LAYER", "Ⅰ"],
  ["page03.html", "Choice、Score 与 Noul", "DECISION PRIMITIVES", "Ⅱ"],
  ["page04.html", "决策契约即代码", "CONTRACTS AS CODE", "Ⅲ"],
  ["page05.html", "状态包与证据", "STATE AND EVIDENCE", "Ⅳ"],
  ["page06.html", "置信度、后果与校准", "CONFIDENCE & CALIBRATION", "Ⅴ"],
  ["page07.html", "并行问题与状态边界", "PARALLEL DECISIONS", "Ⅵ"],
  ["page08.html", "Jev 在执行框架中的位置", "WHERE JEV BELONGS", "Ⅶ"],
  ["page09.html", "实时菜单与检索", "LIVE MENUS & RETRIEVAL", "Ⅷ"],
  ["page10.html", "评估与生产上线", "EVALUATION & ROLLOUT", "Ⅸ"],
  ["page11.html", "失败模式与修正", "FAILURE MODES", "Ⅹ"],
  ["page12.html", "实施手册与资料来源", "PLAYBOOK & SOURCES", "Ⅺ"],
];
(function () {
  const here = location.pathname.split("/").pop() || "index.html";
  const links = SECTIONS.map(([f, zh, , no]) =>
    `<a href="${f}" class="${f === here ? "active" : ""}"><span class="no">${no || "·"}</span><span>${zh}</span></a>`
  ).join("");

  // 1. 收集 body 原有内容（页面正文）
  const content = Array.from(document.body.childNodes);

  // 2. 构造导航骨架
  const toggle = document.createElement("button");
  toggle.id = "sidebar-toggle";
  toggle.setAttribute("aria-label", "目录");
  toggle.textContent = "☰";

  const layout = document.createElement("div");
  layout.className = "layout";
  layout.innerHTML =
    `<aside class="sidebar">` +
    `<div class="brand">` +
    `<div class="zh">面向生产智能体的 Jev 工程</div>` +
    `<div class="en">Jev Engineering · 2026 中文手册</div>` +
    `</div><nav>${links}</nav></aside>` +
    `<div class="main"></div>`;

  const main = layout.querySelector(".main");

  // 3. 把原有内容移入 .main，再挂载骨架
  content.forEach((n) => main.appendChild(n));
  document.body.appendChild(toggle);
  document.body.appendChild(layout);

  // 4. 交互
  toggle.addEventListener("click", () =>
    document.body.classList.toggle("nav-open"));
  document.querySelectorAll(".sidebar a").forEach((a) =>
    a.addEventListener("click", () => document.body.classList.remove("nav-open")));
})();
