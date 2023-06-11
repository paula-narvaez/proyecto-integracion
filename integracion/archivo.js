document.addEventListener('DOMContentLoaded', function() {
    const userMenuToggle = document.querySelector('.user-menu-toggle');
    const userMenuDropdown = document.querySelector('.user-menu-dropdown');

    userMenuToggle.addEventListener('click', function() {
        userMenuDropdown.style.display = 'block';
    });

    userMenuToggle.addEventListener('blur', function() {
        userMenuDropdown.style.display = 'none';
    });

    userMenuDropdown.addEventListener('blur', function() {
        userMenuDropdown.style.display = 'none';
    });
});