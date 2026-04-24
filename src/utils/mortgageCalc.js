// this will have the logic for the calculation of the mortgage payment, total interest paid, and total amount paid over the life of the loan

const loanYears = 30;
const paymentsPerYear = 12;
const numberOfPayments = loanYears * paymentsPerYear;

function calculateMonthlyPandI(principal, annualInterestRate) {
  const monthlyInterestRate = annualInterestRate / 100 / paymentsPerYear;
  const payment =
    (principal * monthlyInterestRate) /
    (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
  return payment.toFixed(2);
}

function calculateMonthlyPropertyTax(homePrice, propertyTaxRate) {
  const monthlyPropertyTax = (homePrice * (propertyTaxRate / 100)) / 12;
  return monthlyPropertyTax.toFixed(2);
}

function calculateTotalInterestPaid(monthlyPayment, principal) {
  const totalPaid = monthlyPayment * numberOfPayments;
  const totalInterest = totalPaid - principal;
  return totalInterest.toFixed(2);
}

function calculateTotalAmountPaid(monthlyPayment) {
  return (monthlyPayment * numberOfPayments).toFixed(2);
}

function getPmiRate(downPaymentPercentage) {
  if (downPaymentPercentage >= 20) {
    return 0;
  } else if (downPaymentPercentage >= 15) {
    return 0.0025;
  } else if (downPaymentPercentage >= 10) {
    return 0.0035;
  } else if (downPaymentPercentage >= 5) {
    return 0.0045;
  } else {
    return 0.006;
  }
}

function calculatePMI(principal, downPaymentPercentage) {
  const rate = getPmiRate(downPaymentPercentage);
  const amount = Number((rate * principal) / 12).toFixed(2);
  return { rate, amount };
}

export {
  calculateMonthlyPandI,
  calculateMonthlyPropertyTax,
  calculateTotalInterestPaid,
  calculateTotalAmountPaid,
  calculatePMI,
};

var sample1 = calculateMonthlyPandI(200000, 5.99);
console.log("Monthly Payment: ", sample1);
var sample2 = calculateTotalInterestPaid(sample1, 200000);
console.log("Total Interest Paid: ", sample2);
var sample3 = calculateTotalAmountPaid(sample1);
console.log("Total Amount Paid: ", sample3);
var sample4 = calculateMonthlyPropertyTax(200000, 1.25);
console.log("Monthly Property Tax: ", sample4);
