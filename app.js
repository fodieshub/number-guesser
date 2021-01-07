/*
Player must guess a number between the min number and the max number
Player must get a certain number of guesses
Notify player of guesses remaining
Let player choose to play again
*/

//Game Value
let min = 1,
    max = 10,
    winningNum = 2,
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

// Listen for guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);
  
  //Validation
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please Enter a Number Between ${min} and ${max}` ,'red');
  }
  //Check if won
  if(guess === winningNum){
    guessInput.disabled = true;
    //Change Border color
    guessInput.style.borderColor = "green";
    setMessage(`You Won, The Number is ${winningNum}` ,'green');
  }
});
//Error Message
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}
  