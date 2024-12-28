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
      <h1>Listes Des Specialites</h1>
      <Link to="/editeurs/add">
              <Button variant="success" style={{ backgroundColor: 'green' }}>
              <i className="fa-solid fa-square-plus"  style={{color: "#fcfcfd"}}></i>
              Nouveau
              </Button>
              </Link>
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
                    <td><Link to={`/editeurs/edit/${cat._id}`}><button className='btn btn-warning btn-sm'><i className="fa-solid fa-pen"></i>Update</button></Link></td>
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

export default Listspecialites
