//webP

function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
testWebP(function (support) {
    
if (support == true) {
document.querySelector('body').classList.add('webp');
}else{
document.querySelector('body').classList.add('no-webp');
}
});
//Header nav


$('.main-header__burger').on('click', function(){
    $('.main-header__nav').toggleClass('main-header__nav--active');
    $('.main-header__burger').toggleClass('main-header__burger--active');
    $('body').toggleClass('not-overflow');
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        $('.main-header__nav').removeClass('main-header__nav--active');
        $('.main-header__burger').removeClass('main-header__burger--active');
        $('body').removeClass('not-overflow');
    });
    $('.main-header__link').removeClass('main-header__link--active');
});

let menuHeight = document.querySelector('.main-header__header').scrollHeight;
let activHeader = document.querySelector('.main-header__wrapper').scrollHeight;
$(window).scroll(function(){
    if ( $(this).scrollTop() > (activHeader - menuHeight)) {
        $('.main-header__header').addClass('_nav-activ');
    } else {
        $('.main-header__header').removeClass('_nav-activ');
    }
});

$(document).ready(function(){
        $("#menu").on("click","a", function (event) {
            event.preventDefault();
            let id  = $(this).attr('href'),
                top = $(id).offset().top - menuHeight*0.8;
            $('body,html').animate({scrollTop: top}, 500);
        });
});

$('#menu').on('click', 'a', function (){
    $(this).addClass('main-header__link--active');
    $('.main-header__link').not($(this)).removeClass('main-header__link--active');
});



//slider

$('.comments__slider').slick({
    arrows:true, // наличие стрелок
    dots:false,  // наличие кнопок
    slidesToShow: 1, // показ слайдов за раз
    slidesToScroll: 1, // пролистывание слайдов за раз
    speed: 1000,   // скорость пролистывания
    cssEase: 'ease', // тип анимации перелистывания
    invinite: false, // бесконечный слайдер
    autoplay: true, // автоматическое перелистывание
    autoplaySpeed: 2000, // время автоматического перелистывания
    adaptiveHeight: true // адаптация высоты слайдера под слайд (.slick-track {alin-item:flex-start})
});

//scroll

$('.we-do__item-header').click(function(){
    let spollerHeader = $('.we-do__item-header');

    $(this).toggleClass('we-do__item-header--active');
    spollerHeader.not($(this)).removeClass('we-do__item-header--active');

});

//map

let mapActive = document.querySelector('.map');
let mapHeader = document.querySelector('.map__header');
let mapPopap = document.querySelector('.map-popap__bg');
let mapClouse = document.querySelector('.map-popap__close');

mapHeader.addEventListener('click', function() {
    mapActive.classList.add('map--active');
});
mapPopap.addEventListener('click', function(){
    mapActive.classList.remove('map--active');
});
mapClouse.addEventListener('click', function(){
    mapActive.classList.remove('map--active');
});
//global-anim

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(){
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;


            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            }else {
                if (!animItem.classList.contains('_anim-no-hiden')){
                    animItem.classList.remove('_active'); 
                }
            }
        }
    }
    function offset(el) {
        var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }


    setTimeout(() => {
        animOnScroll();
    }, 300);
}









