import React, { useState } from 'react';
import CommentButton from './CommentButton'; // Import CommentButton component
import PropTypes from 'prop-types';
import './CommentSection.css'; // Import your CSS file for styling

const CommentSection = () => {
  const [showImageModal, setShowImageModal] = useState(false);
  const [replies, setReplies] = useState([]);
  const [comment, setComment] = useState('');

  const toggleImageModal = () => {
    setShowImageModal(!showImageModal);
  };

  const handleCommentSubmit = (comment) => {
    setReplies((prevReplies) => [...prevReplies, comment]);
  };

  const handleReplySubmit = (reply) => {
    setReplies((prevReplies) => [...prevReplies, reply]);
  };

  return (
    <div>
      {/* Image component with onClick to toggle comment section */}
      <img
        onClick={toggleImageModal}
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b917de97-cd2a-493c-aaca-7e818e8500a7?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&"
        className="aspect-square object-contain object-center w-9 overflow-hidden shrink-0 max-w-full mt-2.5"
      />

      {/* Image Modal */}
      {showImageModal && (
        <div className="modal-overlay">
          <div className="modal">
            <span className="close" onClick={toggleImageModal}>
              &times;
            </span>
            

            {/* Render the CommentButton component in the modal */}
            <CommentButton
              onCommentSubmit={handleCommentSubmit}
              onReplySubmit={handleReplySubmit}
              replies={replies}
            />
          </div>
        </div>
      )}
    </div>
  );
};

CommentSection.propTypes = {
  // Define your prop types if needed
};

export default CommentSection;


















