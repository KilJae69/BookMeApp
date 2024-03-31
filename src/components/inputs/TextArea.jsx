import React from "react";

const TextArea = React.forwardRef(
  (
    { name, rows = 3, id,disabled, className, placeholder, defaultValue, ...rest },
    ref
  ) => {
    return (
      <textarea
        disabled={disabled}
        ref={ref}
        rows={rows}
        name={name}
        id={id}
        className={className}
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...rest}
      />
    );
  }
);

TextArea.displayName = "TextArea";
export default TextArea;
