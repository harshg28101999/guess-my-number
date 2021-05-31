'use strict';

// DOM Manipulation
let number = Math.trunc(Math.random()*20)+1
let score = 20;
let highScore = 0

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!!';
  }

  // When player wins
  else if (guess === number){
    document.querySelector('.message').textContent = 'Correct Guess!';
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
      document.querySelector('.message').textContent = 'You Loose!!';
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
  document.querySelector('.message').textContent = 'Start guessing...'
  document.querySelector('.number').style.width = '15rem'
  document.querySelector('.number').textContent = '?'
  document.querySelector('.guess').value = ''
})