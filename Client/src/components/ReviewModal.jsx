import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const StarRating = ({ rating, onHover, onClick }) => {
  const [hoveredRating, setHoveredRating] = useState(null);

  const handleHover = (hovered) => {
    setHoveredRating(hovered);
    onHover && onHover(hovered);
  };

  const handleClick = () => {
    onClick && onClick(hoveredRating);
  };

  const stars = [];
  for (let i = 1; i <= 10; i++) {
    stars.push(
      <span
        key={i}
        className={`cursor-pointer text-2xl ${
          (hoveredRating || rating) >= i ? 'text-yellow-500' : 'text-gray-300'
        }`}
        onMouseEnter={() => handleHover(i)}
        onMouseLeave={() => handleHover(null)}
        onClick={handleClick}
      >
        ★
      </span>
    );
  }

  return <div className="flex">{stars}</div>;
};

const ReviewModal = ({ onClose, onSave, review }) => {
  const [rating, setRating] = useState(1);
  const [reviewText, setReviewText] = useState('');
  const [spoiler, setSpoiler] = useState(false);

  useEffect(() => {
    // Set the state with the existing review data when editing
    if (review) {
      setRating(review.rating);
      setReviewText(review.reviewText);
      setSpoiler(review.spoiler);
    }
  }, [review]);

  const handleRatingHover = (hoveredRating) => {
    // Handle rating hover logic if needed
    console.log('Hovered Rating:', hoveredRating);
  };

  const handleRatingClick = (selectedRating) => {
    // Handle rating click logic
    console.log('Selected Rating:', selectedRating);
    setRating(selectedRating);
  };

  const handleSubmit = () => {
    const newReview = {
      rating,
      reviewText,
      spoiler,
      // Add other fields as needed
    };

    // If editing, include the existing review index in the payload
    if (review && review.index !== undefined) {
      onSave(review.index, newReview);
    } else {
      onSave(newReview);
    }

    // Close the modal
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-md p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Add Your Review</h2>

        <label className="block mb-4">
          Rating:
          <StarRating rating={rating} onHover={handleRatingHover} onClick={handleRatingClick} />
        </label>

        <label className="block mb-4">
          Review Text:
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            className="border rounded px-2 py-1 w-full"
          />
        </label>

        <label className="block mb-4">
          Spoiler:
          <input
            type="checkbox"
            checked={spoiler}
            onChange={() => setSpoiler(!spoiler)}
            className="ml-2"
          />
        </label>

        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

ReviewModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  review: PropTypes.object,
};

export default ReviewModal;



