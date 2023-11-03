window.addEventListener('scroll', function () {
    const header = document.getElementById('site-header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Agregar un controlador de eventos al botón "Más Información"
document.querySelectorAll(".service-card button").forEach(function (button) {
    button.addEventListener("click", function (e) {
        e.preventDefault(); // Evita que el enlace redirija

        // Encuentra la capa adicional en la tarjeta actual
        const card = button.closest(".service-card");
        const additionalInfoOverlay = card.querySelector(".additional-info-overlay");

        // Muestra la capa adicional
        additionalInfoOverlay.style.display = "block";
    });
});

// Agregar un controlador de eventos al botón "Cerrar"
document.querySelectorAll(".service-card #close-info").forEach(function (closeButton) {
    closeButton.addEventListener("click", function () {
        // Encuentra la capa adicional en la tarjeta actual
        const card = closeButton.closest(".service-card");
        const additionalInfoOverlay = card.querySelector(".additional-info-overlay");

        // Oculta la capa adicional
        additionalInfoOverlay.style.display = "none";
    });
});
