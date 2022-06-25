const slides = document.getElementsByClassName('carousel-item')
const slideIndicatorContainer = document.querySelector('.slide-indicator')
let slidePosition = 0
const totalSlides = slides.length

const nextBtn =  document.getElementById('next-slide-btn').addEventListener('click', nextSlide)
const prevBtn =  document.getElementById('prev-slide-btn').addEventListener('click', prevSlide)




// Control Indicators
const indicators = []
if(slideIndicatorContainer !== null) {
    for(let i = 0; i < totalSlides; i++){
        const li = document.createElement('li')
        slideIndicatorContainer.appendChild(li)
        indicators.push(li)
    }
}

controlIndicators()

function controlIndicators() {
    indicators.forEach((el, i)=> {
        if(i === slidePosition){
            el.classList.add('highlighted')
            //highlight element
        }else{
            el.classList.remove('highlighted')
            //un-highlight el
        }
    })
}


// Slide Carousel Functions
function nextSlide() {
    hideSlides()
    if(slidePosition === totalSlides - 1) {
        slidePosition = 0
    }else{
        slidePosition++
    }
    controlIndicators()
    slides[slidePosition].classList.remove("carousel-item-hidden")
    slides[slidePosition].classList.add("carousel-item-visible")
    slides[slidePosition].classList.add('fadeInRight')
    setTimeout(()=> slides[slidePosition].classList.remove('fadeInRight'), 1000)
}

function prevSlide() {
    hideSlides()
    if(slidePosition === 0) {
        slidePosition = totalSlides - 1;
    }else{
        slidePosition--
    }
    controlIndicators()
    slides[slidePosition].classList.remove("carousel-item-hidden")
    slides[slidePosition].classList.add("carousel-item-visible")
    slides[slidePosition].classList.add('fadeInLeft')
    setTimeout(()=> slides[slidePosition].classList.remove('fadeInLeft'), 1000)
}

function hideSlides() {
    for(let slide of slides) {
        slide.classList.remove('carousel-item-visible')
        slide.classList.add('carousel-item-hidden')
    }
}
