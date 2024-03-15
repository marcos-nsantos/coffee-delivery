import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts";
import { Home } from "./pages/Home";
import { Success } from "./pages/Success";
import { Checkout } from "./pages/Checkout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  );
}
