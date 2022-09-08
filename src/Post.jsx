import React from 'react';
import './style';

const Post = (props) => {
  return(
    <div className="post">
      <h5>{props.title}</h5>
      <p>{props.body}</p>
    </div>
  )
}
export default Post;