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

function init() {
  let count = 0; // keep track of keyPress count
  let magicNumber = codes.length; // = 10
  // attach event listener to document
  document.body.addEventListener("keydown", (e) => {
  // document.onkeydown = function(e) {
    const keyPress = e.key; // capture key pressed from event

    if (codes[count] == keyPress) {
      // each time key matches increase count,
      ++count; // so we can check next value in codes array
    } else {
      // or reset count
      count.length = 0; 
    }

    if (count == magicNumber) {
      // if keyPress count number matches 10 times in a row,
      alert("Konami code"); // we have a winner!
      count = 0; // reset count
    }

  console.log(keyPress); // sanity check
  // };
  });

  
}

// run the function
// init();
