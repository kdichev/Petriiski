import React, { Fragment } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import createTheme from "./createTheme";
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createTheme();

const ThemeProvider = ({ children }) => (
  <Fragment>
    <CssBaseline />
    <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
  </Fragment>
);

export default ThemeProvider;
