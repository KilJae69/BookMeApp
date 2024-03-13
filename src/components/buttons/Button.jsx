import { Link } from "react-router-dom";
import React from "react"; // Ensure React is imported for using React.forwardRef

const Button = React.forwardRef(
  ({ to, children, variation, onClick, disabled, type = "button" }, ref) => {
    // Notice the ref parameter here
    const base =
      "rounded-md bg-rose-600 text-md font-semibold text-white shadow-sm hover:bg-rose-500 focus:outline-none focus:ring focus:ring-rose-200 focus:ring-offset-2 transition-colors duration-300";

    const styles = {
      primary: base + " px-4 py-2.5 ",
      form: base + " flex w-full justify-center px-3 py-1.5",
      link: "text-sm font-semibold leading-6 text-gray-900",
      cancel:
        "rounded-md bg-white text-md font-semibold text-rose-600 shadow-sm hover:bg-rose-600 hover:text-white focus:outline-none focus:ring focus:ring-rose-200 focus:ring-offset-2 transition-colors duration-300 border border-rose-600 px-3 py-1.5",
    };

    if (to) {
      return (
        <Link ref={ref} to={to} className={styles[variation]}>
          {children} <span aria-hidden="true">&rarr;</span>
        </Link>
      );
    }

    // Using the ref on the button element
    return (
      <button
        ref={ref}
        disabled={disabled}
        type={type}
        className={styles[variation]}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export default Button;
