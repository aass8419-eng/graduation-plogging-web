(function () {
  document.querySelectorAll("[data-option-group]").forEach((group) => {
    const buttons = group.querySelectorAll(".option-btn:not(:disabled)");
    const hint = group.querySelector("[data-option-hint]");

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        buttons.forEach((b) => b.classList.remove("is-selected"));
        btn.classList.add("is-selected");
        if (hint) {
          const label = btn.getAttribute("data-label") || btn.textContent.trim();
          hint.textContent = `선택: ${label}`;
        }
      });
    });
  });
})();
