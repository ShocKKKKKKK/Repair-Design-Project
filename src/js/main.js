// document.addEventListener('DOMContentLoaded', function (event) {
//   const modal = document.querySelector('.modal');
//   const modalBtn = document.querySelectorAll('[data-toggle=modal]');
//   const modalClose = document.querySelector('.modal__close')
//   const switchModal = () => {
//     modal.classList.toggle('modal--visible');
//   }
//   modalBtn.forEach(element => {
//     element.addEventListener('click', switchModal);
//   });

//   modalClose.addEventListener('click', switchModal);
// });


// Стрелка вверх
$(function () {
  function backToTop() {
    let topBtn = $('.to-top');

    $(window).on('scroll', () => {
      if ($(this).scrollTop() >= 50) {
        topBtn.fadeIn();
      } else {
        topBtn.fadeOut();
      }
    });

    topBtn.on('click', () => {
      $('html').animate({
        scrollTop: 0
      }, 1000);
    });
  }
  backToTop();
  // Стрелка вверх


  // модальное окно
  var modal = $('.modal'),
    modalBtn = $('[data-toggle=modal]'),
    closeBtn = $('.modal__close');

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  $(document).mouseup(function (event) {
    if (modal.is(event.target)) {
      modal.toggleClass('modal--visible');
    }
  });
  // модальное окно

  var sliderWidthNext = $('.swiper-button-next');
  var sliderWidthPrev = $('.swiper-button-prev');
  var sliderBulets = $('.swiper-pagination');
  sliderWidthNext.css('left', sliderWidthPrev.width() + 30 + sliderBulets.width() + 30);
  sliderBulets.css('left', sliderWidthPrev.width() + 30);
});


// swiper
var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});