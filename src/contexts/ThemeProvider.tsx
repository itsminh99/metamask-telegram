import CssBaseline from "@mui/material/CssBaseline";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { palette, typography, breakpoints } from "@utils/material";

export interface Options {
  key: string;
  prepend?: boolean;
}

type ThemeProviderProps = {
  children: React.ReactNode;
};

const theme = createTheme({
  palette,
  typography,
  breakpoints,
});

const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props;

  return (
    <EmotionThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </EmotionThemeProvider>
  );
};

export default ThemeProvider;
