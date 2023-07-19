let bg = document.querySelector("#bg")
let moon = document.querySelector("#moon")
let road = document.querySelector("#road")
let mountain = document.querySelector("#mountain")
let text = document.querySelector("#text")

window.addEventListener('scroll', function(){
    let movement = window.scrollY;

    bg.style.top = movement * 0.5 + 'px'
    moon.style.left = - movement * 1 + 'px'
    mountain.style.top = - movement * 0.15 + 'px'
    road.style.top =  movement * 0.15 + 'px'
    text.style.top =  movement * 1 + 'px'
}
)
