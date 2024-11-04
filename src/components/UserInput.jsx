import { useState } from "react";

export default function UserInput() {
  const [initialInvestment, setInitialInvestment] = useState(0);
  const [annualInvestment, setAnnualInvestment] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [duration, setDuration] = useState(0);

  function handleInitialInvestmentChange(event) {
    setInitialInvestment(event.target.value);
  }

  function handleAnnualInvestmentChange(event) {
    setAnnualInvestment(event.target.value);
  }

  function handleExpectedReturnChange(event) {
    setExpectedReturn(event.target.value);
  }

  function handleDurationChange(event) {
    setDuration(event.target.value);
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">Initial Investment:</label>
          <input
            type="number"
            id="initial-investment"
            value={initialInvestment}
            onChange={handleInitialInvestmentChange}
            required
          />
        </p>
        <p>
          <label htmlFor="annual-investment">Annual Investment:</label>
          <input
            type="number"
            id="annual-investment"
            value={annualInvestment}
            onChange={handleAnnualInvestmentChange}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">Expected Return:</label>
          <input
            type="number"
            id="expected-return"
            value={expectedReturn}
            onChange={handleExpectedReturnChange}
            required
          />
        </p>
        <p>
          <label htmlFor="duration">Duration:</label>
          <input
            type="number"
            id="duration"
            value={duration}
            onChange={handleDurationChange}
            required
          />
        </p>
      </div>
    </section>
  );
}
