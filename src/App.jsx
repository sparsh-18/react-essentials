import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";

function App() {

  const projects = [
    "Project 1", "Project 2", "Project 3"
  ]

  return (
    <main className="h-screen flex gap-8">
      <Sidebar projects={projects}/>
      <NewProject/>
    </main>
  );
}

export default App;
