function openNav(){
    document.getElementById("side-list").style.width="250px";
}
function closeNav(){
    document.getElementById("side-list").style.width="0";
}
document.getElementById("nav-close").addEventListener("click", closeNav);
document.getElementById("nav-open").addEventListener("click", openNav);