burger = document.querySelector('.burger');
navmenu = document.querySelector('.nav-menu');
burger.addEventListener('click',()=>{
  navmenu.classList.toggle('v-class');
})
const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        clickable:true,
      el: '.swiper-pagination',
    },
  });