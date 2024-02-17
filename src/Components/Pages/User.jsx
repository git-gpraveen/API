import React, { useEffect, useState } from 'react';
import './User.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import Table from 'react-bootstrap/Table';

const User = () => {

  const[users,setUsers]=useState([])
  const navigate=useNavigate()

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res)=>{
      setUsers(res.data)
    })
    .catch((error)=>{
      setUsers(error)
    })
  },[])

  const handleEdit = (item) => {
    navigate('/form', {state:item})
  }

  return (
    <div className='user'>
      <table className='users-table'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Edit</th>
          </tr>
        </thead>
      {users.map((item)=>{
        return <tbody>
        <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.address.city}</td>
          <td><button onClick={()=>handleEdit(item)}>Edit</button></td>
        </tr>
      </tbody>
      })}
      </table>
    </div>
  )
}

export default User
