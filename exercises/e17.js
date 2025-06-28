// EXERCISE 17
// Please, read the exercise-info/includes.md to get the initial data of what is the expected result of this exercise.
// doesArrayInclude(['a', 'b', 'c'], 'a') => true
// doesArrayInclude(['a', 'b', 'c'], 'f') => false
// NOTE: You can NOT use the array.includes() method in your code

export function doesArrayInclude(array, value) {
  // Your code goes here...
  //return array.includes(value);//lol, just kidding
  let boolVal = false;
  const val = new RegExp(`${value}`);
  array.forEach((item) => {
    if (val.test(item)) {
      boolVal = true;
      return true; //this had me stumped for a bit as to why it was failing guess it only returns from the loop, not the whole function. Weird. Looks like its because I used forEach which is a function.
    }
    if (boolVal) {
      console.log("should not appear");
    }
  });
  if (boolVal) {
    return true;
  }
  return false;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-17"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
