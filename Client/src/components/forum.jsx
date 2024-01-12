import React, { useState} from "react";
import Button from './LoveButton';
import CommentSection from './commentsection';
import YourComponent from './YourComponent';
import ReviewModal from './ReviewModal';

const MyComponent = () => {

  const [reviews, setReviews] = useState([]);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [selectedReviewIndex, setSelectedReviewIndex] = useState(null);

  const handleReviewSubmit = (newReview) => {
    // Update the reviews state with the new review
    setReviews([...reviews, newReview]);
  };

  const handleSaveReview = (newReview) => {
    if (selectedReviewIndex !== null) {
      handleUpdateReview(newReview, selectedReviewIndex);
    } else {
      handleReviewSubmit(newReview);
    }
    setSelectedReviewIndex(null);
    setShowReviewModal(false);
  };

  const handleUpdateReview = (updatedReview, Index) => {
    // Update the reviews state with the modified review
    const updatedReviews = [...reviews];
    updatedReviews[Index] = updatedReview;
    setReviews(updatedReviews);
  };

  const handleEditReview = (Index) => {
    setSelectedReviewIndex(Index);
    setShowReviewModal(true);
  };
  
  const handleDeleteReview = (Index) => {
    // Create a copy of the reviews array excluding the review to be deleted
    const updatedReviews = reviews.filter((_, i) => i !== Index);
    // Update the state with the new reviews array
    setReviews(updatedReviews);
  };

  return (
    <div className="flex flex-col items-stretch">
      <div className="flex-col overflow-hidden relative flex min-h-[845px] w-full justify-between gap-px pl-8 max-md:max-w-full max-md:flex-wrap max-md:pl-5">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f950a23e-ac43-4489-992e-a8b8fbae1570?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f950a23e-ac43-4489-992e-a8b8fbae1570?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f950a23e-ac43-4489-992e-a8b8fbae1570?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f950a23e-ac43-4489-992e-a8b8fbae1570?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f950a23e-ac43-4489-992e-a8b8fbae1570?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f950a23e-ac43-4489-992e-a8b8fbae1570?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f950a23e-ac43-4489-992e-a8b8fbae1570?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f950a23e-ac43-4489-992e-a8b8fbae1570?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&"
          className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
        />
        <div className="relative flex flex-col items-stretch max-md:max-w-full">
          <div className="max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[42%] max-md:w-full max-md:ml-0">
                <div className="flex grow flex-col items-stretch mt-20 max-md:max-w-full max-md:mt-10">
                  <div className="justify-center text-blue-950 text-xl leading-6 capitalize max-md:max-w-full">
                    Welcome to Review
                  </div>
                  <div className="border-t-[color:var(--btn\_stroke,#FFF)] border-l-[color:var(--btn\_stroke,#FFF)] shadow-md bg-[radial-gradient(171.63%_171.63%_at_50%_50%,#FFF_0%,rgba(255,255,255,0.00)_100%),radial-gradient(50%_50%_at_50%_50%,#FFF_0%,rgba(255,255,255,0.00)_100%),#D8DEE3] flex justify-between gap-5 mt-4 pl-6 pr-6 py-3 rounded-3xl border-l-2 border-t-2 border-solid max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:px-5">
                    <div className="text-black text-base leading-5 tracking-wide border shadow-lg bg-slate-200 grow px-4 py-2 rounded-[54px] border-solid border-slate-300">
                      Recent
                    </div>
                    <div className="text-black text-base leading-5 tracking-wide border shadow-lg bg-slate-200 grow items-center px-5 py-2 rounded-[54px] border-solid border-slate-300">
                      Hot
                    </div>
                    <div className="text-black text-base leading-5 tracking-wide border shadow-lg bg-slate-200 grow items-center px-5 py-2 rounded-[54px] border-solid border-slate-300">
                      Top
                    </div>
                  </div>
                  <button onClick={() => setShowReviewModal(true)}></button>
          <YourComponent
            reviews={reviews}
            onReviewSubmit={handleReviewSubmit}
            onEditReview={handleDeleteReview}
          />
          {showReviewModal && (
            <ReviewModal
              onSave={handleSaveReview}
              onClose={() => {
                setSelectedReviewIndex(null);
                setShowReviewModal(false);
              }}
              review={selectedReviewIndex !== null ? reviews[selectedReviewIndex] : null}
            />
          )}
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[58%] ml-5 max-md:w-full max-md:ml-0">
                <div className="flex flex-col items-stretch max-md:max-w-full max-md:mt-5">
                  <div className="flex w-[308px] max-w-full items-stretch justify-between gap-5 mr-12 mt-20 self-end max-md:mr-2.5 max-md:mt-10">
                    <div className="flex items-stretch justify-between gap-2.5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4254b260-2bc5-48dd-b734-fe46c23e459d?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&"
                        className="aspect-[0.87] object-contain object-center w-[33px] overflow-hidden shrink-0 max-w-full"
                      />
                      <div className="justify-center text-blue-950 text-base font-light leading-5 self-center my-auto">
                        Previous Page
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-5">
                      <div className="justify-center text-blue-950 text-base font-light leading-5 my-auto">
                        Next Page
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b01a022-9d4e-4968-8cd6-6d66bec4f491?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&"
                        className="aspect-[0.89] object-contain object-center w-[34px] overflow-hidden self-stretch shrink-0 max-w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-xl bg-gray-100 mt-5 pl-5 pr-10 py-4 rounded-2xl max-md:max-w-full max-md:pr-5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-4/5 max-md:w-full max-md:ml-0">
                <div className="flex flex-col max-md:max-w-full max-md:mt-10">
                  <div className="justify-center text-blue-950 text-base leading-5 capitalize self-stretch max-md:max-w-full">
                    Spy X Family
                  </div>
                  <div className="self-stretch mt-5 max-md:max-w-full">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                      <div className="flex flex-col items-stretch w-[19%] max-md:w-full max-md:ml-0">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a4d7211e-bca7-4dd0-b234-26c095f1edea?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4d7211e-bca7-4dd0-b234-26c095f1edea?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4d7211e-bca7-4dd0-b234-26c095f1edea?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4d7211e-bca7-4dd0-b234-26c095f1edea?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4d7211e-bca7-4dd0-b234-26c095f1edea?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4d7211e-bca7-4dd0-b234-26c095f1edea?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4d7211e-bca7-4dd0-b234-26c095f1edea?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4d7211e-bca7-4dd0-b234-26c095f1edea?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&"
                          className="aspect-[0.91] object-contain object-center w-[139px] overflow-hidden shrink-0 max-w-full grow max-md:mt-5"
                        />
                      </div>
                      <div className="flex flex-col items-stretch w-[81%] ml-5 max-md:w-full max-md:ml-0">
                        <div className="flex flex-col items-stretch max-md:max-w-full max-md:mt-6">
                          <div className="justify-center text-blue-950 text-base font-semibold leading-5 max-md:max-w-full">
                            User1
                          </div>
                          <div className="justify-center text-blue-950 text-base font-semibold leading-5 mt-4 max-md:max-w-full">
                            9.1/10
                          </div>
                          <div className="justify-center text-blue-950 text-xl font-light leading-6 mt-2.5 max-md:max-w-full">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. <br />
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-[151px] max-w-full justify-between gap-5 ml-40 max-md:ml-2.5">
                    <CommentSection />
                    <Button/>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-1/5 ml-5 max-md:w-full max-md:ml-0">
                <div className="flex flex-col items-stretch max-md:mt-10">
                  <div className="justify-center text-blue-950 text-base font-light leading-5">
                    9 hours ago by user1
                  </div>
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0d6f7ad5-f494-4569-8ec3-b9227a1de202?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d6f7ad5-f494-4569-8ec3-b9227a1de202?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d6f7ad5-f494-4569-8ec3-b9227a1de202?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d6f7ad5-f494-4569-8ec3-b9227a1de202?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d6f7ad5-f494-4569-8ec3-b9227a1de202?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d6f7ad5-f494-4569-8ec3-b9227a1de202?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d6f7ad5-f494-4569-8ec3-b9227a1de202?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d6f7ad5-f494-4569-8ec3-b9227a1de202?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&"
                    className="aspect-[1.28] object-contain object-center w-[195px] overflow-hidden self-center mt-5"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1690dbe2-4860-4423-a253-65ba9a8041cd?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&"
                    className="aspect-[5.43] object-contain object-center w-[38px] overflow-hidden self-center max-w-full mt-8"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-xl bg-gray-100 mt-5 pl-5 pr-10 py-4 rounded-2xl max-md:max-w-full max-md:pr-5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-4/5 max-md:w-full max-md:ml-0">
                <div className="flex flex-col max-md:max-w-full max-md:mt-10">
                  <div className="justify-center text-blue-950 text-base leading-5 capitalize self-stretch max-md:max-w-full">
                    Spy X Family
                  </div>
                  <div className="self-stretch mt-5 max-md:max-w-full">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                      <div className="flex flex-col items-stretch w-[19%] max-md:w-full max-md:ml-0">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a4d7211e-bca7-4dd0-b234-26c095f1edea?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4d7211e-bca7-4dd0-b234-26c095f1edea?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4d7211e-bca7-4dd0-b234-26c095f1edea?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4d7211e-bca7-4dd0-b234-26c095f1edea?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4d7211e-bca7-4dd0-b234-26c095f1edea?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4d7211e-bca7-4dd0-b234-26c095f1edea?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4d7211e-bca7-4dd0-b234-26c095f1edea?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4d7211e-bca7-4dd0-b234-26c095f1edea?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&"
                          className="aspect-[0.91] object-contain object-center w-[139px] overflow-hidden shrink-0 max-w-full grow max-md:mt-5"
                        />
                      </div>
                      <div className="flex flex-col items-stretch w-[81%] ml-5 max-md:w-full max-md:ml-0">
                        <div className="flex flex-col items-stretch max-md:max-w-full max-md:mt-6">
                          <div className="justify-center text-blue-950 text-base font-semibold leading-5 max-md:max-w-full">
                            User1
                          </div>
                          <div className="justify-center text-blue-950 text-base font-semibold leading-5 mt-4 max-md:max-w-full">
                            9.1/10
                          </div>
                          <div className="justify-center text-blue-950 text-xl font-light leading-6 mt-2.5 max-md:max-w-full">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. <br />
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-[151px] max-w-full justify-between gap-5 ml-40 max-md:ml-2.5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b917de97-cd2a-493c-aaca-7e818e8500a7?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&"
                      className="aspect-square object-contain object-center w-9 overflow-hidden shrink-0 max-w-full mt-2.5"
                    />
                    <Button/>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-1/5 ml-5 max-md:w-full max-md:ml-0">
                <div className="flex flex-col items-stretch max-md:mt-10">
                  <div className="justify-center text-blue-950 text-base font-light leading-5">
                    9 hours ago by user1
                  </div>
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0d6f7ad5-f494-4569-8ec3-b9227a1de202?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d6f7ad5-f494-4569-8ec3-b9227a1de202?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d6f7ad5-f494-4569-8ec3-b9227a1de202?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d6f7ad5-f494-4569-8ec3-b9227a1de202?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d6f7ad5-f494-4569-8ec3-b9227a1de202?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d6f7ad5-f494-4569-8ec3-b9227a1de202?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d6f7ad5-f494-4569-8ec3-b9227a1de202?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d6f7ad5-f494-4569-8ec3-b9227a1de202?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&"
                    className="aspect-[1.28] object-contain object-center w-[195px] overflow-hidden self-center mt-5"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1690dbe2-4860-4423-a253-65ba9a8041cd?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&"
                    className="aspect-[5.43] object-contain object-center w-[38px] overflow-hidden self-center max-w-full mt-8"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-xl bg-gray-100 mt-5 pl-5 pr-10 py-4 rounded-2xl max-md:max-w-full max-md:pr-5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-4/5 max-md:w-full max-md:ml-0">
                <div className="flex flex-col max-md:max-w-full max-md:mt-10">
                  <div className="justify-center text-blue-950 text-base leading-5 capitalize self-stretch max-md:max-w-full">
                    Spy X Family
                  </div>
                  <div className="self-stretch mt-5 max-md:max-w-full">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                      <div className="flex flex-col items-stretch w-[19%] max-md:w-full max-md:ml-0">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a4d7211e-bca7-4dd0-b234-26c095f1edea?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4d7211e-bca7-4dd0-b234-26c095f1edea?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4d7211e-bca7-4dd0-b234-26c095f1edea?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4d7211e-bca7-4dd0-b234-26c095f1edea?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4d7211e-bca7-4dd0-b234-26c095f1edea?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4d7211e-bca7-4dd0-b234-26c095f1edea?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4d7211e-bca7-4dd0-b234-26c095f1edea?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4d7211e-bca7-4dd0-b234-26c095f1edea?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&"
                          className="aspect-[0.91] object-contain object-center w-[139px] overflow-hidden shrink-0 max-w-full grow max-md:mt-5"
                        />
                      </div>
                      <div className="flex flex-col items-stretch w-[81%] ml-5 max-md:w-full max-md:ml-0">
                        <div className="flex flex-col items-stretch max-md:max-w-full max-md:mt-6">
                          <div className="justify-center text-blue-950 text-base font-semibold leading-5 max-md:max-w-full">
                            User1
                          </div>
                          <div className="justify-center text-blue-950 text-base font-semibold leading-5 mt-4 max-md:max-w-full">
                            9.1/10
                          </div>
                          <div className="justify-center text-blue-950 text-xl font-light leading-6 mt-2.5 max-md:max-w-full">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. <br />
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-[151px] max-w-full justify-between gap-5 ml-40 max-md:ml-2.5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b917de97-cd2a-493c-aaca-7e818e8500a7?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&"
                      className="aspect-square object-contain object-center w-9 overflow-hidden shrink-0 max-w-full mt-2.5"
                    />
                    <Button/>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-1/5 ml-5 max-md:w-full max-md:ml-0">
                <div className="flex flex-col items-stretch max-md:mt-10">
                  <div className="justify-center text-blue-950 text-base font-light leading-5">
                    9 hours ago by user1
                  </div>
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0d6f7ad5-f494-4569-8ec3-b9227a1de202?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d6f7ad5-f494-4569-8ec3-b9227a1de202?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d6f7ad5-f494-4569-8ec3-b9227a1de202?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d6f7ad5-f494-4569-8ec3-b9227a1de202?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d6f7ad5-f494-4569-8ec3-b9227a1de202?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d6f7ad5-f494-4569-8ec3-b9227a1de202?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d6f7ad5-f494-4569-8ec3-b9227a1de202?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d6f7ad5-f494-4569-8ec3-b9227a1de202?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&"
                    className="aspect-[1.28] object-contain object-center w-[195px] overflow-hidden self-center mt-5"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1690dbe2-4860-4423-a253-65ba9a8041cd?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&"
                    className="aspect-[5.43] object-contain object-center w-[38px] overflow-hidden self-center max-w-full mt-8"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;



