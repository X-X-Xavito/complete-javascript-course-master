'use strict';

const player0_element = document.querySelector('.player--0')
const player1_element = document.querySelector('.player--1')
const score0_element = document.querySelector('#score--0')
const score1_element = document.getElementById('score--1') // outra maneira de pegar o dado
const current0_element = document.getElementById('current--0')
const current1_element = document.getElementById('current--1')

const dice = document.querySelector('.dice')
const btn_new = document.querySelector(".btn--new")
const btn_roll = document.querySelector(".btn--roll")
const btn_hold = document.querySelector(".btn--hold")


let scores, current_score, active_player, playing;

const new_game = function () {
    scores = [0, 0]
    current_score = 0
    active_player = 0
    playing = true;
    document.querySelector(`.player--${active_player}`).classList.remove('player--winner')
    score0_element.textContent = 0
    score1_element.textContent = 0
    console.log(score0_element.textContent)
    current0_element.textContent = 0
    current1_element.textContent = 0
    player0_element.classList.add('player--active')
    player1_element.classList.remove('player--active')
    dice.classList.add('hidden')

}

const switch_player = function () {
    document.getElementById(`current--${active_player}`).textContent = 0
    current_score = 0
    active_player = active_player === 0 ? 1 : 0
    player0_element.classList.toggle('player--active')
    player1_element.classList.toggle('player--active')

}


new_game()

btn_roll.addEventListener('click', function () {
    if (playing) {
        const dice_value = Math.trunc(Math.random() * 6 + 1);
        dice.classList.remove('hidden')
        dice.src = `dice-${dice_value}.png`

        if (dice_value !== 1) {
            // adicionar ao current score
            current_score = current_score + dice_value;
            document.getElementById(`current--${active_player}`).textContent = current_score
        } else {
            // troca de player
            switch_player()

        }
    }
})


btn_hold.addEventListener('click', function () {
    if (playing) {
        //adicinar score para o player ativo
        scores[active_player] += current_score;
        document.getElementById(`score--${active_player}`).textContent = scores[active_player]
        // checa se o valor é 100

        if (scores[active_player] >= 100) {
            playing = false;
            dice.classList.add('hidden')
            document.querySelector(`.player--${active_player}`).classList.add('player--winner')
            document.querySelector(`.player--${active_player}`).classList.remove('player--active')
        } else {
            switch_player()
        }
    }

})


btn_new.addEventListener('click', new_game)



//codigo que eu fiz


// remover o dado da tela
// const dice = document.querySelector('.dice')
// dice.style.display = "none"



// let players = document.querySelectorAll('.player')
// let current_scores = document.querySelectorAll('.current-score')
// let scores = document.querySelectorAll('.score')



// // zera o valor do placar 
// for (let i = 0; i < players.length; i++) {
//     let player_score = players[i].querySelector('.score').textContent
//     player_score = 0;
//     console.log(player_score)
//     players[i].querySelector('score');
// }

// btn_roll.addEventListener('click', function () {
//     console.log('botao clicakdo btn roll')
//     let dice_value = Math.trunc(Math.random() * 6 + 1);
// })

