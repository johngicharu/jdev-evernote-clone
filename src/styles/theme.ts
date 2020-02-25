const theme = {
  // Colors
  colors: {
    backgroundGradient: `linear-gradient(180deg, #7b4397, #dc2430)`,
    backgroundGradientDark: `linear-gradient(180deg, #141e30, #243b55)`,
    textLightColor: "#f3f3f3",
    textDarkColor: "#141e30",
    effectColor: "dodgerblue"
  },

  // Widths
  drawerOpenWidth: 250,
  drawerClosedWidth: 60,
  notesWidth: 350,

  // Others
  transition: "all 300ms ease"
};

export type ITheme = typeof theme;

export default theme;
