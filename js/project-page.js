// Script específico de las páginas independientes.
const sidebar = document.getElementById("sidebar");
const scrim = document.getElementById("mobileScrim");
document.getElementById("openSidebar")?.addEventListener("click", () => {
  sidebar.classList.add("open");
  scrim.classList.add("visible");
});
function closeMenu() {
  sidebar.classList.remove("open");
  scrim.classList.remove("visible");
}
document.getElementById("closeSidebar")?.addEventListener("click", closeMenu);
scrim?.addEventListener("click", closeMenu);
document.getElementById("year").textContent = new Date().getFullYear();
