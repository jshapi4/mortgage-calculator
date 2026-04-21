import houseLogo from "./assets/house.png";
import { useState } from "react";
import "./App.css";
import "./MortgageForm.css";
import MortgageForm from "./components/MortgageForm";
import ResultsSummary from "./components/ResultsSummary";
import {
  calculateMonthlyPayment,
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
  const monthlyPayment = calculateMonthlyPayment(
    principal,
    formData.interestRate,
  );
  const totalInterestPaid = calculateTotalInterestPaid(
    monthlyPayment,
    principal,
  );
  const totalAmountPaid = calculateTotalAmountPaid(monthlyPayment);

  const monthlyPropertyTax = calculateMonthlyPropertyTax(
    formData.homePrice,
    formData.propertyTax,
  );

  const monthlyPMI = calculatePMI(principal, formData.downPayment);

  const monthlyTotal =
    parseFloat(monthlyPropertyTax) +
    parseFloat(monthlyPMI) +
    parseFloat(monthlyPayment);

  const results = {
    monthlyPayment,
    monthlyPropertyTax,
    monthlyPMI,
    totalInterestPaid,
    totalAmountPaid,
    principal,
    monthlyTotal,
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
