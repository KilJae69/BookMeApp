import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

function SocialButton({ service, size = "24px ",onClick }) {
  const services = {
    google: { icon: <FcGoogle size={size} />, label: "Google" },
    github: { icon: <FaGithub size={size} />, label: "Github" },
  };
  const { icon, label } = services[service];
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-400 transition-colors duration-300 sm:text-sm sm:leading-6"
    >
      {icon}
      <span className="text-sm font-semibold leading-6">{label}</span>
    </button>
  );
}

export default SocialButton;
