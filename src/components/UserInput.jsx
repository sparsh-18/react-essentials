import { useState } from "react";

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  function handleUserInputChange(key, value) {
    setUserInput((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">Initial Investment:</label>
          <input
            type="number"
            id="initial-investment"
            value={userInput.initialInvestment}
            onChange={(event) =>
              handleUserInputChange("initialInvestment", event.target.value)
            }
            required
          />
        </p>
        <p>
          <label htmlFor="annual-investment">Annual Investment:</label>
          <input
            type="number"
            id="annual-investment"
            value={userInput.annualInvestment}
            onChange={(event) =>
              handleUserInputChange("annualInvestment", event.target.value)
            }
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
            value={userInput.expectedReturn}
            onChange={(event) =>
              handleUserInputChange("expectedReturn", event.target.value)
            }
            required
          />
        </p>
        <p>
          <label htmlFor="duration">Duration:</label>
          <input
            type="number"
            id="duration"
            value={userInput.duration}
            onChange={(event) =>
              handleUserInputChange("duration", event.target.value)
            }
            required
          />
        </p>
      </div>
    </section>
  );
}
