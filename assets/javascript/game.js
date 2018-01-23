// Bar body

var animals = ['cat', 'tiger', 'bird', 'butterfly'];
var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var alphabetArray = alphabet.split('');

var wins = 0;
var loss = 0;
var guessLeft = 9;
var line = [];
var rigthLetter = [];
var wrongLetter = [];
var randomWord;
var winCounter = 0;

// DOM Manipulation
var emptyLine = document.getElementById('empty-line');
var showGuesLeft = document.getElementById('guess-left');
var randomWord = animals[Math.floor(Math.random() * animals.length)];
console.log(randomWord);

showGuesLeft.textContent = 'Guesses left: ' + guessLeft;

// Function to start the game
function startGame() {
  for (var i = 0; i < randomWord.length; i++) {
    line.push('_');
  }
  document.getElementById('empty-line').textContent = line.join(' ');
  console.log(line);

  // Reset
  wrongLetter = [];
  guessLeft = 9;
}

function finishGame() {
  if (winCounter === randomWord.length) {
    alert('You got it!');
  } else if (guessLeft === 0) {
    alert('Loser!');
  }
}

document.onkeyup = function(event) {
  // When key was pressed
  var userGuess = event.key;

  if (randomWord.indexOf(userGuess) > -1) {
    for (var i = 0; i < randomWord.length; i++) {
      if (randomWord[i] === userGuess) {
        line[i] = userGuess;
        console.log(line);
        emptyLine.innerHTML = line;
        winCounter++;
        finishGame();
      }
    }
  } else {
    wrongLetter.push(userGuess);
    guessLeft--;
    showGuesLeft.innerHTML = 'Guesses left: ' + guessLeft;
    console.log(wrongLetter);
    finishGame();
  }
};

startGame();
