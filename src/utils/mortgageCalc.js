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

function calculateTotalInterestPaid(monthlyPandI, principal) {
  const totalPaid = monthlyPandI * numberOfPayments;
  const totalInterest = totalPaid - principal;
  return totalInterest.toFixed(2);
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

const formatCurrency = (value) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
};

export {
  calculateMonthlyPandI,
  calculateMonthlyPropertyTax,
  calculateTotalInterestPaid,
  calculatePMI,
  formatCurrency,
};
