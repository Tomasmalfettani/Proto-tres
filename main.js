document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.bi-list');
    const menuOverlay = document.querySelector('.menuOverlay');

    menuIcon.addEventListener('click', function () {
        menuOverlay.classList.toggle('open');
    });

    menuOverlay.addEventListener('click', function (event) {
        if (event.target === menuOverlay) {
            menuOverlay.classList.remove('open');
        }
    });
});