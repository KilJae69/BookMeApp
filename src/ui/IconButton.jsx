
const hoverColorClasses = {
  "rose-600": "group-hover:text-rose-600",
};

function IconButton({
  type = "button",
  Icon,
  onClick,
  ariaLabel,
  className = "",
  hoverIconColor = "rose-400",
}) {
 
  const hoverClass =
    hoverColorClasses[hoverIconColor] || hoverColorClasses["rose-600"];

  return (
    <button
    type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`flex items-center justify-center w-7 h-7 relative group ${className}`}
    >
      <Icon className={`z-10 h-5 w-5 text-gray-700 ${hoverClass}`} />
      <div className="absolute inset-0 bg-gray-200 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
    </button>
  );
}

export default IconButton;
