import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Form, Col, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'


const Insertediteurs = () => {
  const [editeurs, SetEditeurs] = useState({});
  const navigate = useNavigate();
  const getEditeurs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/editeurs");
      SetEditeurs(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEditeurs();
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/editeurs", editeurs);
      navigate("/editeurs");
    } catch (error) {
      console.log(error);
    }
  }
  return (
     <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
              <Form onSubmit={handleSave}>
                <Row>
                  <Form.Group as={Col} className="mb-3">
                    <Form.Label>Maison d'edition</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Maison Edition"
                      value={editeurs.maisonedit || ''}
                      onChange={(e) =>
                        SetEditeurs({ ...editeurs, maisonedit: e.target.value })
                      }
                    />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group as={Col} className="mb-3">
                    <Form.Label>Site Web</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="siteweb"
                      value={editeurs.siteweb || ''}
                      onChange={(e) =>
                        SetEditeurs({ ...editeurs, siteweb: e.target.value })
                      }
                    />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group as={Col} className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="email"
                      value={editeurs.email || ''}
                      onChange={(e) =>
                        SetEditeurs({ ...editeurs, email: e.target.value })
                      }
                    />
                  </Form.Group>
                </Row>
                <button className="btn btn-success btn-sm" type="submit">
                  <i className="fa-solid fa-floppy-disk"></i> Save
                </button>
                &nbsp;
                <button
                  className="btn btn-danger btn-sm"
                  type="button"
                  onClick={() => navigate("/editeurs")}
                >
                  <i className="fa-solid fa-person-walking-arrow-right"></i> Exit
                </button>
              </Form>
            </div>
  )

}

export default Insertediteurs
