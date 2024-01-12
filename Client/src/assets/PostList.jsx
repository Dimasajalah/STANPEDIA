// components/PostList.js
import React from 'react';

const PostList = ({ posts, deletePost }) => {
  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post) => (
        <div key={post.id} className="post">
          <p>{post.content}</p>
          <button onClick={() => deletePost(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default PostList;
