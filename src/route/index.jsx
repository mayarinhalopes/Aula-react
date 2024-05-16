import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Carrinho } from "../pages/Carrinho";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Produto } from "../pages/Produto";
import { MinhaRotas } from "./v2/MinhaRotas";
import { BaseSistema } from "./v2/BaseSistema";
export function RouteApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/produtos" element={<Produto />} />
        <Route path="/carrinho" element={<Carrinho />} />
      <Route path="/v2/*" element={<BaseSistema componente={MinhaRotas} />} />
      </Routes>
    </BrowserRouter>
  );
}
