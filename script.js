let bg = document.querySelector("#bg")
let moon = document.querySelector("#moon")
let road = document.querySelector("#road")
let mountain = document.querySelector("#mountain")
let text = document.querySelector("#text")

window.addEventListener('scroll', function(){
    let movement = window.scrollY;

    bg.style.top = movement * 5 + 'px'
}
)
