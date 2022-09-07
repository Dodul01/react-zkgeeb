import React from 'react';
import {useState} from 'react';
import Post  from './Post';

const Posts = () => {
  const posts = [
    "post1",
    "post2",
    "post3",
    "post4",
    "post5",
  ]
  return(
    <div>
      {posts.map(post=>{
        <Post post={post}/>
      })}
    </div>
  )
}
export default Posts;