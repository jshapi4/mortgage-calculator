function ResultsSummary() {
  return (
    <>
      <h2>Summary of Results</h2>
      <p>This will be the summary of results</p>
      <table>
        <tbody>
          <tr>
            <th>Item</th>
            <th>Dollar Amount</th>
          </tr>
          <tr>
            <td>Monthly Payment</td>
            <td>$1,000.00</td>
          </tr>
          <tr>
            <td>Yearly Payment</td>
            <td>$12,000.00</td>
          </tr>
          <tr>
            <td>Total Interest Paid</td>
            <td>$100,000.00</td>
          </tr>
          <tr>
            <td>Total Amount Paid</td>
            <td>$300,000.00</td>
          </tr>
          <tr>
            <td>Total Principal</td>
            <td>$200,000.00</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default ResultsSummary;
