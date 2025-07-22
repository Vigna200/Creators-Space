const toggleNav = () => {
    var navLinks = document.querySelector(".nav-links");
    var bargerLogo = document.querySelector("#navbar-barger-logo");
    var crossLogo = document.querySelector("#navbar-x-logo");
    navLinks.classList.toggle("active");

    crossLogo.classList.toggle('d-none');
    bargerLogo.classList.toggle('d-none');
}