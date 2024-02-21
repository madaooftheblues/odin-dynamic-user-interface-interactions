import slider from './modules/slider.js'
import './styles.css'
const imagesContext = require.context('./assets/hero-slider', false, /\.jpeg$/)

const images = imagesContext.keys().map((image) => imagesContext(image))

const heroSlider = document.getElementById('hero-slider')
const nextBtn = document.getElementById('slider-next')
const prevBtn = document.getElementById('slider-prev')

const imageElms = images.map((image) => {
    const imageElm = new Image()
    imageElm.src = image
    heroSlider.append(imageElm)
    return imageElm
})
console.log(slider)
imageElms[0].classList.add('selected')

slider.populate(imageElms)

nextBtn.addEventListener('click', () => {
    slider.current().classList.remove('selected')
    slider.next()
    slider.current().classList.add('selected')
})
prevBtn.addEventListener('click', () => {
    slider.current().classList.remove('selected')
    slider.prev()
    slider.current().classList.add('selected')
})
