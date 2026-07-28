'use strict';


const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btn_close_modal = document.querySelector('.close-modal');
const btns_open_modal = document.querySelectorAll('.show-modal');

const open_modal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
const close_modal = function () {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')

}


for (let i = 0; i < btns_open_modal.length; i++) {
    // console.log(btns_open_modal[i].textContent);
    btns_open_modal[i].addEventListener('click', open_modal)
}

btn_close_modal.addEventListener('click', close_modal)
overlay.addEventListener('click', close_modal)

document.addEventListener('keydown', function (e) {
    // e torna-se o objeto do evento. E é possivel acessar os atributos com 
    // o "."
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        close_modal();
    }
})