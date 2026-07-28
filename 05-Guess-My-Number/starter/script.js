'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!'

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13
// document.querySelector('.score').textContent = 10


// document.querySelector('.guess').value = 11111
// console.log(document.querySelector('.guess').value);

let secret_number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let high_score = 0;

const display_message = function (message) {
    document.querySelector('.message').textContent = message

}


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess);
    console.log(guess);

    //quando não tem input
    if (!guess) {
        // console.log(document.querySelector('.message').textContent = 'No number!!')
        display_message('No Number!!')
        //quando ele acerta
    } else if (guess === secret_number) {
        document.querySelector('.message').textContent = 'Correct number!!!!'
        display_message('Correct number!!!!')

        document.querySelector('.number').textContent = secret_number
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem'

        if (score > high_score) {
            document.querySelector('.highscore').textContent = score
            high_score = score;
        }
    } else if (guess !== secret_number) {
        if (score > 1) {
            // document.querySelector('.message').textContent = guess > secret_number ? 'Too high!' : 'Too low!'

            display_message(guess > secret_number ? 'Too high!' : 'Too low!')
            score = score - 1;
            document.querySelector('.score').textContent = score

        } else {
            // document.querySelector('.message').textContent = 'VOCÊ PERDEU!'
            display_message('VOCÊ PERDEU!')
            document.querySelector('.score').textContent = 0
        }
    }

    // quando o chute está mais alto
    // else if (guess > secret_number) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Too high!'
    //         score = score - 1;
    //         document.querySelector('.score').textContent = score

    //     } else {
    //         document.querySelector('.message').textContent = 'VOCÊ PERDEU!'
    //         document.querySelector('.score').textContent = 0
    //     }
    //     // quando o chute está mais baixo
    // } else if (guess < secret_number) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Too low!'
    //         score = score - 1;
    //         document.querySelector('.score').textContent = score

    //     } else {
    //         document.querySelector('.message').textContent = 'VOCÊ PERDEU!'
    //         document.querySelector('.score').textContent = 0
    //     }
    // };

});

document.querySelector('.again').addEventListener('click', function () {
    console.log('testando')
    score = 20
    secret_number = Math.trunc(Math.random() * 20) + 1;

    // document.querySelector('.message').textContent = "Start guessing..."
    display_message("Start guessing...")
    document.querySelector('.score').textContent = score
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = ''

    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
})


