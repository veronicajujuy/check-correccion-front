import { Link, Route, Routes } from "react-router-dom";
import ImportCSV from "./components/ImportCSV";
import Repos from "./components/Repos";
import logo from "./assets/logogit.svg";
import "./styles.css";
import Index from "./components/Index";

function App() {
  return (
    <>
      <header className="header">
        <Link to="/">
          <img src={logo} alt="logoDH" className="logo" />
        </Link>
        <div className="titulo2">Comprobar Repositorios</div>
        <div className="links">
          <Link className="titulo1 link" to="/importardatos">
            Cargar
          </Link>
          <Link className="titulo1 link" to="/mostrardatos">
            Comprobar
          </Link>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/mostrardatos" element={<Repos />} />
        <Route path="/importardatos" element={<ImportCSV />} />
      </Routes>
    </>
  );
}

export default App;
