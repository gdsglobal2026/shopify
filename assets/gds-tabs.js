document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-tabs]").forEach((container) => {
    const buttons = container.querySelectorAll("[data-tab]");
    const panels = container.querySelectorAll("[data-tab-panel]");

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const target = btn.dataset.tab;

        buttons.forEach((b) => {
          b.setAttribute("aria-selected", b.dataset.tab === target);
          b.classList.toggle("gds-tab--active", b.dataset.tab === target);
        });

        panels.forEach((p) => {
          p.hidden = p.dataset.tabPanel !== target;
        });
      });
    });
  });
});
