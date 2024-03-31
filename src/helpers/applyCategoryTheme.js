const colorThemes = {
  default: {
    background: "bg-rose-50 dark:bg-bgDarkPrimary bg-opacity-50",
    hoverBackground: "hover:bg-rose-100",
    textDark: "text-primary600 dark:text-primaryDark600",
    textLight: "text-primary500 dark:text-primaryDark500",
    textLightHover: "hover:text-primary600 dark:hover:text-primaryDark600",
    textLightGroupHover:
      "group-hover:text-primary600 dark:group-hover:text-primaryDark600",
    border: "border-primary600 dark:border-primaryDark600",
    darkBg: "bg-primary600 dark:bg-primaryDark600",
    hoverDarkBg: "group-hover:bg-primary500 dark:group-hover:bg-primaryDark500",
  },
  blue: {
    background: "bg-blue-50 dark:bg-bgDarkPrimary bg-opacity-50",
    hoverBackground: "hover:bg-blue-100 dark:hover:bg-blue-100",
    textDark: "text-blue-600 dark:text-blue-600",
    textLight: "text-blue-400 dark:text-blue-400",
    textLightHover: "hover:text-blue-600 dark:hover:text-blue-600",
    textLightGroupHover: "group-hover:text-blue-600",
    border: "border-blue-600 dark:border-blue-600",
    darkBg: "bg-blue-600 dark:bg-blue-600",
    hoverDarkBg: "group-hover:bg-blue-500 dark:group-hover:bg-blue-500",
  },
  green: {
    background: "bg-green-50 dark:bg-bgDarkPrimary bg-opacity-50",
    hoverBackground: "hover:bg-green-100 dark:hover:bg-green-100",
    textDark: "text-green-600 dark:text-green-600",
    textLight: "text-green-400 dark:text-green-400",
    textLightHover: "hover:text-green-600 dark:hover:text-green-600",
    textLightGroupHover: "group-hover:text-green-600 dark:group-hover:text-green-600",
    border: "border-green-600 dark:border-green-600",
    darkBg: "bg-green-600 dark:bg-green-600",
    hoverDarkBg: "group-hover:bg-green-500 dark:group-hover:bg-green-500",
  },
  yellow: {
    background: "bg-yellow-50 dark:bg-bgDarkPrimary bg-opacity-50",
    hoverBackground: "hover:bg-yellow-100 dark:hover:bg-yellow-100",
    textDark: "text-yellow-600 dark:text-yellow-600",
    textLight: "text-yellow-400 dark:text-yellow-400",
    textLightHover: "hover:text-yellow-600 dark:hover:text-yellow-600",
    textLightGroupHover: "group-hover:text-yellow-600",
    border: "border-yellow-400 dark:border-yellow-400",
    darkBg: "bg-yellow-600 dark:bg-yellow-600",
    hoverDarkBg: "group-hover:bg-yellow-500 dark:group-hover:bg-yellow-500",
  },
  purple: {
    background: "bg-purple-50 dark:bg-bgDarkPrimary bg-opacity-50",
    hoverBackground: "hover:bg-purple-100 dark:hover:bg-purple-100",
    textDark: "text-purple-600 dark:text-purple-600",
    textLight: "text-purple-400 dark:text-purple-400",
    textLightHover: "hover:text-purple-600 dark:hover:text-purple-600",
    textLightGroupHover: "group-hover:text-purple-600 dark:group-hover:text-purple-600",
    border: "border-purple-600 dark:border-purple-600",
    darkBg: "bg-purple-600 dark:bg-purple-600",
    hoverDarkBg: "group-hover:bg-purple-500 dark:group-hover:bg-purple-500",
  },
  pink: {
    background: "bg-pink-50 dark:bg-bgDarkPrimary bg-opacity-50",
    hoverBackground: "hover:bg-pink-100 dark:hover:bg-pink-100",
    textDark: "text-pink-600 dark:text-pink-600",
    textLight: "text-pink-400 dark:text-pink-400",
    textLightHover: "hover:text-pink-600 dark:hover:text-pink-600",
    textLightGroupHover: "group-hover:text-pink-600  dark:group-hover:text-pink-600",
    border: "border-pink-600 dark:border-pink-600",
    darkBg: "bg-pink-600 dark:bg-pink-600",
    hoverDarkBg: "group-hover:bg-pink-500 dark:group-hover:bg-pink-500",
  },
  
};

export function applyCategoryTheme(color) {
  return colorThemes[color];
}
