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

// DOM Manipulation
var holdWord = document.getElementById('hold');
var randomWord = animals[Math.floor(Math.random() * animals.length)];
console.log(randomWord);

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

  // HTML
  document.getElementById('guess-left').textContent = guessLeft;
}

document.onkeyup = function(event) {
  // When key was pressed
  var userGuess = event.key;

  if (randomWord.indexOf(userGuess) > -1) {
    for (var i = 0; i < randomWord.length; i++) {
      if (randomWord[i] === userGuess) {
        line[i] = userGuess;
        console.log(line);
      }
    }
  } else {
    wrongLetter.push(userGuess);
    console.log(wrongLetter);
  }
};

startGame();
