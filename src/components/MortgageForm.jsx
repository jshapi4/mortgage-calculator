import { formatCurrency } from "../utils/mortgageCalc";

function MortgageForm({
  formData,
  onInputChange,
  isCustomDownPayment,
  setIsCustomDownPayment,
}) {
  const handlePresetClick = (e) => {
    onInputChange(e);
    setIsCustomDownPayment(false);
  };

  const standardOptions = ["5", "10", "15", "20"];

  return (
    <>
      <div className="form-box">
        <div className="row-item">
          <label htmlFor="homePrice">
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
            list="price-ticks"
          />
          <datalist id="price-ticks">
            {[
              100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000,
              900000, 1000000,
            ].map((tick) => (
              <option key={tick} value={tick} />
            ))}
          </datalist>
        </div>
        <div className="row-item">
          <div>
            <label htmlFor="downPayment">
              Down Payment: {formData.downPayment}% (
              {formatCurrency(
                (formData.downPayment * formData.homePrice) / 100,
              )}
              )
            </label>
          </div>
          <div>
            {isCustomDownPayment ? (
              <div className="custom-input-group">
                <input
                  type="number"
                  name="downPayment"
                  value={formData.downPayment}
                  onChange={onInputChange}
                  autoFocus
                />
                <button onClick={() => setIsCustomDownPayment(false)}>
                  Back
                </button>
              </div>
            ) : (
              <div className="button-group">
                {[5, 10, 15, 20].map((val) => (
                  <button
                    key={val}
                    name="downPayment"
                    value={val}
                    className={formData.downPayment == val ? "active" : ""}
                    onClick={handlePresetClick}
                  >
                    {val}%
                  </button>
                ))}

                <button
                  className={
                    standardOptions.includes(formData.downPayment)
                      ? ""
                      : "active"
                  }
                  onClick={() => setIsCustomDownPayment(true)}
                >
                  Custom✏️
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="row-item">
          <label htmlFor="interestRate">Interest Rate</label>
          <input
            id="interestRate"
            type="number"
            name="interestRate"
            step="0.05"
            min="0"
            value={formData.interestRate}
            onChange={onInputChange}
          />
        </div>
        <div className="row-item">
          <label htmlFor="propertyTax">Property Tax</label>
          <input
            id="propertyTax"
            type="number"
            name="propertyTax"
            suffix={"%"}
            step="0.05"
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
