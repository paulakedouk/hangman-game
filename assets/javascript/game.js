// Bar body

var animals = ['cat', 'dog', 'bird', 'butterfly'];

var selectedIndex = 0;

// Function to render name
function showWord() {
  //   for (var i in animals) {
  //     console.log(animals[i].length);
  //   }
  selectedIndex = Math.floor(Math.random() * animals.length);

  console.log(animals[selectedIndex], animals[selectedIndex].length);
}

// Calling functions to start the game.
showWord();
