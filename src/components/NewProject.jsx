import { useRef } from "react";
import Input from "./Input";

export default function NewProject({ addProject, resetScreen }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();
  
  const resetInputs = () => {
    titleRef.current.value = "";
    descriptionRef.current.value = "";
    dueDateRef.current.value = "";
    resetScreen();
  };
  
  const handleSave = () => {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const dueDate = dueDateRef.current.value;

    addProject(title, description, dueDate);
    resetInputs();
  };

  return (
    <div className="mt-16 w-3/5 px-2 md:w-[35rem] md:px-0">
      <menu className="flex justify-end items-center gap-4">
        <li>
          <button
            onClick={resetInputs}
            className="bg-stone-200 rounded-md px-4 py-2 text-stone-800 hover:text-stone-950 hover:bg-stone-300"
          >
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleSave}
            className="rounded-md px-6 py-2 bg-stone-800 text-stone-200 hover:text-stone-50 hover:bg-stone-950"
          >
            Save
          </button>
        </li>
      </menu>
      <Input ref={titleRef} id="title" label="Title" type="text" />
      <Input
        ref={descriptionRef}
        id="description"
        label="Description"
        isTextArea={true}
      />
      <Input ref={dueDateRef} id="dueDate" label="Due Date" type="date" />
    </div>
  );
}
