window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.aside')
  const menuItem = document.querySelectorAll('.navbar__item')
  const hamburger = document.querySelector('.burger')

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('burger_active');
    menu.classList.toggle('aside-active');
  });

  menuItem.forEach(item => {
    item.addEventListener('click', () => {
      hamburger.classList.toggle('burger_active');
      menu.classList.toggle('header__nav_active');
    })
  })
})



$('.navbar__item').on('click', function() {

  var answ = $(this).next()


  answ.slideToggle(300)
  $('.aboutMobile__item__image').toggleClass('aboutMobile__item__image-open')
})


$('.aboutMobile__item__wrap').on('click', function() {

  $(this).next().slideToggle(300)


  $('.aboutMobile__item__image, this').toggleClass('aboutMobile__item__image-open')
})



document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '.splide', {
    autoWidth: true,
    pagination: false,
    type: 'loop',
    breakpoints: {
      992: {
        perPage: 2,
        perMove: 1
      },
    }
  }).mount();

  $('.products__btn').click(function(e) {

    var theDiv = document.createElement('div')
    theDiv.className = "toggleBtn"

    theDiv.innerHTML = `<div class="toggleBtn-minus"></div>
                        <div class="toggleBtn-counter">99</div>
                        <div class="toggleBtn-plus"></div>
                        `

    $(this).parent().append(theDiv)
    $(this).remove();
  });


});


















// $('.aboutMobile__item__wrap').on('click', function() {
//
//   e.preventDefault();
//   var $this = $(this);
//
//   $this.next().slideToggle();
// })












