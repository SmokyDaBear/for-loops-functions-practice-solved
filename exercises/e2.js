// EXERCISE 2
// for every number between 0 and max find all numbers that have square roots that are integers
// getNumbersWithSquareRoots(17) => [0, 1, 4, 9, 16]

export function getNumbersWithSquareRoots(max) {
  // Your code goes here...
  const squares = [];
  for (var i = 0; i < max; i++) {
    if (i < 2) {
      for (var x = 0; x <= i; x++) {
        if (x * x === i) {
          squares.push(i);
        }
      }
    } else {
      for (var x = 2; x <= i / 2; x++) {
        if (x * x === i) {
          squares.push(i);
        }
      }
    }
  }
  //console.log("squares: " + squares);
  return squares;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-2"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
