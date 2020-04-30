var mySwiper = new Swiper ('.partners-container', {
  direction: 'horizontal',
  slidesPerView: 8,
  grabCursor: true,
  autoplay: {
    delay: 1500
  },

  // RESPONSIVENESS
  breakpoints: {
    1000: {
      slidesPerView: 8
    },
    600: {
      slidesPerView: 6
    },
    0: {
      slidesPerView: 4
    }
  }
})
