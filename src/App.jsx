import { BrowserRouter as Router,Routes, Route } from "react-router-dom"; 
import './App.css'
import Listlivres from './components/livres/Listlivres'
import Menu from "./components/Menu";

const App=() => {
  

  return (
    
      <div> 
        <Router>
          <Menu/>
          <Routes>
            <Route path="/livres" element={<Listlivres/>} />
          </Routes>
        </Router>

      </div>
        
   
  );
}

export default App
