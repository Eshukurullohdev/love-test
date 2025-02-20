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
//     }
// });
// });

// Client X, Y.

let box = document.querySelector('.box');

document.addEventListener('mousemove', (e) => {
    let x = e.clientX;
    let y = e.clientY;
    box.style.left = x + 10 + 'px';
    box.style.top = y + 10 +'px'
})

