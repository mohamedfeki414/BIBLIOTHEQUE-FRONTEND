import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Listlivres from './components/livres/Listlivres';
import Menu from "./components/Menu";
import Listauteurs from "./components/auteurs/Listauteurs";
import Listediteurs from "./components/editeurs/Listediteurs";
import Listspecialites from "./components/specialites/Listspecialites";
import Home from "./components/Home";
import Editauteurs from "./components/auteurs/Editauteurs";
import Insertauteurs from "./components/auteurs/Insertauteurs";
import Editediteurs from "./components/editeurs/Editediteurs";
import Insertediteurs from "./components/editeurs/Insertediteurs";
import Editspecialites from "./components/specialites/Editspecialites";
import Insertspecialites from "./components/specialites/Insertspecialites";
import Editlivres from "./components/livres/Editlivres";
import Insertlivres from "./components/livres/Insertlivres";
import Listlivrestable from "./components/livres/Listlivrestable";
import Cart from "./components/users/Cart";
import Login from "./components/Login";

import '@mui/material/styles';


const App = () => {
  return (
    <div>
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/livres" element={<Listlivres />} />
          <Route path="/livres/edit/:id" element={<Editlivres />} />
          <Route path="/livres/add" element={<Insertlivres />} />
          <Route path="/listlivres" element={<Listlivrestable />} />
          
          <Route path="/auteurs" element={<Listauteurs />} />
          <Route path="/auteurs/edit/:id" element={<Editauteurs />} />
          <Route path="/auteurs/add" element={<Insertauteurs />} />
          
          <Route path="/editeurs" element={<Listediteurs />} />
          <Route path="/editeurs/edit/:id" element={<Editediteurs />} />
          <Route path="/editeurs/add" element={<Insertediteurs />} />
          
          <Route path="/specialites" element={<Listspecialites />} />
          <Route path="/specialites/edit/:id" element={<Editspecialites />} />
          <Route path="/specialites/add" element={<Insertspecialites />} />
          
          <Route path="/accu" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/login" element={<Login/>}/>
          
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
