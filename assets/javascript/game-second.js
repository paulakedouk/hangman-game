// Bar body

var animals = ['cat', 'tiger', 'bird', 'butterfly'];
var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var alphabetArray = alphabet.split(''); // ['a', 'b' ..]

var currentWord = animals[Math.floor(Math.random() * animals.length)];
var rigthWord = [];
var wrongWord = [];
var line = [];

// DOM manipulation
var holder = document.getElementById('hold');
var rightGuess = document.getElementById('right-guess');
var wrongGuess = document.getElementById('wrong-guess');

// Test
console.log(currentWord);

var generateLines = function() {
  for (var i = 0; i < currentWord.length; i++) {
    line.push('_');
  }
  return line;
};

document.addEventListener('keypress', function(event) {
  var keyword = String.fromCharCode(event.keyCode);

  //   When key was pressed
  console.log(currentWord.indexOf(keyword));
  // If users guess if rigth
  if (currentWord.indexOf(keyword) > -1) {
    // Add to right words array
    rigthWord.push(keyword);
    // Replace line with rigth letter
    line[currentWord.indexOf(keyword)] = keyword;

    holder[0].innerHTML = line.join(' ');
    rightGuess[0].innerHTML = rigthWord;

    // Check to see if user word matches guesses
    if (line.join('') == currentWord) {
      alert('You win!');
    }
  } else {
    wrongWord.push(keyword);
    wrongGuess[0].innerHTML = wrongWord;
  }

  holder[0].innerHTML = generateLines().join(' ');
});
