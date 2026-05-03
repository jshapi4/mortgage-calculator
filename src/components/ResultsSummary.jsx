import { formatCurrency } from "../utils/mortgageCalc";

function ResultsSummary({ results, showTotals, setShowTotals }) {
  return (
    <>
      <h2 className="title">Monthly Breakdown</h2>
      <section className="monthly-grid form-box">
        <div className="row-item">
          <span>Principal & Interest</span>
          <strong>{formatCurrency(results.monthlyPandI)}</strong>
        </div>
        <div className="row-item">
          <span>Property Taxes</span>
          <strong>{formatCurrency(results.monthlyPropertyTax)}</strong>
        </div>
        {results.monthlyPMI > 0 && (
          <div className="row-item">
            <span>PMI ({(results.pmiRate * 100).toFixed(2)}%)</span>
            <strong>{formatCurrency(results.monthlyPMI)}</strong>
          </div>
        )}
        <div className="row-item total">
          <span>Monthly Total:</span>
          <strong>{formatCurrency(results.monthlyTotal)}</strong>
        </div>
      </section>
      <button
        className="totalsButton"
        onClick={() => setShowTotals((prev) => !prev)}
      >
        {showTotals ? "Hide Totals" : "Show Totals"}
      </button>
      {showTotals && (
        <section className="monthly-grid form-box">
          <h2 className="title">Totals Over 30 Years</h2>
          <div className="row-item">
            <span>Total Interest Paid</span>
            {formatCurrency(results.totalInterestPaid)}
          </div>
          <div className="row-item">
            <span>Total Property Taxes Paid</span>
            {formatCurrency(results.totalPropertyTaxesPaid)}
          </div>
          <div className="row-item">
            <span>Total Principal</span>
            <strong>{formatCurrency(results.totalPrincipal)}</strong>
          </div>
          <div className="row-item total">
            <span>Total Amount Paid</span>
            <strong>{formatCurrency(results.totalAmountPaid)}</strong>
          </div>
        </section>
      )}
    </>
  );
}

export default ResultsSummary;
