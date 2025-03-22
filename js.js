// localStorage.setItem('name', 'John');

// let ism = localStorage.getItem('name');
// localStorage.removeItem('name');


// let user = {ism: 'omatbek', yosh: 20};
// localStorage.setItem('user', JSON.stringify(user))    

 // Sayt yuklanganda saqlangan ismini chiqarish







//  window.onload = function() {
//     let savedName = localStorage.getItem("name");
//     if (savedName) {
//         document.getElementById("savedName").innerText = savedName;
//     }
// };

// // Ismni localStorage ga saqlash
// function saveName() {
//     let name = document.getElementById("nameInput").value;
//     localStorage.setItem("name", name);
//     document.getElementById("savedName").innerText = name;
// };

// // Ismni o'chirish
// function clearName() {
//     localStorage.removeItem("name");
//     document.getElementById("savedName").innerText = "";
// };
// let save = document.getElementById("save");
// let delet = document.getElementById("delet");
// window.onload = function() {
//     let savedName = localStorage.getItem("name");
//     if (savedName) {
//         document.getElementById("SavedItem").innerText = savedName;
//     }
// };

// save.addEventListener('click',()=> {
//     let name = document.getElementById('inputValu').value;
//     localStorage.setItem('name', name);
//     document.getElementById('SavedItem').innerText = name;
// })


// delet.addEventListener('click', ()=> {
//     localStorage.removeItem('name');
//     document.getElementById('SavedItem').innerText = "";
//     document.getElementById('inputValu').value = "";
// })
// let x = localStorage.setItem('name', 'salim')
// let y = localStorage.getItem('name')


// let save = document.getElementById('save');
// let del = document.getElementById('del');
// let Input =  document.getElementById('Input')

// save.addEventListener('click', function() {
//     localStorage.setItem('name', Input.value);
//     let saved = localStorage.getItem('name')
//     if (saved) {
//         let x = document.getElementById('Value').innerHTML = saved;
//     }
//     Input.value = ""
// })
// del.addEventListener('click', function() {
//     localStorage.removeItem('name')
//     document.getElementById('Value').innerText = "";
//     Input.value = ""
// })
// document.body.addEventListener('keydown', function(event) {
//     if (event.key == 'Enter') {
//         localStorage.setItem('name', Input.value);
//         let saved = localStorage.getItem('name');
//         if (saved) {
//             document.getElementById('Value').innerText = saved;
//         }
//         Input.value = ""
//     };
// });
// document.body.addEventListener('keydown', function(event) {
//     if (event.key === 'Escape') {
//          localStorage.removeItem('name');
//          document.getElementById('Value').innerText = "";
//         Input.value = "";
//     };
// });



// ctx.fillStyle = 'red'

// ctx.fillRect(50, 50, 100, 100)

// ctx.beginPath();
// ctx.moveTo(200, 200)
// ctx.lineTo(300, 150)
// ctx.strokeStyle = 'green'
// ctx.lineWidth = 5
// ctx.stroke()

// ctx.beginPath();
// ctx.arc(200, 100, 40, 0, Math.PI * 2);
// ctx.fillStyle = 'blue'
// ctx.fill()
// let mycanvas = document.getElementById('MyCanvas');

// let ctx = mycanvas.getContext('2d');

// let x = 50;
// let dx = 2;


// function draw() {
//     ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);
//     ctx.beginPath();
//     ctx.arc(x, 100, 20, 0, Math.PI * 2);
//     ctx.fillStyle = 'blue';
//     ctx.fill();

//     x += dx;

//     if (x > mycanvas.width - 20 || x < 20) {
//         dx = -dx
//     }

//     requestAnimationFrame(draw)
// }

// let canvas = document.getElementById("ballCanvas");
// let ctx = canvas.getContext("2d");

// let x = 50, y = 50, dx = 3, dy = 3, radius = 20;

// function drawBall() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height); // Oldingi tasvirni o‘chirish

//   ctx.beginPath();
//   ctx.arc(x, y, radius, 0, Math.PI * 2);
//   ctx.fillStyle = "red";
//   ctx.fill();

//   x += dx;
//   y += dy;

//   if (x + radius > canvas.width || x - radius < 0) {
//     dx = -dx;
//   }
//   if (y + radius > canvas.height || y - radius < 0) {
//     dy = -dy;
//   }

//   requestAnimationFrame(drawBall);
// }

// drawBall(); // Animatsiyani boshlash

// OOP - Very important --lesson.


class Avtomobil {
  constructor(nomi, tezligi) {
    this.nomi = nomi;
    this.tezligi = tezligi;
  };

  tezlashtirish() {
    this.tezligi += 10;
    console.log(`${this.nomi} tezligi ${this.tezligi} km/h ga oshirildi`);
  };
  sekinlashtirish() {
    this.tezligi -= 20;
    console.log(`${this.nomi} tezligi ${this.tezligi} km/h`);
  };
};
const bmw = new Avtomobil('BMW', 362);
bmw.tezlashtirish();
bmw.sekinlashtirish();


class Telefon {
  constructor(brand, nom) {
    this.brand = brand;
    this.nom = nom;
  };
};
const telefon = new Telefon('Iphone', '13');
console.log(telefon);
