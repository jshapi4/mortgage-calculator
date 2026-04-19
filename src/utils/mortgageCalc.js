// this will have the logic for the calculation of the mortgage payment, total interest paid, and total amount paid over the life of the loan

const loanYears = 30;
const paymentsPerYear = 12;
const numberOfPayments = loanYears * paymentsPerYear;

function calculateMonthlyPayment(principal, annualInterestRate) {
  const monthlyInterestRate = annualInterestRate / 100 / paymentsPerYear;
  const payment =
    (principal * monthlyInterestRate) /
    (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
  return payment.toFixed(2);
}

function calculateTotalInterestPaid(monthlyPayment, principal) {
  const totalPaid = monthlyPayment * numberOfPayments;
  const totalInterest = totalPaid - principal;
  return totalInterest.toFixed(2);
}

function calculateTotalAmountPaid(monthlyPayment) {
  return (monthlyPayment * numberOfPayments).toFixed(2);
}

export {
  calculateMonthlyPayment,
  calculateTotalInterestPaid,
  calculateTotalAmountPaid,
};

var sample1 = calculateMonthlyPayment(200000, 5.99);
console.log("Monthly Payment: ", sample1);
var sample2 = calculateTotalInterestPaid(sample1, 200000);
console.log("Total Interest Paid: ", sample2);
var sample3 = calculateTotalAmountPaid(sample1);
console.log("Total Amount Paid: ", sample3);
