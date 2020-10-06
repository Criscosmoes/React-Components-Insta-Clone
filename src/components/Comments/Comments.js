import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;

  const commentsList = comments.map(cur => {
    return <Comment key={cur.id} comment={cur} /> 
  })

  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}
      {commentsList}
    </div>
  );
};

export default Comments;
