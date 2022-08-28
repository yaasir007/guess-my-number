'use strict';

const body = document.querySelector('body');
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const myNumber = document.querySelector('.number');
const scoreNumber = document.querySelector('.score');
const message = document.querySelector('.message');

let score = 20;
let secretNumber = Math.trunc(Math.random()*20)+1;
myNumber.textContent = secretNumber;

const displayInformation = (outputText) => {
  message.textContent = outputText;
}

checkBtn.addEventListener('click', function() {
  const guessNumber = Number(document.querySelector('input').value);

    if (!guessNumber) {
      displayInformation('No Number! ⛔');
    } else if (guessNumber === secretNumber) {
      displayInformation('Correct Number! 👍');
      body.style.backgroundColor = '#60b347';
      myNumber.style.width = '30rem';
      againBtn.style.backgroundColor = 'hotpink';

    } else if (guessNumber > 20) {
        if (score > 1) {
          displayInformation('Number Is Out Of Range');
          body.style.backgroundColor = 'red';
          score--;
          scoreNumber.textContent = score;
        } else {
          displayInformation('Click On Again To Start A New Game');
          body.style.backgroundColor = 'red';
          againBtn.style.backgroundColor = 'green';
          scoreNumber.textContent = '0';
        }
    } else if (guessNumber > secretNumber) {
        if (score > 1) {
          body.style.backgroundColor = '#222';
          displayInformation('Too high 📈');
          score--;
          scoreNumber.textContent = score;
        } else {
          displayInformation('Click On Again To Start A New Game');
          body.style.backgroundColor = 'red';
          againBtn.style.backgroundColor = 'green';
          scoreNumber.textContent = '0';
        }
    } else if (guessNumber < secretNumber) {
        if (score > 1) {
          displayInformation('Too Low 📉');
          body.style.backgroundColor = '#222';
          score--;
          scoreNumber.textContent = score;
        } else {
          displayInformation('Click On Again To Start A New Game');
          body.style.backgroundColor = 'red';
          againBtn.style.backgroundColor = 'green';
          scoreNumber.textContent = '0';
        }
    }
})

againBtn.addEventListener('click', function () {
  window.location.reload();
})
