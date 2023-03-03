const headerLang = document.querySelector('.language__selected');

headerLang.addEventListener('click', (event) => {


    let headerOpen = document.querySelector('.language__change');
    let headerWrapper = document.querySelector('.language__wrapper');


    headerOpen.classList.toggle('active');
    headerWrapper.classList.toggle('active');

})
  

// -------------- Slider -----------------


$('.reviews__items').slick({
    infinite: false,
    speed: 1000,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      },
    ]
});

