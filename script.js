// 2. STORE DATA - VARIABLES
let monthlyBudget = 0;
let userName = "";
let expenses = [];
let totalExpenses = 0;
let remainingBalance = 0;

// 3. COLLECT USER INPUT - using prompt()
function collectUserInput() {
  userName = prompt("Welcome to SpendWise! What is your name?");
  monthlyBudget = Number(prompt(`Hi ${userName}, what is your monthly budget? (Ksh)`));
  let numberOfExpenses = Number(prompt("How many expenses do you want to add?"));
  expenses = [];
  for (let i = 0; i < numberOfExpenses; i++) {
    let expenseName = prompt(`Enter name for expense ${i + 1}:`);
    let expenseAmount = Number(prompt(`Enter amount for ${expenseName}:`));
    let expenseCategory = prompt(`Enter category for ${expenseName}:`);
    expenses.push({ name: expenseName, amount: expenseAmount, category: expenseCategory });
  }
}

// 4 & 5. CALCULATIONS + REUSABLE FUNCTIONS
function calculateTotalExpenses() {
  let total = 0;
  for (let expense of expenses) {
    total += expense.amount;
  }
  return total;
}

function calculateRemainingBalance(budget, total) {
  return budget - total;
}

function calculatePercentageSpent(budget, total) {
  if (budget === 0) return 0;
  return (total / budget) * 100;
}

function getBudgetStatus(balance) {
  if (balance < 0) return "OVER BUDGET!";
  if (balance === 0) return "Exactly used budget.";
  return "WITHIN BUDGET. Good job!";
}

// 6. DISPLAY RESULTS
function displayResults() {
  totalExpenses = calculateTotalExpenses();
  remainingBalance = calculateRemainingBalance(monthlyBudget, totalExpenses);
  let percentage = calculatePercentageSpent(monthlyBudget, totalExpenses);
  let status = getBudgetStatus(remainingBalance);

  console.log("===== SPENDWISE REPORT =====");
  console.log("User Name:", userName);
  console.log("Monthly Budget: Ksh", monthlyBudget);
  console.log("Expense List:", expenses);
  console.log("Total Expenses: Ksh", totalExpenses);
  console.log("Remaining Balance: Ksh", remainingBalance);
  console.log("Percentage Spent:", percentage.toFixed(2) + "%");
  console.log("Budget Status:", status);

  document.getElementById("output").innerHTML =
    "<b>Name:</b> " + userName + "<br>" +
    "<b>Budget:</b> Ksh " + monthlyBudget + "<br>" +
    "<b>Total Spent:</b> Ksh " + totalExpenses + "<br>" +
    "<b>Balance:</b> Ksh " + remainingBalance + "<br>" +
    "<b>Status:</b> " + status + "<br><br>Check Console (Ctrl+Shift+J)";
}

function startSpendWise() {
  collectUserInput();
  displayResults();
}

startSpendWise();