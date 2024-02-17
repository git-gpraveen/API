import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Comment.css'

const Comment = () => {


  const[comments,setComments]=useState([])

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/comments')
    .then((res)=>{
      setComments(res.data)
    })
    .catch((error)=>{
      setComments(error)
    })
  })

  return (
    <div className='comment'>
      <table className='comments-table'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
      {comments.map((item)=>{
        if(item.id <= 10){
          return <tbody>
          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            
          </tr>
        </tbody>
        }
       
      })}
      </table>
    </div>
  )
}

export default Comment
