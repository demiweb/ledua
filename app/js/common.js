var allLazyLoad = [...document.querySelectorAll('.lazyload')];

function allLozadImg() {
    allLazyLoad.forEach((el) => {
        var observer = lozad(el);
        observer.observe();
        el.addEventListener('load', () => {
            el.classList.add('is-loaded')
        })

    })
}

allLozadImg();


let homeSlider = [...document.querySelectorAll('.home-slider__wrapper')];

function startHomeSlider() {
    if (!homeSlider.length) {

    } else {


        homeSlider.forEach((sld) => {
            let sldCont = sld.querySelector('.swiper');
            let sldNext = sld.querySelector('.slider-btn--next');
            let sldPrev = sld.querySelector('.slider-btn--prev');
            let pagin = sld.querySelector('.dots');
            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                slidesPerView: 1,
                slidesPerGroup: 1,
                speed: 700,
                centeredSlides: false,
                touchRatio: 1,
                touchAngle: 160,
                simulateTouch: true,
                freeMode: false,

                followFinger: true,
                allowTouchMove: true,
                threshold: true,
                touchMoveStopPropagation: true,
                touchStartPreventDefault: true,
                touchStartForcePreventDefault: true,
                touchReleaseOnEdges: true,

                resistance: true,
                resistanceRatio: 0.3,
                cssMode: true,
                autoplay: {
                    delay: 3400,
                },
                spaceBetween: 7,

                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                pagination: {
                    el: pagin,
                    type: 'bullets',
                    bulletClass: 'single-dot',
                    clickable: true,
                    bulletActiveClass: 'active',


                },


            });


        })

    }
}

startHomeSlider();


let rowSlider = [...document.querySelectorAll('.row-products')];

function startRowSlider() {
    if (!rowSlider.length) {

    } else {


        rowSlider.forEach((sld) => {
            let sldCont = sld.querySelector('.swiper');
            let sldNext = sld.querySelector('.slider-btn--next');
            let sldPrev = sld.querySelector('.slider-btn--prev');

            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                effect: 'slide',
                slidesPerView: 1,
                slidesPerGroup: 1,
                speed: 700,
                centeredSlides: false,
                touchRatio: 1,
                touchAngle: 180,
                simulateTouch: true,

                followFinger: true,
                allowTouchMove: true,
                threshold: true,
                touchMoveStopPropagation: true,
                touchStartPreventDefault: true,
                touchStartForcePreventDefault: true,
                touchReleaseOnEdges: true,

                resistance: true,
                resistanceRatio: 0.3,
                cssMode: true,


                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                autoplay: false,
                spaceBetween: 15,
                breakpoints: {
                    600: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    767: {
                        slidesPerView: 3,
                        spaceBetween: 14,
                    },
                    1150: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1600: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    }
                },


            });


        })

    }
}

startRowSlider();


let rowNews = [...document.querySelectorAll('.row-news__slider')];

function startNewsSlider() {
    if (!rowNews.length) {

    } else {


        rowNews.forEach((sld) => {
            let sldCont = sld.querySelector('.swiper');
            let sldNext = sld.querySelector('.slider-btn--next');
            let sldPrev = sld.querySelector('.slider-btn--prev');

            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                effect: 'slide',
                slidesPerView: 1,
                slidesPerGroup: 1,
                speed: 700,
                centeredSlides: false,
                touchRatio: 1,
                touchAngle: 180,
                simulateTouch: true,

                followFinger: true,
                allowTouchMove: true,
                threshold: true,
                touchMoveStopPropagation: true,
                touchStartPreventDefault: true,
                touchStartForcePreventDefault: true,
                touchReleaseOnEdges: true,

                resistance: true,
                resistanceRatio: 0.3,
                cssMode: true,


                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                autoplay: false,
                spaceBetween: 15,
                breakpoints: {
                    600: {
                        slidesPerView: 2,
                        spaceBetween: 14,
                    },
                    1000: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    }, 1450: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    }
                },


            });


        })

    }
}

startNewsSlider();

let newsSub = [...document.querySelectorAll('.sub-news')];

function startSubNews() {
    if (!newsSub.length) {

    } else {


        newsSub.forEach((sld) => {
            let sldCont = sld.querySelector('.swiper');
            let sldNext = sld.querySelector('.slider-btn--next');
            let sldPrev = sld.querySelector('.slider-btn--prev');

            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                effect: 'slide',
                slidesPerView: 1,
                slidesPerGroup: 1,
                speed: 700,
                centeredSlides: false,
                touchRatio: 1,
                touchAngle: 180,
                simulateTouch: true,

                followFinger: true,
                allowTouchMove: true,
                threshold: true,
                touchMoveStopPropagation: true,
                touchStartPreventDefault: true,
                touchStartForcePreventDefault: true,
                touchReleaseOnEdges: true,

                resistance: true,
                resistanceRatio: 0.3,
                cssMode: true,


                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                autoplay: false,
                spaceBetween: 15,
                breakpoints: {
                    600: {
                        slidesPerView: 2,
                        spaceBetween: 14,
                    },
                    1000: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    }, 1450: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    }
                },


            });


        })

    }
}

startSubNews();


let mainSlider = [...document.querySelectorAll('.product-page__slider')];

function startMainSlider() {
    if (!mainSlider.length) {

    } else {
        let charsSingle = [...document.querySelectorAll('.single-char')];
        let colorsSingle = [...document.querySelectorAll('.single-color')];

        mainSlider.forEach((sld) => {
            let sldCont = sld.querySelector('.product-slider .swiper');
            let sldNext = sld.querySelector('.slider-btn--next');
            let sldPrev = sld.querySelector('.slider-btn--prev');
            let sldThumb = sld.querySelector('.product-thumbs .swiper');


            var swiperThumb = new Swiper(sldThumb, {
                spaceBetween: 10,
                slidesPerView: 4,
                slidesPerGroup: 1,
                freeMode: false,
                watchSlidesProgress: true,
                direction: 'horizontal',
                centeredSlides: false,
                loop: false,
                draggable: true,


                touchRatio: 1,
                touchAngle: 160,
                simulateTouch: true,

                followFinger: true,
                allowTouchMove: true,
                threshold: true,
                touchMoveStopPropagation: true,
                touchStartPreventDefault: true,
                touchStartForcePreventDefault: true,
                touchReleaseOnEdges: true,

                resistance: true,
                resistanceRatio: 0.3,

                breakpoints: {

                    767: {
                        centeredSlides: false,
                        slidesPerView: 4,
                        slidesPerGroup: 1,
                        spaceBetween: 10,
                    },
                }

            });

            const swiper2 = new Swiper(sldCont, {
                // Optional parameters

                slidesPerView: 1,
                slidesPerGroup: 1,
                speed: 700,
                centeredSlides: false,
                touchRatio: 1,
                touchAngle: 160,
                simulateTouch: true,
                loop: false,

                followFinger: true,
                allowTouchMove: true,
                threshold: true,
                touchMoveStopPropagation: true,
                touchStartPreventDefault: true,
                touchStartForcePreventDefault: true,
                touchReleaseOnEdges: true,

                resistance: true,
                resistanceRatio: 0.3,
                cssMode: true,
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                autoplay: false,
                spaceBetween: 20,

                thumbs: {
                    swiper: swiperThumb,
                },

                pagination: false,


            });


        })

    }
}

startMainSlider();


//sliders


let controlFooter = [...document.querySelectorAll('.footer-control .footer-title')];

function controlingFooterDrop() {
    if (controlFooter.length) {
        controlFooter.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.footer-control').classList.toggle('open');
            })
        })
    }
}

controlingFooterDrop();


$(document).on('click', '.quantity__button--minus', function (e) {
    var t = $(this).next().find('input').val();
    t > 1 && $(this).next().find('input').val(+t - 1).trigger('change');

    return false;
});
$(document).on('click', '.quantity__button--plus', function (e) {
    var t = $(this).prev().find('input').val();
    $(this).prev().find('input').val(+t + 1).trigger('change');


    return false;
});


//telephones
let zero = '0';
let tls = [...document.querySelectorAll(".input-number input")];

var maskOptions = {
    mask: `{+38}(000)000-00-00`,
};


tls.forEach((tl) => {
    var mask = IMask(tl, maskOptions);
});

//zoom image

let imagesZoom = [...document.querySelectorAll('.product-slider .swiper img')];


function zoomImages() {
    if (imagesZoom.length) {
        if (window.innerWidth > 767) {
            var zoom_container_size = $( '.zoom-container').height();
            var zoom_area_size = 200;
            var zoom_radius = zoom_area_size / 2;


            $( '.product-slider .swiper img' ).mousemove(function(e) {
                // Show original picture
                var sr = this.src;
                var $original = $( '.zoom-container img');
                $original[0].src = this.src;
                var $container = $original.parent();
                $container.removeClass( 'hidden' );
                // Thumbnail
                var offset = $( this ).offset();
                var tX = e.pageX - offset.left;
                var tY = e.pageY - offset.top;
                // We stay inside the limits of the zoomable area
                tX = Math.max( zoom_radius, Math.min( $( this ).width() - zoom_radius, tX ) );
                tY = Math.max( zoom_radius, Math.min( $( this ).height() - zoom_radius, tY ) );
                // Ratios
                var ratioX = ( $original.width() - zoom_container_size) / ( $( this ).width() - zoom_area_size );
                var ratioY = ( $original.height() - zoom_container_size) / ( $( this ).height() - zoom_area_size );
                // Margin to be set in the original
                var moX = -Math.floor( ( tX - zoom_radius ) * ratioX );
                var moY = -Math.floor( ( tY - zoom_radius ) * ratioY );
                // Apply zoom efect
                $original.css( 'marginLeft', moX );
                $original.css( 'marginTop', moY );
                // Log values
            });

            $( '.product-slider .swiper img' ).mouseout(function(e) {
                var $original = $( '.zoom-container img');
                var $container = $original.parent();
                $container.addClass( 'hidden' );
            });
        }

    }
}

zoomImages();



