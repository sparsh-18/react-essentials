import reactImg from "./assets/react-core-concepts.png";
import coreImg from "./assets/components.png";
import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header";
import TabButton from "./components/TabButton";
import { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "./data";

const words = ["Fundamental", "Crucial", "Core"];

function generateRandomNumber(maxValue) {
  return Math.floor(Math.random() * (maxValue + 1));
}

function App() {
  const [topic, setTopic] = useState("components");
  function handleClick(buttonName) {
    setTopic(buttonName);
  }
  const description = words[generateRandomNumber(2)];
  return (
    <div>
      <Header reactImg={reactImg} description={description} />
      <section id="core-concepts">
        <ul>
          {CORE_CONCEPTS.map((component) => (
            <CoreConcept key={component.title} {...component} />
          ))}

          {/* <CoreConcept image={coreImg} title="Title" desc="Desc" />
          <CoreConcept image={coreImg} title="Title" desc="Desc" /> */}
        </ul>
      </section>
      <main>
        <h2>Time to get started!</h2>
      </main>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton
            isSelected={topic === "components"}
            label="Components"
            onClick={() => handleClick("components")}
          />
          <TabButton
            isSelected={topic === "jsx"}
            label="JSX"
            onClick={() => handleClick("jsx")}
          />
          <TabButton
            isSelected={topic === "props"}
            label="Props"
            onClick={() => handleClick("props")}
          />
          <TabButton
            isSelected={topic === "state"}
            label="State"
            onClick={() => handleClick("state")}
          />
        </menu>
        <div id="tab-content">
          <h3>{EXAMPLES[topic]?.title}</h3>
          <p>{EXAMPLES[topic]?.description}</p>
          <pre>
            <code>{EXAMPLES[topic]?.code}</code>
          </pre>
        </div>
      </section>
    </div>
  );
}
export default App;
