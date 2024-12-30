import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Affichearticles from './Affichearticles';

const Listlivrestable = () => {
    const[livres,setLivres]=useState([]); 
     
    const getLivres=async()=>{ 
     await axios.get("http://localhost:5000/api/livres") 
      .then(res=>{ 
        setLivres(res.data) 
      } 
    ) 
    .catch(error=>{ 
      console.log(error) 
    }) 
  } 
   
  useEffect(() => { 
      getLivres() 
       },[]) 
  //useAuth();
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/livres/${id}`);
      setLivres(livres.filter((c) => c._id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div>
       <Affichearticles livres={livres} handleDelete={handleDelete}/>
    </div>
  )
}

export default Listlivrestable
