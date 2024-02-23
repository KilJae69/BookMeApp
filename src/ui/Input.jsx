import React from "react";

const Input = React.forwardRef(
  (
    {
      id,
      disabled,
      name,
      type,
      autoComplete,
      onChange,
      variation = "form",
      ...rest
    },
    ref
  ) => {
    const base =
      "block w-full border-0 text-gray-900 shadow-sm  ring-inset  placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-200 ";

    const styles = {
      form:
        base + " rounded-md py-1.5 px-3 ring-gray-300 sm:text-sm sm:leading-6",
      app:
        base +
        " peer bg-gray-50 px-2 py-1.5 inset-3 shadow-inner ring-gray-300 sm:text-sm sm:leading-6",
      appSmall: base,
      noBorder: base + " py-4 text-lg font-medium px-3",
    };

    return (
      <input
        onChange={onChange}
        ref={ref}
        id={id}
        name={name}
        type={type}
        disabled={disabled}
        autoComplete={autoComplete}
        className={styles[variation]}
        {...rest}
      />
    );
  }
);
Input.displayName = "Input";
export default Input;
