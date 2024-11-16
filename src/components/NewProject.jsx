import Input from "./Input";

export default function NewProject() {
  return (
    <div className="mt-16 w-3/5 px-2 md:w-[35rem] md:px-0">
      <menu className="flex justify-end items-center gap-4">
        <li>
          <button className="bg-stone-200 rounded-md px-4 py-2 text-stone-800 hover:text-stone-950 hover:bg-stone-300">
            Cancel
          </button>
        </li>
        <li>
          <button className="rounded-md px-6 py-2 bg-stone-800 text-stone-200 hover:text-stone-50 hover:bg-stone-950">
            Save
          </button>
        </li>
      </menu>
      <Input id="title" label="Title" type="text" />
      <Input id="description" label="Description" isTextArea={true} />
      <Input id="dueDate" label="Due Date" type="date" />
    </div>
  );
}
