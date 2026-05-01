/* =========================================
   nav.js — Navegación entre páginas
   ========================================= */

/**
 * Muestra la página indicada y marca el link activo en el navbar.
 * @param {string} pageId  - id de la sección a mostrar
 * @param {Element} linkEl - elemento <a> que se activó
 */
function showPage(pageId, linkEl) {
  // Ocultar todas las páginas
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

  // Desactivar todos los links
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));

  // Mostrar página objetivo
  const target = document.getElementById(pageId);
  if (target) target.classList.add('active');

  // Marcar link activo
  if (linkEl) linkEl.classList.add('active');
}

// Inicializar: mostrar página de inicio al cargar
document.addEventListener('DOMContentLoaded', () => {
  showPage('home', document.querySelector('.nav-links a[data-page="home"]'));
});
