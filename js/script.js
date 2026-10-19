const btn = document.querySelector('.btn-menu');
const nav = document.querySelector('.main-nav');

// 
btn.addEventListener('click', () =>){
nav.classList.toggle('open-menu');

//만약 btn 요소의 inerHTML 이 'Menu' 인 경우,
if(btn.innerHTML === 'Menu'){

    btn.innerHTML = 'Close';
}
esle {
    btn.innerHTML = 'Menu';
}
});