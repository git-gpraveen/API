import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Form = () => {

const location=useLocation()

const navigate=useNavigate()

const[name,setName]=useState( location.state && location.state.name ? location.state.name : '')
const[email,setEmail]=useState(location.state && location.state.email ? location.state.email : '')
// const[users,setUsers]=useState([])

const create=()=>{

  let obj ={
    formName:name,
    formEmail:email
  }
  
 
  axios.put(`https://jsonplaceholder.typicode.com/users/${location.state.id}`,obj)
  .then((res)=>{
    console.log(res.data)
    navigate('/')
  })
  .catch((error)=>{
    console.log(error)
  },[])

}


 return (
    <div className='form'>
      <div className='form-inp-btn'>
        <div className='form-inp'>
          <input type="text"  value={name} placeholder='Name'  onChange={(e)=>setName (e.target.value)}/>
          <input type="email" value={email} placeholder='Email'onChange={(e)=>setEmail(e.target.value)}/>
          <div className='form-btn'>
            <button onClick={create}>Post</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form
