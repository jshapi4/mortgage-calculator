function ResultsSummary({ results }) {
  return (
    <>
      <h2>Monthly Breakdown</h2>
      <section className="monthly-grid form-box">
        <div className="row-item">
          <span>Principal & Interest</span>
          <strong>
            {parseFloat(results.monthlyPandI).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </strong>
        </div>
        <div className="row-item">
          <span>Property Taxes</span>
          <strong>
            {parseFloat(results.monthlyPropertyTax).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </strong>
        </div>
        {results.monthlyPMI > 0 && (
          <div className="row-item">
            <span>PMI ({(results.pmiRate * 100).toFixed(2)}%)</span>
            <strong>
              {parseFloat(results.monthlyPMI).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </strong>
          </div>
        )}
        <div className="row-item total">
          <span>Monthly Total:</span>
          <strong>
            {parseFloat(results.monthlyTotal).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </strong>
        </div>
      </section>

      <h2>Totals</h2>
      <section className="monthly-grid form-box">
        <div className="row-item">
          <span>Total Interest Paid</span>
          {parseFloat(results.totalInterestPaid).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </div>
        <div className="row-item">
          <span>Total Property Taxes Paid</span>
          {parseFloat(results.totalPropertyTaxesPaid).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </div>
        <div className="row-item">
          <span>Total Principal</span>
          <strong>
            {parseFloat(results.totalPrincipal).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </strong>
        </div>
        <div className="row-item total">
          <span>Total Amount Paid</span>
          <strong>
            {parseFloat(results.totalAmountPaid).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </strong>
        </div>
      </section>
    </>
  );
}

export default ResultsSummary;
