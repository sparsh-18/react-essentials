import { useState } from "react";

export default function Sidebar({ projects }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (projectId) => {
    // console.log("Selected Project: ", projectId);
    setSelectedProject(projectId);
  };

  return (
    <aside className="bg-stone-900 text-stone-50 px-8 py-16 rounded-tr-xl w-1/3 md:w-72">
      <h2 className="uppercase mb-8 font-bold text-stone-200 md:text-xl tracking-wide">
        Your Projects
      </h2>
      <div>
        <button className="px-4 py-2 text-xs md:text-base bg-stone-700 hover:bg-stone-600 text-stone-300 hover:text-stone-100 rounded-md">
          + Add Project
        </button>
      </div>
      <ul className="my-8 text-stone-200">
        {projects.map((project, index) => (
          <li
            key={index}
            className={`my-2 px-2 py-1 hover:bg-stone-800 hover:cursor-pointer ${
              selectedProject !== null && selectedProject === index ? "bg-stone-800" : ""
            }`}
            onClick={() => handleProjectClick(index)}
          >
            {project}
          </li>
        ))}
      </ul>
    </aside>
  );
}
