const btn = document.querySelector('.btn');
const container = document.querySelector('.container');
document.addEventListener('mousemove', (e) => {
   let yangiDiv = document.createElement('div');
   document.body.appendChild(yangiDiv);
   yangiDiv.classList.add('container');
   yangiDiv.style.left = e.clientX + 'px';
   yangiDiv.style.top = e.clientY + 'px';
});




