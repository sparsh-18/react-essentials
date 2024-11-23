import { forwardRef, useRef } from "react";

export default forwardRef(function Input({ label, isTextArea, ...props }, ref) {
  const inputClasses =
    "w-full border-b-2 p-1 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-500";

  return (
    <p className="flex flex-col my-4 gap-1">
      <label
        className="uppercase font-semibold text-stone-500 text-sm"
      >
        {label}
      </label>

      {isTextArea ? (
        <textarea
          ref={ref}
          className={inputClasses}
          {...props}
        />
      ) : (
        <input ref={ref} className={inputClasses} {...props} />
      )}
    </p>
  );
});
