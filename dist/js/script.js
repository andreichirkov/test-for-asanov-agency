// $('.carousel__inner').slick({
//   dots: false,
//   infinite: true,
//   speed: 300,
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   prevArrow: '<button type="button" class="slick-prev"><img src="../img/aside/icon/arrow-circle-left.svg"></button>',
//   nextArrow: '<button type="button" class="slick-next"><img src="../img/aside/icon/arrow-circle-right.svg"></button>',
//   responsive: [
//     {
//       breakpoint: 1025,
//       settings: {
//         slidesToShow: 4,
//         slidesToScroll: 1,
//       }
//     },
//     {
//       breakpoint: 992,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 1
//       }
//     },
//     {
//       breakpoint: 769,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1
//       }
//     },
//     {
//       breakpoint: 577,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//   ]
// });


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

  // const buyButton = document.querySelector('.products__btn')
  // buyButton.addEventListener('click', function delButton(e) {
  //   e.event.parentNode.removeChild(this)
  // })
  $('.products__btn').click(function(e) {
    // console.log(this)
    // $(this).remove();
    // console.log(this)

    // $('.products__buy').innerHTML(`<div class="toggleBtn">
    //                     <div class="toggleBtn-minus"></div>
    //                     <div class="toggleBtn-counter">99</div>
    //                     <div class="toggleBtn-plus"></div>
    //                   </div>`)
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












