//JS FILE


// const toFederation = document.querySelector('.toFederation')
const content_federation = document.querySelector('#content_federation')
const content = document.querySelector('.content')
const content_me = document.querySelector('#content_me')

let swiper

if (window.matchMedia("(max-width: 500px)").matches) {
    swiper = new Swiper(".mySwiper", {
        effect: "cards",
        grabCursor: true,
    });
} else {
    swiper = new Swiper(".mySwiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

function changeTab(to){
    const scroll = window.scrollY
    if(to === "me"){
        content.classList.add('slide_out_1')
        content_me.classList.add('slide_in_1')
        content_me.style.height = content.offsetHeight + "px"
    }else if(to === "federation"){
        content.classList.add('slide_out_1')
        content_federation.classList.add('slide_in_1')
        content_federation.style.height = content.offsetHeight + "px"
    }else{
        content.classList.remove('slide_out_1')
        content_federation.classList.remove('slide_in_1')
        content_me.classList.remove('slide_in_1')
    }
}