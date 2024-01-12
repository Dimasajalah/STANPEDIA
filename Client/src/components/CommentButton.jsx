// CommentButton.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CommentButton = ({ onCommentSubmit, onReplySubmit, replies }) => {
  const [comment, setComment] = useState('');
  const [replyInput, setReplyInput] = useState('');

  const handleCommentSubmit = () => {
    if (comment.trim() !== '') {
      onCommentSubmit(comment);
      setComment(''); // Clear comment input after submission
    }
  };

  const handleReplySubmit = () => {
    if (replyInput.trim() !== '') {
      onReplySubmit(replyInput);
      setReplyInput(''); // Clear reply input after submission
    }
  };

  return (
    <div className="comment-section">
      {/* Comment input */}
      <input
        type="text"
        placeholder="Add a comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={handleCommentSubmit}>Submit Comment</button>

      {/* Existing comments and replies */}
      {replies.map((reply, index) => (
        <div key={index}>
          {reply}
          {/* Reply input */}
          <input
            type="text"
            placeholder="Add a reply"
            value={replyInput}
            onChange={(e) => setReplyInput(e.target.value)}
          />
          <button onClick={handleReplySubmit}>Submit Reply</button>
        </div>
      ))}
    </div>
  );
};

CommentButton.propTypes = {
  onCommentSubmit: PropTypes.func.isRequired,
  onReplySubmit: PropTypes.func.isRequired,
  replies: PropTypes.array.isRequired,
};

export default CommentButton;



