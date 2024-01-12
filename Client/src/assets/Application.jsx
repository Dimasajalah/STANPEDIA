// App.js
import React, { useState } from 'react';
import './App.css';
import PostForm from './PostForm';
import PostList from './PostList';

function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const deletePost = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };

  return (
    <div className="App">
      <h1>Twitter Clone</h1>
      <PostForm addPost={addPost} />
      <PostList posts={posts} deletePost={deletePost} />
    </div>
  );
}

export default App;

