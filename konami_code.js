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
  Mousetrap.bind('up up down down left right left right b a', function() { 
    alert("Konami");
  });  
};
 

// run the function
init();
