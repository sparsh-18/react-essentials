import reactImg from "./assets/react-core-concepts.png";
import coreImg from "./assets/components.png";
const words = ["Fundamental", "Crucial", "Core"];

function generateRandomNumber(maxValue) {
  return Math.floor(Math.random() * (maxValue + 1));
}

function Header(props) {
  return (
    <header>
      <img src={props.reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {props.description} React concepts you will need for almost any app you
        are going to build!
      </p>
    </header>
  );
}

function CoreConcept(props) {
  return (
    <li>
      <img src={props.img} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </li>
  );
}

function TabButton({ label, onClick }) {
  return (
    <li>
      <button onClick={onClick}>{label}</button>
    </li>
  );
}

function handleClick() {
  console.log("Clicked!");
}

function App() {
  const description = words[generateRandomNumber(2)];
  return (
    <div>
      <Header reactImg={reactImg} description={description} />
      <section id="core-concepts">
        <ul>
          <CoreConcept img={coreImg} title="Title" desc="Desc" />
          <CoreConcept img={coreImg} title="Title" desc="Desc" />
          <CoreConcept img={coreImg} title="Title" desc="Desc" />
        </ul>
      </section>
      <main>
        <h2>Time to get started!</h2>
      </main>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton label="Test" onClick={handleClick} />
        </menu>
      </section>
    </div>
  );
}

export default App;
