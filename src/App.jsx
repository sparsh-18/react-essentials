import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import NoProject from "./components/NoProject";
import Project from "./components/Project";

function App() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(undefined);

  const handleAddProject = (title, desc, dueDate) => {
    const newProject = {
      id: uuidv4(),
      title,
      desc,
      dueDate,
      tasks: [],
    };
    setProjects((prev) => {
      return [...prev, newProject];
    });
  };

  const handleDeleteProject = (projectId) => {
    setProjects((prev) => {
      return prev.filter((project) => project.id !== projectId);
    });
    setSelectedProject(undefined);
  };

  const handleProjectClick = (projectId) => {
    setSelectedProject(projectId);
  };

  const handleAddProjectButton = () => {
    setSelectedProject(null);
  };

  const resetSelectedProject = () => {
    setSelectedProject(undefined);
  };

  const deleteTask = (projectId, taskId) => {
    let updatedProject = projects.find((project) => project.id === projectId);
    updatedProject.tasks = updatedProject.tasks.filter(
      (task) => task.id !== taskId
    );

    setProjects((prev) => {
      return prev.map((project) => {
        if (project.id === projectId) {
          return updatedProject;
        }
        return project;
      });
    });
  };

  const addTask = (projectId, task) => {
    setProjects((prev) => {
      return prev.map((project) => {
        if (project.id === projectId) {
          return {
            ...project,
            tasks: [...project.tasks, { id: uuidv4(), data: task }],
          };
        }
        return project;
      });
    });
  };

  const selectedProjectData = projects.find(
    (project) => project.id === selectedProject
  );

  const renderContent = () => {
    switch (selectedProject) {
      case null:
        return (
          <NewProject
            addProject={handleAddProject}
            resetScreen={resetSelectedProject}
          />
        );
      case undefined:
        return <NoProject />;
      default:
        return (
          <Project
            project={selectedProjectData}
            deleteProject={handleDeleteProject}
            addTask={addTask}
            deleteTask={deleteTask}
          />
        );
    }
  };

  return (
    <main className="h-screen flex gap-8">
      <Sidebar
        projects={projects}
        selectedProject={selectedProject}
        handleProjectClick={handleProjectClick}
        addProjectClick={handleAddProjectButton}
      />
      {renderContent()}
    </main>
  );
}

export default App;
