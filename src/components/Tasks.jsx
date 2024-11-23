import { useState } from "react";

export default function Tasks({ project, addTask, deleteTask }) {
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const addTaskClick = () => {
    addTask(project.id, task);
    setTask("");
  };

  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <div className="flex items-center gap-4">
        <input
          onChange={handleChange}
          type="text"
          className="rounded-sm px-2 py-1 bg-stone-200 w-64"
          value={task}
        />
        <button
          onClick={addTaskClick}
          className="bg-stone-700 hover:bg-stone-950 px-2 py-1 rounded-md text-stone-200 hover:text-stone-100"
        >
          Add Task
        </button>
      </div>
      {!project.tasks.length ? (
        <p className="text-stone-800 my-4">No tasks added yet.</p>
      ) : (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {project.tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.data}</span>
              <button
                onClick={() => deleteTask(project.id, task.id)}
                className="text-stone-800 hover:text-red-500"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
