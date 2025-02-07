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

let div = document.querySelector('.malumotnoma');
let btn = document.querySelector('.btn');
let btn2 = document.querySelector('.btn2');

btn.addEventListener('click', ()=> {
      div.classList.add('active')
      btn2.style.cssText = 'display: block';    
      btn.style.cssText = 'display: none'; 
})

btn2.addEventListener('click',()=> {
    div.classList.remove('active')
    btn.style.cssText = 'display: block';
    btn2.style.cssText = 'display: none';
} )