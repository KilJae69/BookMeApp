import { Link } from "react-router-dom";
import  { forwardRef } from "react";

const Button = forwardRef(
  (
    {
      to,
      children,
      variation,
      onClick,
      disabled,
      type = "button",
      className = "",
    },
    ref
  ) => {
    
    const base =
      "disabled:opacity-50 disabled:cursor-not-allowed rounded-md  text-md font-semibold  shadow-sm  focus:outline-none focus:ring focus:ring-lightOutline dark:focus:ring-darkOutline transition-colors duration-300";

    const styles = {
      primary:
        base +
        " text-white px-4 py-2.5 bg-primary600 dark:bg-primaryDark600 hover:bg-primary500 dark:hover:bg-primaryDark500",
      form:
        base +
        " text-white bg-primary600 dark:bg-primaryDark600 hover:bg-primary500 dark:hover:bg-primaryDark500 flex flex-1 w-full justify-center px-3 py-1.5",
      link: " focus:outline-none rounded-md focus:border focus:border-lightOutline dark:focus:border-darkOutline text-sm font-semibold leading-6 text-textPrimary900 dark:text-textPrimaryDark transition-colors duration-300 hover:text-primary600 dark:hover:text-primaryDark600 ",
      cancel:
        "rounded-md bg-secondaryBg dark:bg-secondaryBgDark text-md font-semibold text-primary600 dark:text-textPrimaryDark shadow-sm hover:bg-primary600 dark:hover:bg-primaryDark600 hover:text-white dark:hover:text-white focus:outline-none focus:ring focus:ring-lightOutline dark:focus:ring-darkOutline transition-colors duration-300 border border-primary600 dark:border-primaryDark600 px-3 py-1.5",
      add:
        base +
        " text-primary500 dark:text-white border border-primary500 dark:border-primaryDark500 bg-secondaryBg dark:bg-secondaryBgDark hover:bg-primary600 dark:hover:bg-primaryDark600 hover:text-white dark:hover:text-white px-2 py-1",
    };
    const combinedClassNames = `${styles[variation]} ${className}`;

    if (to) {
      return (
        <Link ref={ref} to={to} className={combinedClassNames}>
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
        className={combinedClassNames}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export default Button;
