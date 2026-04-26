import houseLogo from "./assets/house.png";
import { useState } from "react";
import MortgageForm from "./components/MortgageForm";
import ResultsSummary from "./components/ResultsSummary";
import {
  calculateMonthlyPandI,
  calculateMonthlyPropertyTax,
  calculateTotalInterestPaid,
  calculateTotalAmountPaid,
  calculatePMI,
} from "./utils/mortgageCalc";

function App() {
  const [formData, setFormData] = useState({
    homePrice: 400000,
    downPayment: 20,
    interestRate: 5.99,
    propertyTax: 1.25,
  });

  const principal =
    formData.homePrice - (formData.homePrice * formData.downPayment) / 100;
  const monthlyPandI = calculateMonthlyPandI(principal, formData.interestRate);
  const totalInterestPaid = calculateTotalInterestPaid(monthlyPandI, principal);
  const totalAmountPaid = calculateTotalAmountPaid(monthlyPandI);
  const monthlyPropertyTax = calculateMonthlyPropertyTax(
    formData.homePrice,
    formData.propertyTax,
  );
  const totalPrincipal = formData.homePrice;

  const { rate: pmiRate, amount: monthlyPMI } = calculatePMI(
    principal,
    formData.downPayment,
  );

  const monthlyTotal =
    parseFloat(monthlyPropertyTax) +
    parseFloat(monthlyPMI) +
    parseFloat(monthlyPandI);

  const results = {
    monthlyPandI,
    monthlyPropertyTax,
    monthlyPMI,
    totalInterestPaid,
    totalAmountPaid,
    principal,
    totalPrincipal,
    monthlyTotal,
    pmiRate,
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={houseLogo} alt="house" />
        </div>
        <div>
          <h1>Mortgage Calculator</h1>
        </div>
        <MortgageForm formData={formData} onInputChange={handleInputChange} />
        <ResultsSummary results={results} />
      </section>
    </>
  );
}

export default App;
