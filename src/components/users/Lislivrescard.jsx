import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cards from './Card'


const Lislivrescard = () => {
  const[livres,setLivres]=useState([])
    const getLivres=async()=>{
        try {
            const res=await axios.get("http://localhost:5000/api/livres")
            setLivres(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getLivres()
    },[])
  return (
    <div className='container'>
      <div  style={{"display":"flex","flexWrap":"wrap","justifyContent":"left"}}>
      {
        livres.map((art,index)=>
        <Cards livres={art} key={index}/>
        )
      }
      </div>
    </div>
  )
}

export default Lislivrescard
