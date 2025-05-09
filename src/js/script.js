
//MENU
let menu = document.querySelector(".sandbar");

let navbar = document.querySelector(".nav-items");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
    navbar.classList.toggle("active");
};

window.onscroll = () => {
    navbar.classList.remove("active");
};


//PRELOAD
var i = setInterval(function () {
    clearInterval(i);
    
    document.getElementById("loading").style.display = "none";
    document.getElementById("content").style.display = "block";

}, 2000);







