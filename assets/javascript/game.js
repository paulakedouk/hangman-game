// Bar body

var animals = ['cat', 'tiger', 'bird', 'butterfly'];
var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var alphabetArray = alphabet.split('');

var selectedIndex = 0;

// Function to render name

function showLetters() {
  // Get the element
  btnLetters = document.getElementById('btn-letters');
  // Create a list
  letters = document.createElement('ul');

  // Create for loop to go through on each item on the array ['a', 'b', ...]
  for (var i = 0; i < alphabetArray.length; i++) {
    // Set id class to the ul list
    letters.id = 'alphabet';

    // Create item for the list and set an id
    list = document.createElement('li');
    list.id = 'letter';

    // Add that list of items to the html
    list.innerHTML = alphabet[i];

    // Create a click function

    // Insert an element after the last child
    btnLetters.appendChild(letters);
    letters.appendChild(list);
  }
}

showLetters();

selectedIndex = Math.floor(Math.random() * animals.length);
var splitWord = animals[selectedIndex].split('');
var name = animals[selectedIndex];

console.log(splitWord);
console.log(name);

function emptyLines() {
  for (var i = 0; i < splitWord.length; i++) {
    document.querySelector('#empty-line').innerHTML += '_ ';
  }
}

emptyLines();

document.onkeyup = function(event) {
  // When key was pressed
  var userInput = event.key;

  for (var i in splitWord) {
    if (userInput === splitWord[i]) {
      console.log('This letter match!');

      splitWord.indexOf(userInput);
    } else {
      // Delete the letter and loose one life
      console.log('No match');
      emptyLines();
    }
  }

  // console.log(animals[selectedIndex], animals[selectedIndex].length);
};

// emptyLines();
