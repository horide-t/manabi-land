(() => {
  if (document.querySelector("[data-manabi-return]")) return;

  const style = document.createElement("style");
  style.textContent = `
    .manabi-return-link {
      position: fixed;
      left: max(14px, env(safe-area-inset-left));
      bottom: max(14px, env(safe-area-inset-bottom));
      z-index: 2147483647;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      min-height: 46px;
      padding: 8px 15px 8px 10px;
      border: 2px solid #173b57;
      border-radius: 999px;
      background: #fffdf7;
      color: #173b57;
      box-shadow: 3px 4px 0 #f4c94e;
      font-family: "Hiragino Maru Gothic ProN", "BIZ UDPGothic", "Yu Gothic", system-ui, sans-serif;
      font-size: 14px;
      font-weight: 800;
      line-height: 1;
      text-decoration: none;
      -webkit-tap-highlight-color: transparent;
      transition: transform .16s ease, box-shadow .16s ease;
    }
    .manabi-return-link:hover,
    .manabi-return-link:focus-visible {
      transform: translateY(-2px);
      box-shadow: 3px 6px 0 #f4c94e;
      outline: 3px solid rgba(23, 59, 87, .22);
      outline-offset: 3px;
    }
    .manabi-return-icon {
      display: grid;
      place-items: center;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: #173b57;
      color: white;
      font-size: 17px;
      line-height: 1;
    }
    @media print {
      .manabi-return-link { display: none !important; }
    }
    @media (prefers-reduced-motion: reduce) {
      .manabi-return-link { transition: none; }
    }
  `;

  const link = document.createElement("a");
  link.href = "../index.html";
  link.className = "manabi-return-link";
  link.dataset.manabiReturn = "";
  link.setAttribute("aria-label", "まなびランドのアプリ一覧へ戻る");
  link.innerHTML = '<span class="manabi-return-icon" aria-hidden="true">←</span><span>まなびランドへ</span>';
  link.addEventListener("click", (event) => event.stopPropagation());

  document.head.append(style);
  document.body.append(link);
})();
