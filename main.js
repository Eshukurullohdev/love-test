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



// console.log(Math.floor(3.9));
// console.log(Math.floor(-5.8));
// console.log(Math.floor(-9.9));
// console.log(Math.floor(9));


// function roll() {
//     return Math.floor(Math.random() * 6);
// }
// console.log(roll());


// let fruits = [
    //     'kiwi', 'olma', 'nok', 'behi'
    // ]
// console.log(rolls(fruits));


// function rall() {
//     return Math.random() < 0.5;
// }

// console.log(rall());


// function getRandom() {
//     let r = Math.floor(Math.random() * 256)
//     let g = Math.floor(Math.random() * 256)
//     let b = Math.floor(Math.random() * 256)
//     return `rgb(${r},${g},${b})`
// }
// document.body.style.backgroundColor = getRandom();

// let hexColur = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// function getRandom() {
    //     let color = '#';
//     for(let x = 0; x < 6; x++) {
//         let random = Math.floor(Math.random() * hexColur.length);
//         color += hexColur[random];
//     }
//     return color;
// }
// let btn =  document.querySelector('.btn')

// btn.addEventListener('click', () => {
//     document.body.style.backgroundColor = getRandom();
// }),

//Math.floor --- qoldiqlarni olib tashleydi
//Math.ceil --- 
// Math.random --- tasodifiy son va hohlagan narsqiymatni tasodifiy korish.


// console.log(Math.floor(32.8));
// console.log(Math.floor(50.1));

// function salim() {
//         return Math.floor(Math.random() * 10 + 1)
//     }
//     console.log(salim());
    
// function rolls(r) {
//         let index = Math.floor(Math.random() * r.length);
//         return r[index];
//     }

// let fruits = [
//     'Nok', 'olma', 'olcha', 'tut'
// ];


// function meva(x) {
//     let index = Math.floor(Math.random() * x.length);
//     return x[index];
// }

// // btn.addEventListener('click', function() {
// //     console.log(meva(fruits));
// // })

// let btn =  document.querySelector('.btn')
// let hexColur = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// function getRandom() {
//     let color = '#'
//     for(let x = 0; x < 6; x++) {
//         let random = Math.floor(Math.random() * hexColur.length);
//         color += hexColur[random];
//     }
//     return color
// }
// btn.addEventListener('click', ()=> {
//     document.body.style.backgroundColor = getRandom();
// })


// function getRandom() {
//     let r = Math.floor(Math.random() * 256)
//     let g = Math.floor(Math.random() * 256)
//     let b = Math.floor(Math.random() * 256)
//     return `rgb(${r},${g},${b})`
// }

// btn.addEventListener('click', () => {
//     document.body.style.transition = '1s'
//     document.body.style.backgroundColor = getRandom()
//     console.log(getRandom());
// })
// let full = document.getElementById('toliqEkran');
// let volumeUp = document.getElementById('volumeUp');
// let volumeDown = document.getElementById('volumeDown');
// let progressBar = document.getElementById("progressBar");
// let currentTimeDisplay = document.getElementById("currentTime");
// let durationDisplay = document.getElementById("duration");
// let isDraging = false;
// function formatTime(seconds) {
//     let min = Math.floor(seconds / 60)
//     let sec = Math.floor(seconds % 60)
//     return ( min < 10 ? '0' + min : min) + ':' + (sec < 10 ? '0' + sec : sec)
// }
// document.getElementById('toggleButton').addEventListener('click', () => {
//     let vide = document.getElementById('MyVideo');
//     if (vide.paused) {
//         vide.play();
//     }else {
//         vide.pause()
//     }
//     vide.addEventListener('dblclick', function() {
//         vide.currentTime += 5;
//     })
//     full.addEventListener('click', () => {
//         vide.requestFullscreen();
//     })
//     volumeDown.addEventListener('click', () => {
//         vide.volume -= 0.1;
//     })
//     volumeUp.addEventListener('click', () => {
//         vide.volume += 0.1;
//     })
//     vide.addEventListener('loadedmetadata', () => {
//         progressBar.max = vide.duration
//         durationDisplay.textContent = formatTime(vide.duration)
//     });
//     vide.addEventListener('timeupdate', () => {
//         progressBar.value = vide.currentTime
//         currentTimeDisplay.textContent = formatTime(vide.currentTime)
//     });
//     vide.addEventListener('input', function() {
//         vide.currentTime = progressBar.value
//     })
//     progressBar.addEventListener('mousedown', function() {
//         isDraging = true
//     })
//     progressBar.addEventListener('input', function() {
//         currentTimeDisplay.textContent = formatTime(progressBar.value)
//     })
//     progressBar.addEventListener('mouseup', function() {
//         isDraging = false
//         vide.currentTime = progressBar.value
//     } )

// }) 

let play = document.querySelector('.fa-play')
let pause = document.querySelector('.fa-pause')
let video =  document.getElementById('video')
let ong = document.querySelector('.fa-forward')
let chap = document.querySelector('.fa-backward')
let full = document.querySelector('.fa-expand')
let minute = document.querySelector('.minut')
let second = document.querySelector('.second')
let progressBar = document.getElementById("progressBar");
let currentTimeDisplay = document.getElementById("currentTime");
let durationDisplay = document.getElementById("duration");
let isDragging = false; // Foydalanuvchi slayderni ushlab turganini aniqlash

// Funksiya: soniyalarni "MM:SS" formatiga o‘girish
function formatTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    return (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec;
}

// Videoni yuklash - maksimal vaqtni o‘rnatish
video.addEventListener("loadedmetadata", function () {
    progressBar.max = video.duration;
    durationDisplay.textContent = formatTime(video.duration);
});

// Video o‘ynaganda vaqt va progress barni yangilash
video.addEventListener("timeupdate", function () {
    if (!isDragging) { // Faqat foydalanuvchi slayderni ushlab turmasa yangilash
        progressBar.value = video.currentTime;
        currentTimeDisplay.textContent = formatTime(video.currentTime);
    }
});

// Foydalanuvchi slayderni ushlaganda yangilashni to‘xtatish
progressBar.addEventListener("mousedown", function () {
    isDragging = true;
});

// Slayderni harakatlantirganda vaqtni real vaqtda o‘zgartirish
progressBar.addEventListener("input", function () {
    currentTimeDisplay.textContent = formatTime(progressBar.value);
});

// Foydalanuvchi slayderni qo‘yib yuborganda videoni yangi vaqtda boshlash
progressBar.addEventListener("mouseup", function () {
    isDragging = false;
    video.currentTime = progressBar.value;
});
console.log(ong);

play.addEventListener('click', function() {
    video.play()
    play.style.display = 'none'
    pause.style.display = 'block'
});
pause.addEventListener('click', function() {
    video.pause()
    play.style.display = 'block'
    pause.style.display = 'none'
})

ong.addEventListener('dblclick', function() {
    video.currentTime += 5
})

chap.addEventListener('dblclick', function() {
    video.currentTime -= 5;
})

full.addEventListener('click', function() {
    video.requestFullscreen();
})

document.body.addEventListener('keydown', function(s) {
    if (s.key === 'f') {
        video.requestFullscreen()
    }
})

document.body.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        video.currentTime += 5
    }
    else if (event.key === 'ArrowLeft') {
        video.currentTime -= 5
    }
})
video.addEventListener('dblclick', ()=> {
    video.requestFullscreen();
})
