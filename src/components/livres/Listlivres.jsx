import axios from 'axios'; 
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'
//import useAuth from '../../hooks/useAuth';
const Listlivres = () => { 
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
        <h2>Liste des Livres </h2> 
        <Link to="/livres/add">
                      <Button variant="success" style={{ backgroundColor: 'green' }}>
                      <i className="fa-solid fa-square-plus"  style={{color: "#fcfcfd"}}></i>
                      Nouveau
                      </Button>
                      </Link>
        <Table striped bordered hover size="sm"> 
          <thead> 
            <tr> 
            <td>Titre</td> 
            <td> isbn</td>
            <td>Couverture</td>
            <td>Année d'édition</td>
            <td>Prix</td>
            <td>Quantité en stock</td>
            <td>Spécialité</td>
            <td>Maison d'édition</td>
            <td>Auteurs</td>
            <td>Update</td> 
            <td>Delete</td>
            </tr> 
          </thead> 
        <tbody> 
        { livres && 
            livres.map((cat,index) => 
       <tr key={index}> 
         <td>{cat.titre}</td>
         <td>{cat.isbn}</td> 
         <td><img src={cat.couverture} width={100} height={100}/></td>
         <td>{cat.annedition}</td>
         <td>{cat.prix}</td>
         <td>{cat.qtestock}</td>
         <td>{cat.specialite?.nomspecialite}</td>
         <td>{cat.maised?.maisonedit}</td>
         <td>{cat.auteurs[0]?.nomauteur}</td>
         <td><Link to={`/livres/edit/${cat._id}`}><button className='btn btn-warning btn-sm'><i className="fa-solid fa-pen"></i>Update</button></Link></td>
                <td>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(cat._id)}> <i className="fa-solid fa-trash"></i>Delete</button>
                </td>
        </tr> 
        ) 
    } 
    </tbody> 
    </Table>  
    </div>
  )
}

export default Listlivres
