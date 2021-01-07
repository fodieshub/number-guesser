/*
Player must guess a number between the min number and the max number
Player must get a certain number of guesses
Notify player of guesses remaining
Let player choose to play again
*/

//Game Value
let min = 1,
    max = 10,
    winningNum = getRandomNumber(min, max),
    guessesLeft = 3;

// UI Element
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessInput = document.querySelector('#guess-input'),
      guessBtn = document.querySelector('#guess-btn')
      message = document.querySelector('.message');

//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Add event Listener to Play Again
game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
});

// Listen for guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);
  
  //Validation
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please Enter a Number Between ${min} and ${max}` ,'red');
  }

  //Check if won
  if(guess === winningNum){
    gameOver(true, `${winningNum} Is correct, YOU WIN!!!`);
  } else {

    // Wrong Number
      guessesLeft -= 1;
      if(guessesLeft === 0) {
        gameOver(false, `Game Over, You Lost, The Correct Number was ${winningNum}`);

    } else {
      guessInput.value = '';
      guessInput.style.borderColor = "red";
      setMessage(`${guess} is not correct, You have ${guessesLeft} guesses Left` ,'red');
    }
  }
});

//GameOver
function gameOver(won, msg) {
  
  let color;
  won === true ? color = 'green' : color = 'red';

  guessInput.disabled = true;
    //Change Border color
    guessInput.style.borderColor = color;
    //Change Text color
    message.style.color = color;
    setMessage(msg);

    //Play Again
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

//Randon number generator
function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max-min + 1) + min);
}

//Error Message
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}
  