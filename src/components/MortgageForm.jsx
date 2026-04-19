import { useState } from "react";

function MortgageForm() {
  const [homePrice, setHomePrice] = useState(200000);
  const [downPayment, setDownPayment] = useState(20);
  const [interestRate, setInterestRate] = useState(5.99);
  const [propertyTax, setPropertyTax] = useState(1.25);

  return (
    <>
      <h2>Mortgage Form</h2>
      <label>
        Home Price
        <input
          type="number"
          name="homePrice"
          value={homePrice}
          onChange={(e) => setHomePrice(e.target.value)}
        />
      </label>
      <label>
        Down Payment
        <input
          type="number"
          name="downPayment"
          value={downPayment}
          onChange={(e) => setDownPayment(e.target.value)}
        />
      </label>

      <label>
        Interest Rate
        <input
          type="number"
          name="interestRate"
          step="0.01"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          onBlur={(e) =>
            setInterestRate(parseFloat(e.target.value || 0).toFixed(2))
          }
        />
      </label>
      <label>
        Property Tax
        <input
          type="number"
          name="propertyTax"
          step="0.01"
          value={propertyTax}
          onChange={(e) => setPropertyTax(e.target.value)}
          onBlur={(e) =>
            setPropertyTax(parseFloat(e.target.value || 0).toFixed(2))
          }
        />
      </label>
      <button>Calculate</button>
    </>
  );
}

export default MortgageForm;
