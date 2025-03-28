const list = document.getElementById('slider_list')
const dots = document.querySelectorAll('.dot');
const sliders = document.getElementById('slider');

const slide1 = document.getElementById('item1')
const slide2 = document.getElementById('item2')
const slide3 = document.getElementById('item3')

window.addEventListener('resize',(e) => {
    
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width>1020){
        slide1.src='/img/slider-bg-main@2x.jpg'
        slide2.src='/img/slider-bg-man@2x.jpg'
        slide3.src='/img/slider-bg-girl@2x.jpg'
    }else if (width < 360){
        slide1.src='/img/slider-bg-main-phone@2x.jpg'
        slide2.src='/img/slider-bg-man-phone@2x.jpg'
        slide3.src='/img/slider-bg-girl-phone@2x.jpg'
    }
    else {
        slide1.src='/img/slider-bg-main@1x.jpg'
        slide2.src='/img/slider-bg-man@1x.jpg'
        slide3.src='/img/slider-bg-girl@1x.jpg'
    }
    right()
});

let currentSlide = 1;

const right = ()=>{
    currentSlide = (currentSlide + 1) % 3;
    list.style.left =-((sliders.offsetWidth+sliders.offsetLeft*2+40)*currentSlide)+ 'px'
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active')
}
right()
setInterval(right, 4000);


dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        list.style.left =-((sliders.offsetWidth+sliders.offsetLeft*2+40)*currentSlide)+ 'px'
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentSlide].classList.add('active');
    })
 });