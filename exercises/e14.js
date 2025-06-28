// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  var answer = [];
  var balance = 0;
  var totalPlus = 0;
  var totalMinus = 0;
  array.forEach((key) => {
    balance = key.balance;
    totalMinus = 0;
    totalPlus = 0;
    if (key?.withdrawals != undefined) {
      key.withdrawals.forEach((val) => {
        totalMinus += val;
      });
    }
    if (key?.deposits != undefined) {
      key.deposits.forEach((val) => {
        totalPlus += val;
      });
    }
    if (totalPlus - totalMinus != balance) {
      answer.push(key);
    }
  });
  return answer;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
