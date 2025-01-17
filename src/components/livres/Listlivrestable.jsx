import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Affichelivres from './Affichelivres';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'
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
      <h2 class="special-h2">Liste des Livres </h2> 
       <Link to="/livres/add">
                      <Button variant="success" style={{ backgroundColor: 'green' }}>
                      <i className="fa-solid fa-square-plus"  style={{color: "#fcfcfd"}}></i>
                      Nouveau
                      </Button>
                      </Link>
       <Affichelivres livres={livres} handleDelete={handleDelete}/>
    </div>
  )
}

export default Listlivrestable
