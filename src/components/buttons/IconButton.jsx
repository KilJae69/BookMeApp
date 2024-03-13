

function IconButton({
  type = "button",
  Icon,
  onClick,
  ariaLabel,
  className = "",
 
}) {
 
  return (
    <button
    type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`flex items-center justify-center w-7 h-7 relative group ${className}`}
    >
      <div className="absolute inset-0 bg-gray-200 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
      <Icon className={`relative h-5 w-5  ${className}`} />
    </button>
  );
}

export default IconButton;
