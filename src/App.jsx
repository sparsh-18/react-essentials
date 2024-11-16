import Sidebar from "./components/Sidebar";

function App() {

  const projects = [
    "Project 1", "Project 2", "Project 3"
  ]

  return (
    <main className="h-screen my-8">
      <Sidebar projects={projects}/>
    </main>
  );
}

export default App;
