'use strict';

// DOM Manipulation
let number = Math.trunc(Math.random()*20)+1
let score = 20;
let highScore = 0

// Function for calling DOM on the message
const displayMessage = function(message){
  document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage ('No Number!!')
  }

  // When player wins
  else if (guess === number){
    displayMessage('Correct Guess!!')
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '30rem'

    // Implementing our high score functioning
    if (score > highScore){
      highScore = score
      document.querySelector('.highscore').textContent = highScore
    }
  }

  else if (guess != number){
    if (score > 1){
      document.querySelector('.message').textContent = guess > number ?'Too High!!':'Too Low!!';
      score = score - 1
      document.querySelector('.score').textContent = score
    }
    else {
      displayMessage('You Loose!!')
      document.querySelector('body').style.backgroundColor = '#FF0000'
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Using the again button
document.querySelector('.again').addEventListener('click',function(){
  
  score = 20
  document.querySelector('.score').textContent = score
  number = Math.trunc(Math.random()*20)+1

  document.querySelector('body').style.backgroundColor = '#222'
  displayMessage('Start guessing...')
  document.querySelector('.number').style.width = '15rem'
  document.querySelector('.number').textContent = '?'
  document.querySelector('.guess').value = ''
})