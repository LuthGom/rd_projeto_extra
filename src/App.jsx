import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cadastro from "./pages/Cadastro/Cadastro";
import Medicamentos from "./pages/Medicamentos/Medicamentos";
import Carrinho from "./pages/Carrinho/Carrinho";
import Ofertas from "./pages/Ofertas/Ofertas";
import Perfil from "./pages/Perfil/Perfil";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/medicamentos" element={<Medicamentos />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/perfil/:id" element={<Perfil />} />
          <Route path="/ofertas" element={<Ofertas />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
