
import React, { useEffect, useState } from 'react'
import { Form, Col, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

const Editauteurs = () => {
  const [auteurs, SetAuteurs] = useState([]);
  const navigate = useNavigate()
  const { id } = useParams() 

  const getLivres = async (id) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/auteurs/${id}`);
      SetAuteurs(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLivres(id);
  }, [id])
  const handleSave = async (e) => {
    try {
        e.preventDefault()
      
        await axios.put(`http://localhost:5000/api/auteurs/${id}`,auteurs)
        .then(res=>{navigate("/auteurs") })
    } catch (error) {
        console.log(error)
    }
}
  return (
    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
    <Form>
        <Row>
            <Form.Group as={Col} mb="6">
                <Form.Label>Nom Auteur </Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Nom Auteur"
                    value={auteurs.nomauteur}
                    onChange={(e) =>  SetAuteurs({ ...auteurs, nomauteur: e.target.value })}
                />
            </Form.Group>
        </Row>
        <Row>
            <Form.Group as={Col} mb="6">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="email"
                    value={auteurs.email}
                    onChange={(e) =>  SetAuteurs({ ...auteurs, email: e.target.value })}
                />
            </Form.Group>
        </Row>
        <Row>
            <Form.Group as={Col} mb="6">
                <Form.Label>Num Tel</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="numtel"
                    value={auteurs.numtel}
                    onChange={(e) =>  SetAuteurs({ ...auteurs, numtel: e.target.value })}
                />
            </Form.Group>
        </Row>
    </Form>
    <button className="btn btn-success btn-sm" onClick={handleSave}>
        <i className="fa-solid fa-floppy-disk"></i> Save
    </button>
    &nbsp;
    <button className="btn btn-danger btn-sm" onClick={() => navigate("/categories")}>
        <i className="fa-solid fa-person-walking-arrow-right"></i> Exit
    </button>
</div>
  )
}

export default Editauteurs
