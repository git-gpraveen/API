import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Post.css'

const Post = () => {
  const[posts,setPosts]=useState([])

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>{
      setPosts(res.data)
    })
    .catch((error)=>{
      setPosts(error)
    })
  })
  return (
    <div className='posts'>
        <table className='posts-table'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
      {posts.map((item)=>{
        if(item.id <= 10){
          return <tbody>
          <tr>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.body}</td>
          </tr>
        </tbody>
        }
       
      })}
      </table>
    </div>
  )
}

export default Post
