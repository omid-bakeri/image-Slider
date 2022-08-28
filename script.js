"use strict";

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const buttonRight = document.querySelector(".slider__btn--right");
const buttonLeft= document.querySelector(".slider__btn--left");

let currentSlide = 0 ;
let maxSlide = slides.length ;
console.log(maxSlide)

slides.forEach((slide___slides , i)=>slide___slides.style.transform = `translateX(${80 * i}%)`);

buttonRight.addEventListener('click' , ()=>{
    if(currentSlide === maxSlide-1){
        currentSlide=0 ;
    }
    else{
        currentSlide++;
    }
    slides.forEach((slide___slides , i)=>slide___slides.style.transform = `translateX(${80 * (i-currentSlide)}%)`)
})

buttonLeft.addEventListener('click' , ()=>{
    if(currentSlide === 0){
        currentSlide=maxSlide-1 ;
    }
    else{
        currentSlide--;
    }
    slides.forEach((slide___slides , i)=>slide___slides.style.transform = `translateX(${80 * (i-currentSlide)}%)`)
})

