import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Form, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Insertlivres = () => {
  const [livres, SetLivres] = useState({});
  const navigate = useNavigate();
  const [specialities,SetSpecialities] = useState([]);
  const [editeurs, SetEditeurs] = useState([]);
  

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
    const getEditeurs=async()=>{
      try {
        const res = await axios.get("http://localhost:5000/api/editeurs");
        SetEditeurs(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(()=>{
                getEditeurs()
            },[])
  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/livres", livres);
      navigate("/livres");
    } catch (error) {
      console.log(error);
    }
};
  return (
     <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                  <Form onSubmit={handleSave}>
                    <Row>
                      <Form.Group as={Col} className="mb-3">
                        <Form.Label>Isbn</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="isbn"
                          value={livres.isbn || ''}
                          onChange={(e) =>
                            SetLivres({ ...livres, isbn: e.target.value })
                          }
                        />
                      </Form.Group>
                    </Row>
                    <Row>
                      <Form.Group as={Col} className="mb-3">
                        <Form.Label>Titre</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="titre"
                          value={livres.titre || ''}
                          onChange={(e) =>
                            SetLivres({ ...livres, titre: e.target.value })
                          }
                        />
                      </Form.Group>
                    </Row>
                    <Row>
                      <Form.Group as={Col} className="mb-3">
                        <Form.Label>Année Edition</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="annedition"
                          value={livres.annedition || ''}
                          onChange={(e) =>
                            SetLivres({ ...livres, annedition: e.target.value })
                          }
                        />
                      </Form.Group>
                    </Row>
                    <Row>
                      <Form.Group as={Col} className="mb-3">
                        <Form.Label>Prix</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="prix"
                          value={livres.prix || ''}
                          onChange={(e) =>
                            SetLivres({ ...livres, prix: e.target.value })
                          }
                        />
                      </Form.Group>
                    </Row>
                    <Row>
                      <Form.Group as={Col} className="mb-3">
                        <Form.Label>Qte en Stock</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="qtestock"
                          value={livres.qtestock || ''}
                          onChange={(e) =>
                            SetLivres({ ...livres, qtestock: e.target.value })
                          }
                        />
                      </Form.Group>
                    </Row>
                    <Row>
                      <Form.Group as={Col} className="mb-3">
                        <Form.Label>Couverture</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="couverture"
                          value={livres.couverture || ''}
                          onChange={(e) =>
                            SetLivres({ ...livres, couverture: e.target.value })
                          }
                        />
                      </Form.Group>
                    </Row>
                    <Row>
                      <Form.Group as={Col} className="mb-3">
                        <Form.Label>Nom Specialité</Form.Label>
                        <Form.Control
                          as="select"
                          placeholder="nomspecialite"
                          value={livres.specialite || ''}
                          onChange={(e) =>SetLivres({ ...livres, specialite: e.target.value })}
                            >
                            <option value="">Sélectionnez une specialité</option>
                            {specialities.map((scat) => (
                             <option key={scat._id} value={scat._id}>
                                {scat.nomspecialite}
                                  </option>
                              ))
                          }
                          </Form.Control>
                      </Form.Group>
                    </Row>
                    <Row>
                      <Form.Group as={Col} className="mb-3">
                        <Form.Label>Maison edition</Form.Label>
                        <Form.Control
                          as="select"
                          placeholder="maisonedition"
                          value={livres.maised || ''}
                          onChange={(e) => SetLivres({ ...livres, maised: e.target.value })}>
                             <option value="">Sélectionnez une maison d 'edition</option>
                            {editeurs.map((scat) => (
                             <option key={scat._id} value={scat._id}>
                                {scat.maisonedit}
                                  </option>
                              ))
                          }
                          </Form.Control>
                        
                      </Form.Group>
                    </Row>
                    <Row>
                      <Form.Group as={Col} className="mb-3">
                        <Form.Label>Auteurs</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="auteurs"
                          value={livres.auteurs?.nomauteur || ''}
                          onChange={(e) =>
                            SetLivres({ ...livres, nomauteur: e.target.value })
                          }
                        />
                      </Form.Group>
                    </Row>
    
    
                    
                    <button className="btn btn-success btn-sm" type="submit">
                      <i className="fa-solid fa-floppy-disk"></i> Save
                    </button>
                    &nbsp;
                    <button className="btn btn-danger btn-sm" type="button"
                      onClick={() => navigate("/livres")}
                    >
                      <i className="fa-solid fa-person-walking-arrow-right"></i> Exit
                    </button>
                  </Form>
                </div> 
  )
}

export default Insertlivres
