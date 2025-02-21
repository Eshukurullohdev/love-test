// const btn = document.querySelector('.btn');
// const container = document.querySelector('.container');
// document.addEventListener('mousemove', (e) => {
//    let yangiDiv = document.createElement('div');
//    document.body.appendChild(yangiDiv);
//    yangiDiv.classList.add('container');
//    yangiDiv.style.left = e.clientX + 'px';
//    yangiDiv.style.top = e.clientY + 'px';
// });

// let btn = document.querySelector('.btn');

// let hexColur = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// btn.addEventListener('click', () => {
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         let random = Math.floor(Math.random() * hexColur.length);
//         color += hexColur[random];
//         console.log(color);
//     }
//     document.body.style.backgroundColor = color;
// });

// document.body.addEventListener('keydown', (e) => {
//     if (e.key === 'h') {
//             let color = '#';
//             for (let i = 0; i < 6; i++) {
//                 let random = Math.floor(Math.random() * hexColur.length);
//                 color += hexColur[random];
//             }
//             let yangiDiv = document.createElement('div');
//             document.body.appendChild(yangiDiv);
//             yangiDiv.classList.add('container');
//             yangiDiv.style.left = e.clientX + 'px';
//             yangiDiv.style.top = e.clientY + 'px';
//             yangiDiv.style.backgroundColor = color;
//     };
// });
// });

// Client X, Y.



// Javascriptda Elementlar yaratish.
//Apendchild -- Ozini ichiga bola qilib oladi

// let yangiDiv = document.createElement('div');
// document.body.appendChild(yangiDiv);
// yangiDiv.style.width = '100px';
// yangiDiv.style.height = '100px';
// yangiDiv.style.backgroundColor = 'red';

// let btn =  document.querySelector('.btn');
// let xmark = document.querySelector('.xmark');   

// btn.addEventListener('click', function() {
//     let yangiDiv = document.createElement('div');
//     document.body.appendChild(yangiDiv);
//     yangiDiv.style.width = '100px';
//     yangiDiv.style.height = '100px';
//     yangiDiv.style.backgroundColor = 'red';
//     yangiDiv.style.borderRadius = '50%';
// });

// xmark.addEventListener('click', function() {
//     let lastDiv = document.querySelector('div');
//     document.body.removeChild(lastDiv);
// });

// let btn = document.querySelector('.btn');
// //SetTimeout --- siz aytgan vaqtda ishlaydi
// //SetInterval --- u tohtovsiz ishlab ketoradi
// //ClearInterval -- Timeoutni tozalab tashlaydi

// // setTimeout(()=>  {
// //     console.log('Hello');
// // }, 3000)


// // function bosdim() {
// //     setTimeout(()=> {
// //         console.log('salom'); 
// //     }, 2000);
// // }

// setInterval(()=> {
//     console.log('salom');
// }, 2000)


// let sanash = 0;

// let interval = setInterval(()=> {
//     console.log("Ishlamoqda...."); 
//     sanash++;
//     if (sanash == 5) {
//         clearInterval(interval);
//         console.log("Tohtadi!");
//     }
// }, 1000);


let btn =  document.querySelector('.btn');
let menu = document.querySelector('.menu')

btn.addEventListener('click', ()=> {
    menu.classList.toggle('active')
})