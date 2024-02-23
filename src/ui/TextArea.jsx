import React from "react";

const TextArea = React.forwardRef(
  (
    { name, rows = 2, id, className, placeholder, defaultValue, ...rest },
    ref
  ) => {
    return (
      <textarea
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
