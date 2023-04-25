import { Link, Route, Routes } from "react-router-dom"
import ImportCSV from "./components/ImportCSV"
import Repos from "./components/Repos"
import logo from "./assets/logo.png"
import "./styles.css"

function App() {
 
  return (
    <>
      <header className="header">
        <img src={logo} alt="logoDH" className="logo"/>
        <div className="titulo2">Introducción a la Informática</div>
        <div className="links">
        <Link className="titulo1 link" to="/mostrardatos">Comprobar</Link>
        <Link className="titulo1 link" to="/importardatos">Cargar</Link>
        </div>
      </header>
      <Routes>
        <Route path='/mostrardatos' element={<Repos/>}/>
        <Route path='/importardatos' element={<ImportCSV/>}/>
      </Routes>
    </>
  )
}

export default App
