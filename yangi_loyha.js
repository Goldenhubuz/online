// 3ta nuqta (hamburger menyu) tugmasini olish
const mobileMenu = document.getElementById('mobile-menu');

// Menyu elementlarini olish
const navLinks = document.querySelector('.sa');

// 3ta nuqta bosilganda menyuni ko'rsatish yoki yashirish
mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
