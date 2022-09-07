import React from 'react';
import {useState, useEffect} from 'react';
import Post  from './Post';
import './style';

const Posts = () => {
  const [post, setPost] = useState(null);
    
  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();

      data.map(post =>{
        setPost(post)
      });
    } 
    fetchPost();
  },[])

  let key = 0;

  return(
    <div>
      {
        
      }
    </div>
  )
}
export default Posts;