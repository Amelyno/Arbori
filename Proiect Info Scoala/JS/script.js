document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if(!isDropdownButton && e.target.closest("[data-dropdown]") != null) return

    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest("[data-dropdown]")
        currentDropdown.classList.toggle("active")
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove("active")
    })
})

const intrebare_ce = document.getElementById("intrebare-ce");
const informatie_ce = document.getElementById("informatie-ce");

intrebare_ce.addEventListener("click", function() {
    informatie_ce.style.opacity = 1;
});

const intrebare_cand = document.getElementById("intrebare-cand");
const informatie_cand = document.getElementById("informatie-cand");

intrebare_cand.addEventListener("click", function() {
    informatie_cand.style.opacity = 1;
});
const intrebare_cum = document.getElementById("intrebare-cum");
const informatie_cum = document.getElementById("informatie-cum");

intrebare_cum.addEventListener("click", function() {
    informatie_cum.style.opacity = 1;
});


