let t1 = document.getElementById('t1')
let t2 = document.getElementById('t2')
let code = document.getElementById('code')
let smoke = document.getElementById('smoke')
let stars = document.getElementById('stars')
let me = document.getElementById('me')
let palheta = document.getElementById('palheta')

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    t1.style.left = value * .6 + 'px';
    t2.style.left = value * -.6 + 'px';
    smoke.style.top = value * 0.7 + 'px';
    stars.style.top = value * -0.8 + 'px';
    code.style.top = value * .3 + 'px';
    me.style.top = value * .3 + 'px';
    me.style.left = value * -.1 + 'px';
    palheta.style.left = value * .1 + 'px';
    palheta.style.top = value * .3 + 'px';
});