// script.js — 行為腳本

// 1. 初始化 lucide icon
lucide.createIcons();

// 2. 主題切換（light / dark）
(function () {
  const toggleBtn = document.querySelector(".theme-toggle");
  const icon = toggleBtn.querySelector("svg");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (prefersDark) document.body.classList.add("dark");

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    icon.dataset.lucide = document.body.classList.contains("dark") ? "sun" : "moon";
    lucide.createIcons();
  });
})();

// 3. Intersection Observer — 滾動浮現效果
(function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.style.opacity = 1;
          e.target.style.transform = "translateY(0)";
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
})();

// 4. 打字動畫效果（header subtitle）
(function () {
  const typingEl = document.querySelector(".typing");
  if (!typingEl) return;
  const text = typingEl.textContent.trim();
  typingEl.textContent = "";
  [...text].forEach((char, idx) => {
    setTimeout(() => (typingEl.textContent += char), idx * 40);
  });
})();
