AppName.Modules.ThemeModule = (function () {
  //Dependencies
  var core = AppName.Core;

  //////////////////////
  // Private Methods //
  ////////////////////
  var _privateMethod = function () {
    // private stuff

    $(document).ready(function () {
      var swiper = new Swiper('.swiper-container', {
        // Default parameters
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
          576: {
            slidesPerView: 2,
            spaceBetween: 50,
          },

          992: {
            slidesPerView: 3,
            spaceBetween: 70
          },

          1300: {
            slidesPerView: 4,
            spaceBetween: 20
          }
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          dynamicBullets: 3,
          bulletElement: 'span',
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
          clickable: true,
        },

      });
    });
  };

  /////////////////////
  // Public Methods //
  ///////////////////
  var init = function () {
    _privateMethod();
  };

  return {
    init: init
  };
})();