const colorThemes = {
  default: {
    background: "bg-rose-50 bg-opacity-50",
    hoverBackground: "hover:bg-rose-100",
    textDark: "text-rose-600",
    textLight: "text-rose-400",
    textLightHover: "hover:text-rose-600",
    textLightGroupHover: "group-hover:text-rose-600",
    border: "border-rose-600",
    darkBg: "bg-rose-600",
    hoverDarkBg: "group-hover:bg-rose-500",
  },
  blue: {
    background: "bg-blue-50 bg-opacity-50",
    hoverBackground: "hover:bg-blue-100",
    textDark: "text-blue-600",
    textLight: "text-blue-400",
    textLightHover: "hover:text-blue-600",
    textLightGroupHover: "group-hover:text-blue-600",
    border: "border-blue-600",
    darkBg: "bg-blue-600",
    hoverDarkBg: "group-hover:bg-blue-500",
  },
  green: {
    background: "bg-green-50 bg-opacity-50",
    hoverBackground: "hover:bg-green-100",
    textDark: "text-green-600",
    textLight: "text-green-400",
    textLightHover: "hover:text-green-600",
    textLightGroupHover: "group-hover:text-green-600",
    border: "border-green-600",
    darkBg: "bg-green-600",
    hoverDarkBg: "group-hover:bg-green-500",
  },
  yellow: {
    background: "bg-yellow-50 bg-opacity-50",
    hoverBackground: "hover:bg-yellow-100",
    textDark: "text-yellow-600",
    textLight: "text-yellow-400",
    textLightHover: "hover:text-yellow-600",
    textLightGroupHover: "group-hover:text-yellow-600",
    border: "border-yellow-400",
    darkBg: "bg-yellow-600",
    hoverDarkBg: "group-hover:bg-yellow-500",
  },
  purple: {
    background: "bg-purple-50 bg-opacity-50",
    hoverBackground: "hover:bg-purple-100",
    textDark: "text-purple-600",
    textLight: "text-purple-400",
    textLightHover: "hover:text-purple-600",
    textLightGroupHover: "group-hover:text-purple-600",
    border: "border-purple-600",
    darkBg: "bg-purple-600",
    hoverDarkBg: "group-hover:bg-purple-500",
  },
  pink: {
    background: "bg-pink-50 bg-opacity-50",
    hoverBackground: "hover:bg-pink-100",
    textDark: "text-pink-600",
    textLight: "text-pink-400",
    textLightHover: "hover:text-pink-600",
    textLightGroupHover: "group-hover:text-pink-600",
    border: "border-pink-600",
    darkBg: "bg-pink-600",
    hoverDarkBg: "group-hover:bg-pink-500",
  },
  fuchsia: {
    background: "bg-fuchsia-50 bg-opacity-50",
    hoverBackground: "hover:bg-fuchsia-100",
    textDark: "text-fuchsia-600",
    textLight: "text-fuchsia-400",
    textLightHover: "hover:text-fuchsia-600",
    textLightGroupHover: "group-hover:text-fuchsia-600",
    border: "border-fuchsia-600",
    darkBg: "bg-fuchsia-600",
    hoverDarkBg: "group-hover:bg-fuchsia-500",
  },
};

export function applyCategoryTheme(color) {


    return colorThemes[color] ;
}
 

