import { BrowserRouter as Router,Routes, Route } from "react-router-dom"; 
import './App.css'
import Listlivres from './components/livres/Listlivres'
import Menu from "./components/Menu";
import Listauteurs from "./components/auteurs/Listauteurs";
import Listediteurs from "./components/editeurs/Listediteurs";
import Listspecialites from "./components/specialites/Listspecialites";
import Home from "./components/Home";

const App=() => {
  

  return (
    
      <div> 
        <Router>
          <Menu/>
          <Routes>
            <Route path="/livres" element={<Listlivres/>} />
            <Route path="/auteurs" element={<Listauteurs/>} />
            <Route path="/editeurs" element={<Listediteurs/>} />
            <Route path="/specialites" element={<Listspecialites/>} />
            <Route path="/accu" element={<Home/>} />
          </Routes>
        </Router>

      </div>
        
   
  );
}

export default App
