import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import Affichespecialites from './Affichespecialites';

const Listespecialitiestable = () => {
    const[specialities,SetSpecialities]=useState([]);
    const getSpecialities=async()=>{
        await axios.get("http://localhost:5000/api/specialites")
        .then(res=>{
            SetSpecialities(res.data)
        })
        .catch(error=>{ 
            console.log(error) 
          }) 
        } 
        useEffect(()=>{
            getSpecialities()
        },[])
        const handleDelete = async (id) => {
          try {
            await axios.delete(`http://localhost:5000/api/specialities/${id}`);
            SetSpecialities(specialities.filter((c) => c._id !== id));
          } catch (error) {
            console.log(error);
          }
        };
  return (
    <div>
      <h2 class="special-h2">Listes Des Specialites</h2>
    <Link to="/specialites/add">
                   <Button variant="success" style={{ backgroundColor: 'green' }}>
                   <i className="fa-solid fa-square-plus"  style={{color: "#fcfcfd"}}></i>
                   Nouveau
                   </Button>
                   </Link>
    <Affichespecialites   specialities={specialities} handleDelete={handleDelete}/>
 </div>
  )
}

export default Listespecialitiestable
