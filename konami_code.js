const codes = [
  "ArrowUp",    // 38
  "ArrowUp",    // 38
  "ArrowDown",  // 40
  "ArrowDown",  // 40
  "ArrowLeft",  // 37
  "ArrowRight", // 39
  "ArrowLeft",  // 37
  "ArrowRight", // 39
  "b",          // 66
  "a"           // 65
];

// store key code combo sequence to check
// const combo = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

let keyPressed = '';
let keyCombos = [];
let pressCount = 0;

function init() {
  
  // attach event listener to document
  document.onkeydown = function(e) {

  keyPressed = e.key;
  keyCombos.push(keyPressed);
  pressCount++;

  // only run checks once valid sequence length is reached
  if (pressCount >= codes.length) {  
    
    if (keyCombos.slice(-10).toString() == codes.toString()) {
      alert("Combo was hit!");
      keyCombos.length = 0; // reset array to start over
    }

  }
  
  // console.log(e.which); 
  console.log(e.key); // sanity check
};

  
}

// run the function
init();
