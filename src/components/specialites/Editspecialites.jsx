import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Form, Col, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

const Editspecialites = () => {
    const[specialities,SetSpecialities]=useState({});
    const navigate = useNavigate();
    const { id } = useParams();
    const getSpecialities=async(id)=>{
        await axios.get(`http://localhost:5000/api/specialites/${id}`)
        .then(res=>{
            SetSpecialities(res.data)
        })
        .catch(error=>{ 
            console.log(error) 
          }) 
        } 
        useEffect(()=>{
            getSpecialities(id)
        },[id])
        const handleSave = async (e) => {
            e.preventDefault();
          try {
            await axios.put(`http://localhost:5000/api/specialites/${id}`,specialities);
            navigate("/specialites");
          } catch (error) {
            console.log(error);
          }
        };
  return (
    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
              <Form onSubmit={handleSave}>
                
                <Row>
                  <Form.Group as={Col} className="mb-3">
                    <Form.Label>Nom Specialities</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="nomspecialite"
                      value={specialities.nomspecialite || ''}
                      onChange={(e) =>
                        SetSpecialities({ ...specialities, nomspecialite: e.target.value })
                      }
                    />
                  </Form.Group>
                   </Row>
                  <button className="btn btn-success btn-sm" type="submit">
                                <i className="fa-solid fa-floppy-disk"></i> Save
                              </button>
                              &nbsp;
                              <button className="btn btn-danger btn-sm" type="button"
                                onClick={() => navigate("/specialites")}
                              >
                                <i className="fa-solid fa-person-walking-arrow-right"></i> Exit
                              </button>
                            </Form>
                          </div>
  )
}

export default Editspecialites
