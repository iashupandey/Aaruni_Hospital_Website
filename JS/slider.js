const swiper = new Swiper('.swiper', {

    autoplay: {
        display: 3000,
        disableOnInteraction: false,
  
    },
  
    loop: true,
  
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
  
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  });
  function myFunction(x) {
    x.classList.toggle("change");
  }
   