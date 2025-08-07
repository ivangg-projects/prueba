  const toggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu-s');
  let timeout;

  toggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Ocultar al hacer clic fuera del menú
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !toggle.contains(e.target)) {
      navMenu.classList.remove('active');
    }
  });

  // Ocultar tras 1 segundo si el ratón sale del menú
  navMenu.addEventListener('mouseleave', () => {
    timeout = setTimeout(() => {
      navMenu.classList.remove('active');
    }, 1000);
  });

  navMenu.addEventListener('mouseenter', () => {
    clearTimeout(timeout);
  });