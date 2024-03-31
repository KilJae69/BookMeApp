import { forwardRef } from "react";

const UpdateUserInput = forwardRef(
  ({ id, label, disabled, errors, ...rest }, ref) => {
    return (
      <div className="flex flex-col md:flex-row items-start border-b-[1px] py-2 gap-4">
        <label
          htmlFor={id}
          className="min-w-[30%] text-sm font-medium text-textPrimary700 dark:text-textPrimaryDark"
        >
          {label}
        </label>
        <div className="w-full">
          <input
            ref={ref}
            id={id}
            disabled={disabled}
            className={`disabled:cursor-not-allowed disabled:text-gray-400 dark:disabled:bg-gray-700 dark:disabled:text-gray-400 flex-1 p-2 w-full shadow-sm focus:ring-2 focus:ring-lightOutline dark:focus:ring-darkOutline dark:text-white dark:bg-secondaryBgDark focus:outline-none text-sm border-[1px] border-gray-300 rounded-md xl:max-w-[50%] ${
              errors && errors[id]
                ? "border-primary500 dark:border-[2px]"
                : "border-neutral-300"
            }
          ${
            errors && errors[id]
              ? "focus:border-primary500"
              : "focus:border-lightOutline dark:focus:border-darkOutline"
          }`}
            {...rest}
          />
          {errors && errors[id] && (
            <p className="text-red-500 text-xs mt-1">{errors[id].message}</p>
          )}
        </div>
      </div>
    );
  }
);

UpdateUserInput.displayName = "UpdateUserInput";

export default UpdateUserInput;
