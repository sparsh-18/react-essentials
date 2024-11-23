import Tasks from "./Tasks";

export default function Project({ project, deleteProject, addTask, deleteTask }) {
  return (
    <div className="mt-16 w-3/5 px-2 md:w-[35rem]">
      <header className="border-b-2 mb-4 pb-5 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <button onClick={() => deleteProject(project.id)} className="border-red-300 border-2 rounded-md px-2 py-1 text-red-800 hover:text-stone-100 hover:bg-red-600">
            Delete
          </button>
        </div>
        <p className="text-stone-400 py-2 mb-4">
          {new Date(project.dueDate).toDateString()}
        </p>
        <p className="text-stone-600 whitespace-pre-wrap">{project.desc}</p>
      </header>

      <Tasks project={project} addTask={addTask} deleteTask={deleteTask}/>
    </div>
  );
}
