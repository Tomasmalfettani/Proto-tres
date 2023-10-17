window.addEventListener('scroll', function () {
    const header = document.getElementById('site-header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
