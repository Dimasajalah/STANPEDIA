import React, { useState } from 'react';
import ReviewModal from './ReviewModal';
import PropTypes from 'prop-types';

const YourComponent = ({ onReviewSubmit, onDeleteReview, onUpdateReview }) => {
  const [reviews, setReviews] = useState([]);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [selectedReviewIndex, setSelectedReviewIndex] = useState(null);

  const addReview = (newReview) => {
    setReviews((prevReviews) => [...prevReviews, newReview]);
  };

  const handleSaveReview = (newReview) => {
    if (selectedReviewIndex !== null){
      onUpdateReview(selectedReviewIndex, newReview);
    } else {
      addReview(newReview);
      onReviewSubmit(newReview);
    }

    setShowReviewModal(false);
    setSelectedReviewIndex(null);
  };

  const handleEditReview = (index) => {
    setSelectedReviewIndex(index);
    setShowReviewModal(true);
  }

  const handleDeleteReview = (index) => {
    // Create a copy of the reviews array excluding the review to be deleted
    const updatedReviews = reviews.filter((_, i) => i !== index);
    // Update the state with the new reviews array
    setReviews(updatedReviews);
    // Pass the index of the deleted review to the parent component
    onDeleteReview(index);
  };

  return (
    <div>
      <button
        className="border-t-[color:var(--btn\_stroke,#FFF)] border-l-[color:var(--btn\_stroke,#FFF)] shadow-md bg-[radial-gradient(171.63%_171.63%_at_50%_50%,#FFF_0%,rgba(255,255,255,0.00)_100%),radial-gradient(50%_50%_at_50%_50%,#FFF_0%,rgba(255,255,255,0.00)_100%),#D8DEE3] flex items-stretch justify-between gap-5 mt-5 pl-7 pr-20 py-3 rounded-3xl border-l-2 border-t-2 border-solid max-md:max-w-full max-md:flex-wrap max-md:px-5"
        onClick={() => setShowReviewModal(true)}
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/22763a3f-ef66-48b8-a5c5-95e74acd9616?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&"
          className="aspect-[1.18] object-contain object-center w-[33px] fill-black overflow-hidden shrink-0 max-w-full"
          alt="Review Icon"
        />
        <div className="justify-center text-blue-950 text-base leading-5 capitalize self-center grow shrink basis-auto my-auto">
          Add your review
        </div>
      </button>

      {showReviewModal && (
        <ReviewModal onSave={handleSaveReview} onClose={() => { setShowReviewModal(false); setSelectedReviewIndex(null);} }
        review={selectedReviewIndex !== null ? reviews[selectedReviewIndex] : null}/>
      )}

      {reviews.map((review, index) => (
        <div key={index} className="shadow-xl bg-gray-100 mt-5 pl-5 pr-10 py-4 rounded-2xl max-md:max-w-full max-md:pr-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-4/5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col max-md:max-w-full max-md:mt-10">
                <div className="justify-center text-blue-950 text-base leading-5 capitalize self-stretch max-md:max-w-full">
                  {review.title}
                </div>
                <div className="self-stretch mt-5 max-md:max-w-full">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[19%] max-md:w-full max-md:ml-0">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a4d7211e-bca7-4dd0-b234-26c095f1edea?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=100 100w, 
                        https://cdn.builder.io/api/v1/image/assets/TEMP/a4d7211e-bca7-4dd0-b234-26c095f1edea?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=200 200w, 
                        https://cdn.builder.io/api/v1/image/assets/TEMP/a4d7211e-bca7-4dd0-b234-26c095f1edea?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=400 400w, 
                        https://cdn.builder.io/api/v1/image/assets/TEMP/a4d7211e-bca7-4dd0-b234-26c095f1edea?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=800 800w, 
                        https://cdn.builder.io/api/v1/image/assets/TEMP/a4d7211e-bca7-4dd0-b234-26c095f1edea?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=1200 1200w, 
                        https://cdn.builder.io/api/v1/image/assets/TEMP/a4d7211e-bca7-4dd0-b234-26c095f1edea?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=1600 1600w, 
                        https://cdn.builder.io/api/v1/image/assets/TEMP/a4d7211e-bca7-4dd0-b234-26c095f1edea?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=2000 2000w, 
                        https://cdn.builder.io/api/v1/image/assets/TEMP/a4d7211e-bca7-4dd0-b234-26c095f1edea?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&"
                        className="aspect-[0.91] object-contain object-center w-[139px] overflow-hidden shrink-0 max-w-full grow max-md:mt-5"
                        alt="Review Image"
                      />
                    </div>
                    <div className="flex flex-col items-stretch w-[81%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="flex flex-col items-stretch max-md:max-w-full max-md:mt-6">
                        <div className="justify-center text-blue-950 text-base font-semibold leading-5 max-md:max-w-full">
                          {review.userName}
                        </div>
                        <div className="justify-center text-blue-950 text-base font-semibold leading-5 mt-4 max-md:max-w-full">
                          {review.rating}
                        </div>
                        <div className="justify-center text-blue-950 text-xl font-light leading-6 mt-2.5 max-md:max-w-full">
                          {review.reviewText}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-[151px] max-w-full justify-between gap-5 ml-40 max-md:ml-2.5">
                  <img
                    loading="lazy"
                    src={review.userImageSrc}
                    className="aspect-square object-contain object-center w-9 overflow-hidden shrink-0 max-w-full mt-2.5"
                    alt="User Image"
                  />
                  <button onClick={() => handleEditReview(index)}>Edit</button>
                  <button onClick={() => handleDeleteReview(index)}>Delete</button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-1/5 ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col items-stretch max-md:mt-10">
                <div className="justify-center text-blue-950 text-base font-light leading-5">
                  {review.postedTime}
                </div>
                <img
                  loading="lazy"
                  srcSet={review.reviewImageSrcSet}
                  className="aspect-[1.28] object-contain object-center w-[195px] overflow-hidden self-center mt-5"
                  alt="Review Image"
                />
                <button onClick={() => handleEditReview(index)}>Edit</button>
                <button onClick={() => handleDeleteReview(index)}>Delete</button>
                <img
                  loading="lazy"
                  src={review.commentImageSrc}
                  className="aspect-[5.43] object-contain object-center w-[38px] overflow-hidden self-center max-w-full mt-8"
                  alt="Comment Image"
                />
                <button onClick={() => handleEditReview(index)}>Edit</button>
                <button onClick={() => handleDeleteReview(index)}>Delete</button>
              </div>
            </div>
          </div>
        </div> 
      ))}
    </div>
  );
};

YourComponent.propTypes = {
  onReviewSubmit: PropTypes.func.isRequired,
  onDeleteReview: PropTypes.func.isRequired,
  onUpdateReview: PropTypes.func.isRequired,
};

export default YourComponent;







