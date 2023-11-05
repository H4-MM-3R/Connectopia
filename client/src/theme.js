// const arr = [
// $base03:    #002b36;
// $base02:    #073642;
// $base01:    #586e75;
// $base00:    #657b83;
// $base0:     #839496;
// $base1:     #93a1a1;
// $base2:     #eee8d5;
// $base3:     #fdf6e3;
// $yellow:    #b58900;
// $orange:    #cb4b16;
// $red:       #dc322f;
// $magenta:   #d33682;
// $violet:    #6c71c4;
// $blue:      #268bd2;
// $cyan:      #2aa198;
// $green:     #859900;
// ]

export const colorTokens = {
  grey: {
    0: "#fdf6e3",
    10: "#eee8d5",
    50: "#839496",
    100: "#657b83",
    200: "#586e75",
    300: "#073642",
    400: "#002b36",
    500: "#002b36",
    700: "#002b36",
    800: "#073642",
    900: "#002b36",
  },
  primary: {
    50: "#073642",
    200: "#fdf6e3",
    500: "#2aa198",
    700: "#fdf6e3",
    800: "#2aa198",
  },
};

export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              dark: colorTokens.primary[200],
              main: colorTokens.primary[500],
              light: colorTokens.primary[800],
            },
            neutral: {
              dark: colorTokens.grey[100],
              main: colorTokens.grey[200],
              mediumMain: colorTokens.grey[300],
              medium: colorTokens.grey[400],
              light: colorTokens.grey[700],
            },
            background: {
              default: colorTokens.grey[900],
              alt: colorTokens.grey[800],
            },
          }
        : {
            primary: {
              dark: colorTokens.primary[700],
              main: colorTokens.primary[500],
              light: colorTokens.primary[50],
            },
            neutral: {
              dark: colorTokens.grey[700],
              main: colorTokens.grey[500],
              mediumMain: colorTokens.grey[400],
              medium: colorTokens.grey[300],
              light: colorTokens.grey[50],
            },
            background: {
              default: colorTokens.grey[10],
              alt: colorTokens.grey[0],
            },
          }),
    },
    typography: {
      fontFamily: ["Rubik", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
