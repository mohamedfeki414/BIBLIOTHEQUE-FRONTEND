import axios from 'axios'; 
import React, { useEffect, useState } from 'react'
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


  return (
    <div>
        <h2>Liste des Livres </h2> 
        <table className='table table table-striped'> 
          <thead> 
            <tr> 
              <td>id</td> 
              <td>titre</td> 
              <td>Anne edition</td>
              <td>prix</td>
              <td>qte stock</td>
              <td>specialite</td>
              <td>maison d idition</td>
              <td>auteurs</td>
              <td>Update</td> 
              <td>Delete</td> 
            </tr> 
          </thead> 
        <tbody> 
        { livres && 
            livres.map((cat,index) => 
       <tr key={index}> 
         <td>{cat._id}</td> 
         <td>{cat.titre}</td> 
         <td>{cat.annedition}</td>
         <td>{cat.prix}</td>
         <td>{cat.qtestock}</td>
         <td>{cat.specialite?.nomspecialite}</td>
         <td>{cat.maised?.maisonedit}</td>
         <td>{cat.auteurs[0]?.nomauteur}</td>
         <td><button className='btn btn-warning btn-sm'>Update</button></td> 
         <td><button className='btn btn-danger btn-sm'>Delete</button></td>
        </tr> 
        ) 
    } 
    </tbody> 
    </table>  
    </div>
  )
}

export default Listlivres
