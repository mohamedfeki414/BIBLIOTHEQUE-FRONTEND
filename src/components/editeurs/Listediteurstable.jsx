import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import Affichediteurs from './Affichediteurs';

const Listediteurstable = () => {
    const [editeurs, SetEditeurs] = useState([]);

    const getEditeurs=async()=>{
      try {
        const res = await axios.get("http://localhost:5000/api/editeurs");
        SetEditeurs(res.data);
      } catch (error) {
        console.log(error);
      }
    };
        useEffect(()=>{
            getEditeurs()
        },[])
        
        
        const handleDelete = async (id) => {
          try {
            await axios.delete(`http://localhost:5000/api/editeurs/${id}`);
            SetEditeurs(editeurs.filter((c) => c._id !== id));
          } catch (error) {
            console.log(error);
          }
        };
  return (
    <div>
      <h2>Listes Des Editeurs</h2>
    <Link to="/livres/add">
                   <Button variant="success" style={{ backgroundColor: 'green' }}>
                   <i className="fa-solid fa-square-plus"  style={{color: "#fcfcfd"}}></i>
                   Nouveau
                   </Button>
                   </Link>
    <Affichediteurs   editeurs={editeurs} handleDelete={handleDelete}/>
 </div>
  )
}

export default Listediteurstable
