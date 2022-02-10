const carouselSlide = document.querySelector(".slides");
const carouselImages = document.querySelectorAll(".slides image");

//Buttons
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

//Conter
let counter = 1;
const size = carouselImages[0].clientWidth;
carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
