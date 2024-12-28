import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'

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
        const handleDelete = async (id) => {
          try {
            await axios.delete(`http://localhost:5000/api/editeurs/${id}`);
            SetAuteurs(auteurs.filter((c) => c._id !== id));
          } catch (error) {
            console.log(error);
          }
        };
  return (
    <div>
      <h1>Listes Des Editeurs</h1>
      <Link to="/editeurs/add">
              <Button variant="success" style={{ backgroundColor: 'green' }}>
              <i class="fa-solid fa-square-plus"  style={{color: "#fcfcfd"}}></i>
              Nouveau
              </Button>
              </Link>
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

export default Listediteurs
