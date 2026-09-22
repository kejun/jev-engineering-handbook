// 共享导航：侧边栏 + 移动端开关
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
  document.body.insertAdjacentHTML("afterbegin", `
    <button id="sidebar-toggle" aria-label="目录">☰</button>
    <div class="layout">
    <aside class="sidebar">
      <div class="brand">
        <div class="zh">面向生产智能体的 Jev 工程</div>
        <div class="en">Jev Engineering · 2026 中文手册</div>
      </div>
      <nav>${links}</nav>
    </aside>
    <div class="main">`);
  document.body.insertAdjacentHTML("beforeend", `</div></div>`);
  document.getElementById("sidebar-toggle").addEventListener("click", () =>
    document.body.classList.toggle("nav-open"));
  document.querySelectorAll(".sidebar a").forEach(a =>
    a.addEventListener("click", () => document.body.classList.remove("nav-open")));
})();
