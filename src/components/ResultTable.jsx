import { formatter } from "../util/investment";

export default function ResultTable({ annualData }) {
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Interest Earned</th>
          <th>Value at Year End</th>
          <th>Annual Investment</th>
        </tr>
      </thead>
      <tbody>
        {annualData.map((data, idx) => (
          <tr key={idx}>
            <td>{data.year}</td>
            <td>{formatter.format(data.interest)}</td>
            <td>{formatter.format(data.valueEndOfYear)}</td>
            <td>{formatter.format(data.annualInvestment)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
