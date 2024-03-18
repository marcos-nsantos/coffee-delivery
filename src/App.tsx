import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default.ts";
import { GlobalStyle } from "./styles/global.ts";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router.tsx";
import { CoffeeProvider } from "./context/CoffeeProvider.tsx";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeeProvider>
          <Router />
        </CoffeeProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
}
