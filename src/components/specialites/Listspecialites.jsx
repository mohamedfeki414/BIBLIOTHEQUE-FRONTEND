import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
const Listspecialites = () => {
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
  return (
    <div>
      <h1>Listes Des Editeurs</h1>
      <Table striped bordered hover size="sm">
        <thead>
            <tr>
                <td>id</td>
                <td>Nom Specialite</td>
                <td>Update</td> 
                <td>Delete</td>
                
            </tr>
        </thead>
        <tbody>
            {
                specialities && specialities.map((cat,index)=>
                <tr key={index} >
                    <td>{cat._id}</td>
                    <td>{cat.nomspecialite}</td>
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

export default Listspecialites
