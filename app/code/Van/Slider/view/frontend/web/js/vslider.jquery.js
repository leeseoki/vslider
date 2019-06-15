/*!
 * vSlider jQuery Plugin v0.0.1
 *
 * Copyright 2018, Van Pham
 *
 */

(function ($) {
    'use strict';
    $.fn.vslider = function (auto = true, interval = 5000) {
        if (this.length === 0) {
            return this;
        }

        if (this.length > 1) {
            this.each(function () {
                $(this).vslider(auto, interval);
            });
            return this;
        }

        let slidesCont = this.children('.slider__container');
        let slides = slidesCont.children('.slider-item');
        let arrowsCont = this.children('.slider__controls');
        let prevSlide = arrowsCont.children('.prev');
        let nextSlide = arrowsCont.children('.next');
        let slidesCount = slides.length;
        let currentSlide = slides.first();
        let currentSlideIndex = 1;

        let pagers = this.children('.slider__pagers');
        let dots = pagers.children('.dot');

        let autoPlay = null;

        slides.not(':first').css('display', 'none');
        currentSlide.addClass('active');
        dots.eq(currentSlideIndex-1).addClass('active');

        function goToNextSlide() {
            currentSlide.removeClass('active').fadeOut(700);
            dots.removeClass('active');

            if (currentSlideIndex === slidesCount) {
                currentSlide = slides.first();
                currentSlide.delay(500).addClass('active').fadeIn(700);
                currentSlideIndex = 1;
            } else {
                currentSlideIndex++;
                currentSlide = currentSlide.next();
                currentSlide.delay(500).addClass('active').fadeIn(700);
            }
            dots.eq(currentSlideIndex-1).addClass('active');
        }

        function goToPrevSlide() {
            currentSlide.removeClass('active').fadeOut(700);
            dots.removeClass('active');

            if (currentSlideIndex === 1) {
                currentSlide = slides.last();
                currentSlide.delay(500).addClass('active').fadeIn();
                currentSlideIndex = slidesCount;
            } else {
                currentSlideIndex--;
                currentSlide = currentSlide.prev();
                currentSlide.delay(500).addClass('active').fadeIn(700);
            }
            dots.eq(currentSlideIndex-1).addClass('active');
        }

        function jumpToSlideX(slideIndexToJump) {
            currentSlide.removeClass('active').fadeOut(700);
            dots.removeClass('active');

            currentSlideIndex = slideIndexToJump + 1;
            currentSlide = slides.eq(slideIndexToJump);
            currentSlide.delay(500).addClass('active').fadeIn(700);

            dots.eq(currentSlideIndex-1).addClass('active');
        }

        function playSlider() {
            clearInterval(autoPlay);

            if (auto === true)
                autoPlay = setInterval(function () {
                    goToNextSlide();
                }, interval);
        }

        $(nextSlide).click(function (e) {
            e.preventDefault();
            goToNextSlide();
            playSlider();
        });

        $(prevSlide).click(function (e) {
            e.preventDefault();
            goToPrevSlide();
            playSlider();
        });

        $( dots ).each(function() {
            $(this).on("click", function(){
                jumpToSlideX($(this).data('index'));
                playSlider();
            });
        });

        playSlider();
    };
}(jQuery));
