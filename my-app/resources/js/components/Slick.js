import 'slick-slider';
import {isEven} from "./_helpers";

export default class Slick {
    constructor() {
        this.init();
    }

    casesSliderInit() {
        $(document).find('.cases-items').each(function () {
            const $slider = $(this);
            var $prev = $(this).closest('section').find('.slick__prev');
            var $next = $(this).closest('section').find('.slick__next');
            $slider.slick({
                slidesToShow: 2,
                arrows: true,
                prevArrow: $prev,
                nextArrow: $next,
                responsive: [
                    {
                        breakpoint: 450,
                        settings: {
                            slidesToShow: 1,
                        }
                    },
                ]
            });
        });

    }

    reviewsSliderInit() {
        $(document).find('.reviews-slider').each(function () {
            const $slider = $(this);
            var $prev = $(this).closest('section').find('.slick__prev');
            var $next = $(this).closest('section').find('.slick__next');
            if($slider.find('>*').length < 3) return;
            $slider.slick({
                slidesToShow: 3,
                arrows: true,
                prevArrow: $prev,
                nextArrow: $next,
                responsive: [
                    {
                        breakpoint: 1025,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 670,
                        settings: {
                            slidesToShow: 1,
                        }
                    },
                ]
            });
        });

    }


    init() {
        this.casesSliderInit();
        this.reviewsSliderInit();
    }
}

