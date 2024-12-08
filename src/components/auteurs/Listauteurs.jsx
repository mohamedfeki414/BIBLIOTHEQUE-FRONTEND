import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Listauteurs = () => {
    const[auteurs,SetAuteurs]=useState([]);
    const getLivres=async()=>{
        await axios.get("http://localhost:5000/api/auteurs")
        .then(res=>{
            SetAuteurs(res.data)
        })
        .catch .catch(error=>{ 
            console.log(error) 
          }) 
        } 
        useEffect(()=>{
            getLivres()
        },[])
    
  return (
    <div>
      <h1>Listes Des Auteurs</h1>
      <table className='table table table-striped'>
        <thead>
            <tr>
                <td>id</td>
                <td>Nom Auteur</td>
                <td>Email</td>
                <td>Num tel</td>
                <td>Update</td> 
                <td>Delete</td>
            </tr>
        </thead>
        <tbody>
            {
                auteurs && auteurs.map((cat,index)=>
                <tr key={index} >
                    <td>{cat._id}</td>
                    <td>{cat.nomauteur}</td>
                    <td>{cat.email}</td>
                    <td>{cat.numtel}</td>
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

export default Listauteurs
