let ball = document.getElementById('ball');
let venue = document.getElementById('venue');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let header = document.querySelector('header');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    ball.style.top = value * 1.05 + 'px';
    text.style.marginRight = value * 6 + 'px';
    btn.style.marginTop = value * 1 + 'px';
})