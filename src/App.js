import React from "react";
import ThemeProvider from "./theme/ThemeProvider";
import Router from "./Router";

const App = () => {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
};

export default App;
