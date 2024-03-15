import { Header } from "./components/Header";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default.ts";
import { GlobalStyle } from "./styles/global.ts";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <div>Coffee Delivery</div>
      <GlobalStyle />
    </ThemeProvider>
  );
}
