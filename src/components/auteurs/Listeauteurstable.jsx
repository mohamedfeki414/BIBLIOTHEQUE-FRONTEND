import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import Afficheauteurs from './Afficheauteurs';

const Listeauteurstable = () => {
    const [auteurs, SetAuteurs] = useState([]);

  const getAuteurs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/auteurs");
      SetAuteurs(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAuteurs();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/auteurs/${id}`);
      SetAuteurs(auteurs.filter((c) => c._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
       <h2>Listes Des Auteurs</h2>
    <Link to="/auteurs/add">
                   <Button variant="success" style={{ backgroundColor: 'green' }}>
                   <i className="fa-solid fa-square-plus"  style={{color: "#fcfcfd"}}></i>
                   Nouveau
                   </Button>
                   </Link>
    <Afficheauteurs   auteurs={auteurs} handleDelete={handleDelete}/>
 </div>
  )
}

export default Listeauteurstable
