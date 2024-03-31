import { Link } from "react-router-dom";


function IconButton({
  disabled,
  type = "button",
  Icon,
  onClick,
  ariaLabel,
  className = "",
 to
}) {

  if (to) {
    return (
      <Link
        disabled={disabled}
        to={to}
        className={`flex items-center justify-center w-7 h-7 focus:outline-none focus:border focus:rounded-full focus:border-lightOutline dark:focus:border-darkOutline relative group ${className}`}
        aria-label={ariaLabel}
      >
        <div className="absolute inset-0  bg-gray-200 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
        <Icon className={`relative h-5 w-5  ${className}`} />
      </Link>
    );
  }
 
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`flex items-center justify-center focus:outline-none focus:border focus:rounded-full focus:border-lightOutline dark:focus:border-darkOutline w-7 h-7 relative group ${className}`}
    >
      <div className="absolute inset-0 bg-gray-200  rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
      <Icon className={`relative h-5 w-5 ${className}`} />
    </button>
  );
}

export default IconButton;
