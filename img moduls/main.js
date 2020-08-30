const galleryIMG = document.querySelectorAll('#galleryIMG')
const full = document.getElementById('fullscreen')
const newFull = document.getElementById('newFull')
const close = document.getElementById('close')

galleryIMG.forEach(item => {
    item.onclick = function () {
        full.style.display = "block"
        newFull.src = this.src
    }

})
close.onclick = function () {
    full.style.display = "none"

}