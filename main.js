const btnToggleNavbar = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar');
const search = document.getElementById('search-btn');
const cart = document.getElementById('cart-btn');

btnToggleNavbar.addEventListener('click', function() {
  if (navbar.style.display === 'none') {
    navbar.style.display = 'block';
    search.style.display = 'none';
    cart.style.display = 'none';
  } else {
    navbar.style.display = 'none';
  }
});
