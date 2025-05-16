let stars = document.getElementById('gelembung');
let meteorid = document.getElementById('ikan');
let rocket = document.getElementById('mermaid');
let text = document.getElementById('text');
let button = document.getElementById('button');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    rocket.style.top = value * 0.5 + 'px';
    text.style.marginBottom = value * 1 + 'px';
    button.style.marginBottom = value * 1 + 'px';

});