// ClassList 
//Methods
// Toggle -- ham qoshadi ham olib tashledi
// Add -- qoshish
// Remove -- ayrish
// function()  -- ()=>
// let btn = document.querySelector('.btn');
// let ayrish = document.querySelector('.ayrish');

// btn.addEventListener('click',()=> {
//     document.body.classList.add('active');
// });

// ayrish.addEventListener('click', ()=> {
//     document.body.classList.remove('active')
// });


// function Velisipet() {
//     document.body.classList.add('active');
// }

// function ayrishFunc() {
//     document.body.classList.remove('active');
// }


let btn = document.querySelector('.btn')
let xmark = document.querySelector('.xmark')
let menu = document.querySelector('.menu')

btn.addEventListener('click', ()=> {
    menu.style.cssText = 'transform: translateX(0); transition: 1s;'
})

xmark.addEventListener('click', ()=> {
    menu.style.cssText = 'transform: translateX(-300px); transition: 1s;'
})