const theme: ITheme = {
  backgroundGradient: `linear-gradient(180deg, #7b4397, #dc2430)`,
  backgroundGradientDark: `linear-gradient(180deg, #141e30, #243b55)`,
  white: "#f2f2f2",
  black: "#141e30",
  drawerOpenWidth: 250,
  drawerClosedWidth: 60,
  notesWidth: 250,
  transition: "all 300ms ease",
  secondary: "dodgerblue"
};

export type ITheme = {
  backgroundGradient: string;
  backgroundGradientDark: string;
  white: string;
  black: string;
  drawerOpenWidth: number;
  drawerClosedWidth: number;
  notesWidth: number;
  transition: string;
  secondary: string;
};

export default theme;
