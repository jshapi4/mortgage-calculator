function ResultsSummary({ results }) {
  if (!results)
    return <p>Enter mortgage details and press calculate to see results</p>;
  return (
    <>
      <h2>Monthly Breakdown</h2>
      <table>
        <tbody>
          <tr>
            <td>Monthly Payment (P&I)</td>
            <td>
              {parseFloat(results.monthlyPayment).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </td>
          </tr>
          <tr>
            <td>Property Taxes</td>
            <td>
              {parseFloat(results.monthlyPropertyTax).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </td>
          </tr>
          {results.monthlyPMI > 0 && (
            <tr>
              <td>PMI</td>
              <td>
                {parseFloat(results.monthlyPMI).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <h2>Totals</h2>
      <table>
        <tbody>
          <tr>
            <td>Total Interest Paid</td>
            <td>
              {parseFloat(results.totalInterestPaid).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </td>
          </tr>
          <tr>
            <td>Total Amount Paid</td>
            <td>
              {parseFloat(results.totalAmountPaid).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </td>
          </tr>
          <tr>
            <td>Total Principal</td>
            <td>
              {parseFloat(results.principal).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default ResultsSummary;
