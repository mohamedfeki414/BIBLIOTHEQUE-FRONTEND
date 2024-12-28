import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

const Listauteurs = () => {
  const [auteurs, SetAuteurs] = useState([]);

  const getLivres = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/auteurs");
      SetAuteurs(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLivres();
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
      <Table striped bordered hover size="sm">
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
          {auteurs &&
            auteurs.map((cat, index) => (
              <tr key={index}>
                <td>{cat._id}</td>
                <td>{cat.nomauteur}</td>
                <td>{cat.email}</td>
                <td>{cat.numtel}</td>
                <td>
                  <button className="btn btn-warning btn-sm">Update</button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(cat._id)}
                  >
                    <i className="fa-solid fa-trash"></i>Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Listauteurs;
