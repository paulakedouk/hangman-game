// Bar body

var animals = ['cat', 'dog', 'bird', 'butterfly'];

var selectedIndex = 0;

// Function to render name

function showWord() {
  selectedIndex = Math.floor(Math.random() * animals.length);
  // console.log(animals[selectedIndex], animals[selectedIndex].length);

  console.log(animals[selectedIndex]);

  for (var i in animals[selectedIndex]) {
    //var letters = animals[i].split('');
    document.querySelector('#empty-line').innerHTML += '_ ';
  }
}

// Calling functions to start the game.
showWord();
