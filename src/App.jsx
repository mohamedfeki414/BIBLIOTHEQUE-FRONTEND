import { BrowserRouter as Router,Routes, Route } from "react-router-dom"; 
import './App.css'
import Listlivres from './components/livres/Listlivres'

const App=() => {
  

  return (
    
      <div> 
        <Router>
          <Routes>
            <Route path="/livres" element={<Listlivres/>} />
          </Routes>
        </Router>

      </div>
        
   
  );
}

export default App
