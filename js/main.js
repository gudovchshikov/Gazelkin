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
    speed: 300,
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
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
});