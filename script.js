const navLinks=document.querySelector(".nav-menu .nav-link");
const menuOpenButton=document.querySelector("#menu-open-button");
const menuCloseButton=document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click",()=>{
    //Toggle mobile new visibility
    document.body.classList.toggle("show-mobile-menu")
})
//close menu when clicking on close button
menuCloseButton.addEventListener("click",()=>menuOpenButton.click());

//close menu when the nav link is clicked
navLinks.forEach(link=>{
    link.addEventListener("click",()=>menuOpenButton.click());
});

// Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor:true,
    spaceBetween: 25,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    //Responsive breakpoints
    breakpoints:{
        0:{
            slidesPerView:1
        },
        768:{
            slidesPerView:2
        },
        1024:{
            slidesPerView:3
        }
    }
  });