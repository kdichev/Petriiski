import { createMuiTheme } from "@material-ui/core/styles";

const createTheme = () =>
  createMuiTheme({
    palette: {
      primary: { main: "#000" },
      secondary: { main: "#fff" }
    }
  });

export default createTheme;
