function MortgageForm({ formData, onInputChange }) {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  };

  return (
    <>
      <div className="form-box">
        <h2>Mortgage Form</h2>
        <label>
          Home Price: {formatCurrency(formData.homePrice)}
          <div>
            <input
              type="range"
              name="homePrice"
              min="50000"
              max="1000000"
              step="5000"
              value={formData.homePrice}
              onChange={onInputChange}
            />
          </div>
        </label>
        <label>
          Down Payment: {formData.downPayment}% (
          {formatCurrency((formData.downPayment * formData.homePrice) / 100)})
          <input
            type="number"
            name="downPayment"
            min="0"
            max="100"
            value={formData.downPayment}
            onChange={onInputChange}
          />
        </label>

        <label>
          Interest Rate
          <input
            type="number"
            name="interestRate"
            step="0.01"
            min="0"
            value={formData.interestRate}
            onChange={onInputChange}
          />
        </label>
        <label>
          Property Tax
          <input
            type="number"
            name="propertyTax"
            step="0.01"
            min="0"
            value={formData.propertyTax}
            onChange={onInputChange}
          />
        </label>
      </div>
    </>
  );
}

export default MortgageForm;
