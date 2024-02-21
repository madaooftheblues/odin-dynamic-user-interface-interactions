const slider = {
    images: [],
    idx: 0,

    populate(images) {
        slider.images = images
    },
    next() {
        if (slider.images.length === 0) return
        if (slider.images.length - 1 <= slider.idx) {
            slider.idx = 0
            return
        }
        slider.idx++
    },
    prev() {
        if (slider.images.length === 0) return
        if (slider.idx <= 0) {
            slider.idx = slider.images.length - 1
            return
        }
        slider.idx--
    },
    current() {
        if (slider.images.length === 0) return
        return slider.images[slider.idx]
    },
}

export default slider
