document.addEventListener('DOMContentLoaded', function() {
  // Menu Responsivo
  const menuToggle = document.getElementById('menuToggle');
  const mainMenu = document.getElementById('mainMenu');
  
  menuToggle.addEventListener('click', function() {
    mainMenu.classList.toggle('active');
    
    // Alternar ícone do menu
    const icon = menuToggle.querySelector('i');
    if (icon.classList.contains('fa-bars')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });
  
  // Fechar menu ao clicar em um link
  const menuLinks = document.querySelectorAll('#mainMenu a');
  menuLinks.forEach(link => {
    link.addEventListener('click', function() {
      mainMenu.classList.remove('active');
      menuToggle.querySelector('i').classList.remove('fa-times');
      menuToggle.querySelector('i').classList.add('fa-bars');
    });
  });
  
  // Animação de rolagem suave para os links de navegação
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Destacar link ativo no menu durante a rolagem
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav ul li a');
  
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (window.pageYOffset >= sectionTop - 100) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
});
