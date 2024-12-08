import { BrowserRouter as Router,Routes, Route } from "react-router-dom"; 
import './App.css'
import Listlivres from './components/livres/Listlivres'
import Menu from "./components/Menu";
import Listauteurs from "./components/auteurs/Listauteurs";
import Listediteurs from "./components/editeurs/Listediteurs";
import Listspecialites from "./components/specialites/Listspecialites";

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
          </Routes>
        </Router>

      </div>
        
   
  );
}

export default App
