import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

const Listediteurs = () => {
  const[editeurs,SetEditeurs]=useState([]);
    const getEditeurs=async()=>{
        await axios.get("http://localhost:5000/api/editeurs")
        .then(res=>{
            SetEditeurs(res.data)
        })
        .catch(error=>{ 
            console.log(error) 
          }) 
        } 
        useEffect(()=>{
            getEditeurs()
        },[])
  return (
    <div>
      <h1>Listes Des Editeurs</h1>
      <Table striped bordered hover size="sm">
        <thead>
            <tr>
                <td>id</td>
                <td>Maison Edition</td>
                <td>SiteWeb</td>
                <td>Email</td>
                <td>Update</td> 
                <td>Delete</td>
                
            </tr>
        </thead>
        <tbody>
            {
                editeurs && editeurs.map((cat,index)=>
                <tr key={index} >
                    <td>{cat._id}</td>
                    <td>{cat.maisonedit}</td>
                    <td>{cat.siteweb}</td>
                    <td>{cat.email}</td>
                    <td><button className='btn btn-warning btn-sm'>Update</button></td> 
                    <td><button className='btn btn-danger btn-sm'>Delete</button></td>
         
                </tr>
            )    
            }
        </tbody>

      </Table>
    </div>
  )
}

export default Listediteurs
