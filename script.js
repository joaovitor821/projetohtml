function toggleMode() {
const html = document.documentElement

html.classList.toggle("light")
//f(html.classList.contains('light')) {
//    html.classList.remove('light')
//} else {
//html.classList.add('light')
//}
const img = document.querySelector("#profile img")

if(html.classList.contains('light')) {
img.setAttribute('src', './assets/joaolight.png')
} else {
 img .setAttribute('src', './assets/joao.png')
}

}