import Header from "./components/Header";
import UserInput from "./components/UserInput";
import ResultTable from "./components/ResultTable";
import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment.js";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  // every time the user inputs the app function will rexecute as the state is changed
  function handleUserInputChange(key, value) {
    setUserInput((prev) => {
      return {
        ...prev,
        [key]: +value,
      };
    });
  }

  function calculateResult() {
    // console.log("user input\n", userInput);
    const annualData = calculateInvestmentResults(userInput);
    // console.log("annual data\n", annualData);
    return annualData;
  }

  return (
    <>
      <Header />
      <UserInput
        userInput={userInput}
        handleUserInputChange={handleUserInputChange}
      />
      <ResultTable annualData={calculateResult()} />
    </>
  );
}

export default App;
