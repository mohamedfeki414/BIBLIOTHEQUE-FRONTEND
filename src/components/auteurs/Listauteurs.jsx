import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'


const Listauteurs = () => {
  const [auteurs, SetAuteurs] = useState([]);

  const getAuteurs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/auteurs");
      SetAuteurs(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAuteurs();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/auteurs/${id}`);
      SetAuteurs(auteurs.filter((c) => c._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Listes Des Auteurs</h1>
      <Link to="/auteurs/add">
        <Button variant="success" style={{ backgroundColor: 'green' }}>
        <i class="fa-solid fa-square-plus"  style={{color: "#fcfcfd"}}></i>
        Nouveau
        </Button>
        </Link>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            
            <td>Nom Auteur</td>
            <td>Email</td>
            <td>Num tel</td>
            <td>Update</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {auteurs &&
            auteurs.map((cat, index) => (
              <tr key={index}>
                
                <td>{cat.nomauteur}</td>
                <td>{cat.email}</td>
                <td>{cat.numtel}</td>
                <td><Link to={`/auteurs/edit/${cat._id}`}><button className='btn btn-warning btn-sm'><i className="fa-solid fa-pen"></i>Update</button></Link></td>
                <td>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(cat._id)}> <i className="fa-solid fa-trash"></i>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Listauteurs;
