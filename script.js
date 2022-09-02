'use stric'

const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right')
const btnScroll = document.querySelector('#scroll')
const animal = document.querySelector('#animal');
const navBar = document.querySelector('nav');

const slide1 = document.querySelector('.slide1');
const slide2 = document.querySelector('.slide2');
const slide3 = document.querySelector('.slide3');

let contador = 0;
animal.style.backgroundImage = "url('./img/Toucan.svg')";
navBar.style.backgroundColor = "#FE8E24";


const verify = function (){
    if(contador === 0){
        slide1.classList.add('show');
        btnLeft.classList.add('invisible')
        btnLeft.classList.remove('show');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        slide2.classList.remove('show');
        slide3.classList.remove('show');
        slide2.classList.add('invisible');
        slide3.classList.add('invisible');
        animal.style.backgroundImage = "url('./img/Toucan.svg')";
        navBar.style.backgroundColor = "#FE8E24";
    }else if (contador === 1){
        slide1.classList.add('invisible');
        slide1.classList.remove('show');
        slide3.classList.add('invisible');
        slide3.classList.remove('show');
        slide2.classList.add('show');
        slide2.classList.remove('invisible');
        btnLeft.classList.remove('invisible');
        btnLeft.classList.add('show');
        btnRight.classList.remove('invisible')
        btnRight.classList.add('show');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        animal.style.backgroundImage = "url('./img/lobo.svg')";
        navBar.style.backgroundColor = "#d39358";
    } else if (contador === 2){
        slide2.classList.add('invisible');
        slide2.classList.remove('show');
        slide3.classList.add('show');
        btnRight.classList.add('invisible')
        btnRight.classList.remove('show');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        animal.style.backgroundImage = "url('./img/arara.svg')";
        navBar.style.backgroundColor = "#2469fe";
    }
}

btnRight.addEventListener('click', function(){
    contador += 1;
    console.log(contador);
    verify();
})

btnLeft.addEventListener('click', function(){
    contador -= 1;
    console.log(contador);
    verify();
})

btnScroll.addEventListener('click', function(){
    window.scrollTo({ top: 950, behavior: 'smooth' });
})


let scrollTrigger = 300;

window.onscroll = function(){
    if(window.scrollY >= scrollTrigger){
        btnRight.style.backgroundColor = "#FE8E24";
        btnRight.style.borderRadius = "50px"
        btnRight.style.padding = "5px";
        btnLeft.style.backgroundColor = "#FE8E24";
        btnLeft.style.borderRadius = "50px"
        btnLeft.style.padding = "5px";
        btnScroll.style.display = "none"
    } else {
        btnRight.style.backgroundColor = "transparent";
        btnLeft.style.backgroundColor = "transparent";
        btnScroll.style.display = "block"
    }
}






