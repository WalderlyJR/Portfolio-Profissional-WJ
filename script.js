document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button');
    const closeMenuButton = document.getElementById('close-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (!menuButton || !closeMenuButton || !mobileMenu) {
        console.error('Elementos do menu não encontrados');
        return;
    }

    function openMenu() {
        mobileMenu.classList.remove('hidden-menu');
        mobileMenu.classList.add('show-menu');
    }

    function closeMenu() {
        mobileMenu.classList.remove('show-menu');
        mobileMenu.classList.add('hidden-menu');
    }

    menuButton.addEventListener('click', openMenu);
    closeMenuButton.addEventListener('click', closeMenu);

    document.querySelectorAll('.mobile-nav-links a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});
