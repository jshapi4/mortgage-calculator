function MortgageForm({ formData, onInputChange }) {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  };

  return (
    <>
      <h2>Mortgage Form</h2>
      <div className="form-box">
        <div className="row-item">
          <label forhtml="homePrice">
            Home Price: {formatCurrency(formData.homePrice)}
          </label>
          <input
            type="range"
            id="homePrice"
            name="homePrice"
            min="50000"
            max="1000000"
            step="5000"
            value={formData.homePrice}
            onChange={onInputChange}
          />
        </div>
        <div className="row-item">
          <label forhtml="downPayment">
            Down Payment: {formData.downPayment}% (
            {formatCurrency((formData.downPayment * formData.homePrice) / 100)})
          </label>
          <input
            id="downPayment"
            type="number"
            name="downPayment"
            min="0"
            max="100"
            value={formData.downPayment}
            onChange={onInputChange}
          />
        </div>
        <div className="row-item">
          <label forhtml="interestRate">Interest Rate</label>
          <input
            id="interestRate"
            type="number"
            name="interestRate"
            step="0.01"
            min="0"
            value={formData.interestRate}
            onChange={onInputChange}
          />
        </div>
        <div className="row-item">
          <label forhtml="propertyTax">Property Tax</label>
          <input
            id="propertyTax"
            type="number"
            name="propertyTax"
            suffix={"%"}
            step="0.01"
            min="0"
            value={formData.propertyTax}
            onChange={onInputChange}
          />
        </div>
      </div>
    </>
  );
}

export default MortgageForm;
