
  // Get all nav links
  const navLinks = document.querySelectorAll('nav ul.nav-list li a');

  // Get current page filename (e.g., about.html)
  const currentPage = window.location.pathname.split("/").pop();

  navLinks.forEach(link => {
    // Check if href matches current page
    const hrefPage = link.getAttribute('href');
    if (hrefPage === currentPage) {
      link.classList.add('active');
    }
  });

