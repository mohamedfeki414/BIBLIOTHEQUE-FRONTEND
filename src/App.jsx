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
import Login from "./components/Login";
import Editlivres from "./components/livres/Editlivres";
import Insertlivres from "./components/livres/Insertlivres";
import Listlivrestable from "./components/livres/Listlivrestable";
import Cart from "./components/users/Cart";

// Fonction pour vérifier si l'utilisateur est connecté
const isAuthenticated = () => {
  return localStorage.getItem('authToken'); // ou utilise un contexte d'authentification
}

// Composant pour protéger les routes
const ProtectedRoute = ({ element, ...rest }) => {
  return (
    <Route
      {...rest}
      element={isAuthenticated() ? element : <Navigate to="/login" replace />}
    />
  );
}

const App = () => {
  return (
    <div>
      <Router>
        <Menu />
        <Routes>
          {/* Route de redirection vers la page de login si l'utilisateur n'est pas authentifié */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          
          {/* Routes publiques */}
          <Route path="/login" element={<Login />} />
          
          {/* Routes protégées (requièrent une authentification) */}
          <ProtectedRoute path="/livres" element={<Listlivres />} />
          <ProtectedRoute path="/livres/edit/:id" element={<Editlivres />} />
          <ProtectedRoute path="/livres/add" element={<Insertlivres />} />
          <ProtectedRoute path="/listlivres" element={<Listlivrestable />} />
          
          <ProtectedRoute path="/auteurs" element={<Listauteurs />} />
          <ProtectedRoute path="/auteurs/edit/:id" element={<Editauteurs />} />
          <ProtectedRoute path="/auteurs/add" element={<Insertauteurs />} />
          
          <ProtectedRoute path="/editeurs" element={<Listediteurs />} />
          <ProtectedRoute path="/editeurs/edit/:id" element={<Editediteurs />} />
          <ProtectedRoute path="/editeurs/add" element={<Insertediteurs />} />
          
          <ProtectedRoute path="/specialites" element={<Listspecialites />} />
          <ProtectedRoute path="/specialites/edit/:id" element={<Editspecialites />} />
          <ProtectedRoute path="/specialites/add" element={<Insertspecialites />} />
          
          <ProtectedRoute path="/accu" element={<Home />} />
          <ProtectedRoute path="/Cart" element={<Cart />} />
          
          {/* Route de secours pour les pages non trouvées */}
          <Route path="*" element={<div>Page non trouvée</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
