/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    screens: {
      xs: "375px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        lightOutline: colors.rose["200"],
        darkOutline: colors.indigo["200"],
        primary400: colors.rose["400"],
        primary500: colors.rose["500"],
        primary600: colors.rose["600"],
        primaryDark500: colors.indigo["500"],
        primaryDark600: colors.indigo["600"],
        bgPrimary50: colors.gray["50"],
        bgDarkPrimary: colors.gray["900"],
        secondaryBg: colors.white,
        secondaryBgDark: colors.gray["800"],
        overlayBg: "rgba(17, 24, 39, 0.8)",
        textPrimary400: colors.gray["400"],
        textPrimary500: colors.gray["500"],
        textPrimary700: colors.gray["700"],
        textPrimary900: colors.gray["900"],
        textPrimaryDark: colors.gray["300"],
      },
    },
  },
  plugins: [],
};
