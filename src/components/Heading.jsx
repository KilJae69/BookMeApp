import React from "react";

function Heading({ level = 1, className, children }) {
  const HeadingTag = `h${level}`;

  const baseStyle = "font-bold tracking-tight";

  const finalClassName = `${baseStyle} ${className}`;

  return React.createElement(
    HeadingTag,
    { className: finalClassName },
    children
  );
}

export default Heading;
