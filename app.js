let swiper = new Swiper('.mySwiper', {
  slidesPerView: 1.5,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const faq = document.querySelectorAll('.faq');
const faqAns = document.querySelectorAll('.faq-ans');
const btn = document.querySelectorAll('.arrow-btn');

faq.forEach((item) => {
  item.addEventListener('click', (event) => {
    item.classList.toggle('active');
  });
});
