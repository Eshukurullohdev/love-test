let bars = document.querySelector(".fa-bars");
let xmark = document.querySelector(".fa-xmark");
console.log(xmark);
let menu = document.querySelector('.menu')

bars.addEventListener('click', function () {
    menu.style.transform = 'translateX(0)';
    menu.style.transition = 'all 0.5s ease-in-out';
})

xmark.addEventListener('click', function () {
    menu.style.transform = 'translateX(-300px)';
    menu.style.transition = 'all 0.5s ease-in-out';
})

