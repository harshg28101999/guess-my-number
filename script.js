'use strict';

// DOM Manipulation

//TODO Work on the logic on the scoring for the player
//TODO Work on the again button and reset the game
const number = Math.trunc(Math.random()*20)+1
console.log(document.querySelector('.number').textContent = number);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  console.log(typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!!';
  }

  else if (guess === number){
    document.querySelector('.message').textContent = 'Correct Guess!';
  }

  else if (guess > number){
    document.querySelector('.message').textContent = 'Too High!';
  }

  else if (guess < number){
    document.querySelector('.message').textContent = 'Too Low!';
  }

});
