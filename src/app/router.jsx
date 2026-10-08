import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import ClienteForm from "../features/cliente/page/ClienteForm";
import ClientePage from "../features/cliente/page/ClientePage";
import Home from "../features/home/page/Home";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redireciona a raiz para a página de clientes */}
        <Route path="/" element={<Home />} />
        <Route path="/cliente" element={<ClientePage />} />
        <Route path="/cliente-form" element={<ClienteForm />} />
      </Routes>
    </BrowserRouter>
  );
}