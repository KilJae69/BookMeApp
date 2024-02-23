const colorThemes = {
  default: {
    background: "bg-rose-50 bg-opacity-50",
    hoverBackground: "hover:bg-rose-100",
    text: "text-rose-600",
    border: "border-rose-600",
    borderBottom: "bg-rose-600",
  },
  blue: {
    background: "bg-blue-50 bg-opacity-50",
    hoverBackground: "hover:bg-blue-100",
    text: "text-blue-600",
    border: "border-blue-600",
    borderBottom: "bg-blue-600",
  },
  green: {
    background: "bg-green-50 bg-opacity-50",
    hoverBackground: "hover:bg-green-100",
    text: "text-green-600",
    border: "border-green-600",
    borderBottom: "bg-green-600",
  },
  yellow: {
    background: "bg-yellow-50 bg-opacity-50",
    hoverBackground: "hover:bg-yellow-100",
    text: "text-yellow-400",
    border: "border-yellow-400",
    borderBottom: "bg-yellow-600",
  },
  purple: {
    background: "bg-purple-50 bg-opacity-50",
    hoverBackground: "hover:bg-purple-100",
    text: "text-purple-600",
    border: "border-purple-600",
    borderBottom: "bg-purple-600",
  },
  pink: {
    background: "bg-pink-50 bg-opacity-50",
    hoverBackground: "hover:bg-pink-100",
    text: "text-pink-600",
    border: "border-pink-600",
    borderBottom: "bg-pink-600",
  },
  fuchsia: {
    background: "bg-fuchsia-50 bg-opacity-50",
    hoverBackground: "hover:bg-fuchsia-100",
    text: "text-fuchsia-600",
    border: "border-fuchsia-600",
    borderBottom: "bg-fuchsia-600",
  },
};

export function applyCategoryTheme(color) {
    const defaultTheme = {
        background: "bg-gray-100 bg-opacity-75",
        text: "text-gray-800",
        border: "border-gray-300",
    };

    return colorThemes[color] || defaultTheme;
}
 

