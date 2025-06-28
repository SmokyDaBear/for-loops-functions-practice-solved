// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// In case there is no account that has balance > 0 return an empty array
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

import { test } from "vitest";

export function getClientWithLeastPositiveBalance(array) {
  // Your code goes here...
  var answer = [];
  for (var key of array) {
    //console.log(key);
    if (
      key.balance > 0 &&
      (answer[0]?.balance == undefined //found this trick for optional chaining. Is this a good practice to prevent the function failing? I'm rolling with it for now...
        ? true
        : key.balance < answer[0].balance
        ? true
        : false)
    ) {
      answer = [key];
    }
  }
  return answer;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
