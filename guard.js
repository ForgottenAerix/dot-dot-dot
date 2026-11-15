(function antiInspect() {
  const bannerStyle = [
    "color: #ff3333",
    "background: #111111",
    "font-size: 18px",
    "font-weight: bold",
    "font-family: 'Courier New', monospace",
    "padding: 12px 16px",
    "border: 1px solid #ff3333"
  ].join(";");

  function printWarning() {
    console.clear();
    console.log("%cThere is nothing in there, try to think >:0", bannerStyle);
  }

  // 1. Выводим сообщение сразу при загрузке страницы
  printWarning();

  // 2. Отслеживаем открытие DevTools сбоку или снизу (резкое изменение разницы между внешним и внутренним окном)
  let devtoolsOpen = false;
  const threshold = 160;

  setInterval(() => {
    const widthDiff = window.outerWidth - window.innerWidth > threshold;
    const heightDiff = window.outerHeight - window.innerHeight > threshold;

    if ((widthDiff || heightDiff) && !devtoolsOpen) {
      devtoolsOpen = true;
      printWarning();
    } else if (!widthDiff && !heightDiff) {
      devtoolsOpen = false;
    }
  }, 800);

  // 3. Дополнительно перехватываем горячие клавиши F12 и Ctrl+Shift+I / Ctrl+U
  document.addEventListener("keydown", (e) => {
    if (
      e.key === "F12" ||
      (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C")) ||
      (e.ctrlKey && e.key === "u")
    ) {
      printWarning();
    }
  });
})();
