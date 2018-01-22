// Bar body

var animals = ['cat', 'dog', 'bird', 'butterfly'];
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

function showWord() {
  selectedIndex = Math.floor(Math.random() * animals.length);
  // console.log(animals[selectedIndex], animals[selectedIndex].length);

  console.log(animals[selectedIndex]);

  for (var i in animals[selectedIndex]) {
    //var letters = animals[i].split('');
    document.querySelector('#empty-line').innerHTML += '_ ';
  }
  0;
}

document.onkeyup = function(event) {
  // When key was pressed
  var userInput = event.key;
  console.log(userInput);
};

// Calling functions to start the game.
showWord();
