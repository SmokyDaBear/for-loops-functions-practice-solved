// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [
// Susan's Account Object,
// Morgan's Account Object
// Joshua's Account Object
// Candy's Account Object,
// Phil's Account Object
// ]

export function getAllAccountsWithSumsOfDepositsLess2000(array) {
  let answer = [];
  let total = 0;
  let valCount = 0;
  array.forEach((key) => {
    if (key?.deposits != undefined) {
      key.deposits.forEach((val) => {
        total += val;
      });
      if (total < 2000) {
        console.log(`${key.name}: ${total} is under 2000`);
        answer.push(key);
      } else {
        console.log(`${key.name}: ${total} is over 2000`);
      }
      total = 0;
    } else {
      answer.push(key);
      console.log(`${key.name} has no deposits`);
    }
  });
  return answer;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
