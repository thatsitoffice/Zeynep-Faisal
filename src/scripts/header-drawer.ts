/**
 * Off-Canvas-Navigation: Toggle, Backdrop, Escape, Fokus zurück auf Toggle.
 */
function initHeaderDrawer(): void {
  const header = document.getElementById("site-header");
  const toggle = document.querySelector<HTMLButtonElement>("[data-drawer-toggle]");
  const drawer = document.getElementById("site-nav-drawer");
  if (!header || !toggle || !drawer) return;

  const closeBtn = drawer.querySelector<HTMLButtonElement>("[data-drawer-close]");
  const backdrop = drawer.querySelector<HTMLElement>("[data-drawer-backdrop]");

  const setOpen = (open: boolean) => {
    drawer.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    drawer.setAttribute("aria-hidden", open ? "false" : "true");
    if (open) {
      drawer.removeAttribute("inert");
      document.body.style.overflow = "hidden";
      closeBtn?.focus();
    } else {
      drawer.setAttribute("inert", "");
      document.body.style.overflow = "";
      toggle.focus();
    }
  };

  toggle.addEventListener("click", () => {
    setOpen(!drawer.classList.contains("is-open"));
  });

  backdrop?.addEventListener("click", () => setOpen(false));
  closeBtn?.addEventListener("click", () => setOpen(false));

  drawer.addEventListener("click", (e) => {
    const a = (e.target as HTMLElement).closest("a");
    if (a) setOpen(false);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("is-open")) {
      e.preventDefault();
      setOpen(false);
    }
  });
}

initHeaderDrawer();
