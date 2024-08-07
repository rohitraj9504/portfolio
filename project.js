// creating portfolio tabbed component//
const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");
p_btns.addEventListener("click", (e) => {
  const p_btn_clicked = e.target;
  console.log(p_btn_clicked);
  p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));

  p_btn_clicked.classList.add("p-btn-active");
  //find the  number in data//
  const btn_num = p_btn_clicked.dataset.btnNum;
  console.log(btn_num);

  const img_active = document.querySelectorAll(".p-btn--${btn_num}");

  p_img_elem.forEach((curElem) => curElem.classList.add("p-image-not-active"));
  img_active.forEach((curElem) =>
    curElem.classList.remove("p-image-not-active")
  );
});

// swippper here
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//  scroll to top button
const heroSection = document.querySelector(".header");
const footerElem = document.querySelector(".section-footer");
const scroollElement = document.createElement("div");

scroollElement.classList.add("scrollTop-style");

scroollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

footerElem.after(scroollElement);
const scrollTop = () => {
  heroSection.scrollIntoView({ behavior: "smooth" });
};
scroollElement.addEventListener("click", scrollTop);

//smooth scrolling effect
const portfolioSec = document.querySelector(".section-portfolio");
document.querySelector(".portfolio-link").addEventListener("click", () => {
  portfolioSec.scrollIntoView({ behavior: "smooth" });
});
const contactSec = document.querySelector(".section-contact");
document.querySelector(".contact-link").addEventListener("Click", () => {
  contactSec.scrollIntoView({ behavior: "smooth" });
});
const serviceSec = document.querySelector(".section-services");
document.querySelector(".service-link").addEventListener("click",() => { 
  serviceSec.scrollIntoView({ behavior : "smooth"});
});
const biosec = document.querySelector(".section-biodata");
document.querySelector(".about-link").addEventListener("click",() => { 
  biosec.scrollIntoView({ behavior : "smooth"});
});

