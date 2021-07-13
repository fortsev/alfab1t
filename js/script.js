let slides = document.querySelectorAll('.top-slider .top-slider-item');
let slide_num = 0;
let slider_block = document.getElementsByClassName('top-slider');
slider_block.style.height = '300px';

function nextSlide() {
    slides[slide_num].className = 'top-slider-item';

    if (slide_num + 1 === slides.length) {
        slide_num = 0;
    } else {
        slide_num = slide_num + 1;
    };

    slides[slide_num].className = 'top-slider-item active'
}

function prevSlide() {
    slides[slide_num].className = 'top-slider-item';
    if (slide_num - 1 < 0) {
        slide_num = slides.length - 1;
    } else {
        slide_num = slide_num - 1;
    };
    slides[slide_num].className = 'top-slider-item active';
}