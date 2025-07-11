// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  let answer = [];
  for (let key of array) {
    let balance = key.balance;
    let totalMinus = 0;
    let totalPlus = 0;
    if (key.withdrawals) {
      for (let val of key.withdrawals) {
        totalMinus += val;
      }
    }
    if (key.deposits) {
      for (let val of key.deposits) {
        totalPlus += val;
      }
    }
    if (totalPlus - totalMinus != balance) {
      answer.push(key);
    }
  }
  return answer;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
