const navTopo = document.getElementById("nav-topo");
const navLateral = document.getElementById("nav-lateral");
const hamburger = document.getElementById("menu-hamburger");
const btnMenuLateral = document.getElementById("btn-menu-lateral");

hamburger.addEventListener("click", function() {
    navLateral.classList.remove("ativo");
    navTopo.classList.toggle("ativo");
});

btnMenuLateral.addEventListener("click", function() {
    navTopo.classList.remove("ativo");
    navLateral.classList.toggle("ativo");
});
