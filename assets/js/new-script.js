document.addEventListener("DOMContentLoaded", function () {
    let cards = document.querySelectorAll(".expandable-card");

    cards.forEach(function (card) {
        card.addEventListener("click", function () {
            let content = card.querySelector(".card-content");
            let icon = card.querySelector(".icon");

            if (content.classList.contains("d-none")) {
                content.classList.remove("d-none");
                card.classList.add("expanded");
                icon.classList.replace("fa-minus", "fa-plus"); // Change to plus
            } else {
                content.classList.add("d-none");
                card.classList.remove("expanded");
                icon.classList.replace("fa-plus", "fa-minus"); // Change to minus
            }
        });
    });

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});