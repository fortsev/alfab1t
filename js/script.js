let slides = document.querySelectorAll('.top-slider .top-slider-item');
let slide_num = 0;
let slider_block = document.getElementsByClassName('top-slider');
/*slider_block.style.height = '300px';*/

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

function phoneValid() {
    let phoneInput = document.getElementById('phoneInput');
    let regex = /[a-zа-яё]/i;
    phoneInput.value = phoneInput.value.replace(regex, '');
}

document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = document.querySelector('.header-top-menu, .header-top-callback').offsetHeight;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

function phone_mask(){
    let inpMod = document.querySelector('#FormInputPhone');
    console.log(inpMod);
    inpMod.addEventListener('focus', _ => {
        if(!/^\+\d*$/.test(inpMod.value))
            inpMod.value = '+7';
    });
    inpMod.addEventListener('keypress', e => {
        if(!/\d/.test(e.key))
            e.preventDefault();
    });
}

phone_mask();