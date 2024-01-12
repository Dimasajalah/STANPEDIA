// components/PostForm.js
import React, { useState } from 'react';

const PostForm = ({ addPost }) => {
  const [tweet, setTweet] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      content: tweet,
    };
    addPost(newPost);
    setTweet('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        rows="4"
        cols="50"
        placeholder="What's happening?"
        value={tweet}
        onChange={(e) => setTweet(e.target.value)}
      />
      <br />
      <button type="submit">Tweet</button>
    </form>
  );
};

export default PostForm;
