import novelaTheme from "@narative/gatsby-theme-novela/src/gatsby-plugin-theme-ui";

export default {
  ...novelaTheme,
  initialColorMode: `dark`,
  colors: {
    ...novelaTheme.colors,
    primary: "#33455B",
    secondary: "#73737D",
    accent: "#82b2ff",
    grey: "#73737D",
    background: "#fff",
    gradient: "none",
    modes: {
      ...novelaTheme.colors.modes,
      dark: {
        ...novelaTheme.colors.modes.dark,
        gradient: "none",
        accent: "#91BDFA"
      }
    }
  }
};
