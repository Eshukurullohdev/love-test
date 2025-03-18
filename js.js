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


let save = document.getElementById('save');
let del = document.getElementById('del');
let Input =  document.getElementById('Input')

save.addEventListener('click', function() {
    localStorage.setItem('name', Input.value);
    let saved = localStorage.getItem('name')
    if (saved) {
        let x = document.getElementById('Value').innerHTML = saved;
    }
    Input.value = ""
})
del.addEventListener('click', function() {
    localStorage.removeItem('name')
    document.getElementById('Value').innerText = "";
    Input.value = ""
})
document.body.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        localStorage.setItem('name', Input.value);
        let saved = localStorage.getItem('name');
        if (saved) {
            document.getElementById('Value').innerText = saved;
        }
        Input.value = ""
    };
});
document.body.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
         localStorage.removeItem('name');
         document.getElementById('Value').innerText = "";
        Input.value = "";
    };
});



