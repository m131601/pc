document.querySelector('button').addEventListener('click', () => {
    alert('Thank you! We will get in touch soon.');
});
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.style.display = navbar.style.display === 'flex' ? 'none' : 'flex';
}
