var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {

    700: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1035: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
////////////
var sidemenu = document.getElementById("sidemenu");

function openmenu(){
  sidemenu.style.right = "0";
}
function closemenu(){
  sidemenu.style.right = "-200px";
}
//////////////
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName('tab-contents');
function opentab(tabname){
  for(tablink of tablinks){
    tablink.classList.remove("active-link");
  }
  for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}
let scrolltop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
  scrolltop.classList.toggle("active", window.scrollY > 0);
});