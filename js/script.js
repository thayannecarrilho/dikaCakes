
//menu
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



//CARROSSEL

const imgsa = document.getElementById("imga")
const imga = document.querySelectorAll("#imga img")

let idx = 0;
function carrossel(){
    idx++;
    if(idx > imga.length - 1){
        idx = 0;
    }
    imgsa.style.transform = `translateX(${-idx * 12}rem)`;
} 
setInterval(carrossel, 1800);



const imgsb = document.getElementById("imgb");
const imgb = document.querySelectorAll("#imgb img");
let idb = 0;
function carrosselb(){
    idb++;
    if(idb > imgb.length - 1){
        idb = 0;
    }
    imgsb.style.transform = `translateX(${-idb * 12}rem)`;
}
setInterval(carrosselb, 1800);



const imgsc = document.getElementById("imgc");
const imgc = document.querySelectorAll("#imgc img");
let idc = 0;
function carrosselc(){
    idc++;
    if(idc > imgc.length - 1){
        idc = 0;
    }
    imgsc.style.transform = `translateX(${-idc *12}rem)`;
}
setInterval(carrosselc, 1800)



const imgsd = document.getElementById("imgd");
const imgd = document.querySelectorAll("#imgd img");
let id = 0;
function carrosseld(){
    id++;
    if(id > imgd.length - 1){
        id = 0;
    }
    imgsd.style.transform = `translateX(${-id *12}rem)`;
}
setInterval(carrosseld, 1800)





