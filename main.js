let bars = document.querySelector(".fa-bars");
let x = document.querySelector(".menu button");
let menu = document.querySelector(".menu");
let sun = document.querySelector(".fa-sun");
let moon = document.querySelector(".fa-moon");
bars.addEventListener('click', function() {
   menu.style.cssText = "transform: translateX(0); transition: all 0.5s ease;);";
})
x.addEventListener('click', function()  {
    menu.style.cssText = "transform: translateX(-300px); transition: all 0.5s ease;";
})

moon.addEventListener('click', function()  {
    document.body.style.cssText = "background-color: rgb(15, 14, 14); color: white; transition: all 0.5s ease;"
    moon.style.cssText = " transform: scale(1.5); transition: all 0.5s ease;";
    sun.style.cssText = "color: yellow; transition: all 0.5s ease;";
})
sun.addEventListener('click', function()  {
    document.body.style.cssText = "background-color: white; transition: all 0.5s ease;";
    sun.style.cssText = "transform: scale(1.5); transition: all 0.5s ease;";
})

