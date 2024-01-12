import  React from "react";
import { useState } from 'react';
import PropTypes from "prop-types";
import ReviewModal from './ReviewModal'

const MyComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInWatchlist, setIsInWatchlist] = useState(false);
  const [comments, setComments] = useState([]);

  const handleOpenModal = () => {
    console.log('Opening modal...');
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    console.log('Closing modal...');
    setIsModalOpen(false);
  };

  const handleWatchlistClick = () => {
    setIsInWatchlist(!isInWatchlist);
  };

  // Function to add a comment
  const addComment = () => {
    const newComment = {
      id: comments.length + 1,
      text: 'Your comment text',
      likes: 0,
      replies: [],
    };
    setComments((prevComments) => [...prevComments, newComment]);
  };

  // Function to remove a comment
  const removeComment = (commentId) => {
    setComments((prevComments) => prevComments.filter((comment) => comment.id !== commentId));
  };

  // Function to like a comment
  const likeComment = (commentId) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === commentId ? { ...comment, likes: comment.likes + 1 } : comment
      )
    );
  };

  // Function to add a reply to a comment
  const addReply = (commentId, replyText) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === commentId
          ? { ...comment, replies: [...comment.replies, { text: replyText }] }
          : comment
      )
    );
  };

  return (
    <div className="flex flex-col items-stretch">
      <div className="flex-col overflow-hidden relative flex min-h-[831px] w-full pt-0 pb-0 items-stretch justify-between gap-1.5 pl-6 max-md:max-w-full max-md:flex-wrap max-md:pl-5">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0326a610-25fe-4408-b226-0fd78db36c86?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0326a610-25fe-4408-b226-0fd78db36c86?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0326a610-25fe-4408-b226-0fd78db36c86?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0326a610-25fe-4408-b226-0fd78db36c86?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0326a610-25fe-4408-b226-0fd78db36c86?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0326a610-25fe-4408-b226-0fd78db36c86?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0326a610-25fe-4408-b226-0fd78db36c86?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0326a610-25fe-4408-b226-0fd78db36c86?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&"
          className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
        />
        <div className="relative flex grow basis-[0%] flex-col max-md:max-w-full">
          <div className="border backdrop-blur-[3.5999999046325684px] bg-white bg-opacity-60 self-stretch pl-5 pr-20 pt-8 border-solid border-white border-opacity-10 max-md:max-w-full max-md:pr-5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[81%] max-md:w-full max-md:ml-0">
                <div className="flex grow flex-col max-md:max-w-full max-md:mt-10">
                  <div className="justify-center text-blue-950 text-2xl leading-7 capitalize self-stretch max-md:max-w-full">
                    Spy X family
                  </div>
                  <div className="self-stretch mt-6 pr-12 max-md:max-w-full max-md:pr-5">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                      <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e0e1affa-854b-4367-922e-155bde5508e2?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0e1affa-854b-4367-922e-155bde5508e2?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0e1affa-854b-4367-922e-155bde5508e2?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0e1affa-854b-4367-922e-155bde5508e2?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0e1affa-854b-4367-922e-155bde5508e2?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0e1affa-854b-4367-922e-155bde5508e2?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0e1affa-854b-4367-922e-155bde5508e2?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0e1affa-854b-4367-922e-155bde5508e2?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&"
                          className="aspect-[1.1] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-2.5"
                        />
                      </div>
                      <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4c171b1f-cfa6-430c-b127-69f7eb82d0f5?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c171b1f-cfa6-430c-b127-69f7eb82d0f5?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c171b1f-cfa6-430c-b127-69f7eb82d0f5?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c171b1f-cfa6-430c-b127-69f7eb82d0f5?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c171b1f-cfa6-430c-b127-69f7eb82d0f5?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c171b1f-cfa6-430c-b127-69f7eb82d0f5?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c171b1f-cfa6-430c-b127-69f7eb82d0f5?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c171b1f-cfa6-430c-b127-69f7eb82d0f5?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&"
                          className="aspect-[1.1] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-3"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex w-[416px] max-w-full items-stretch justify-between gap-5 mt-6 max-md:justify-center">
                    <div className="justify-center text-black text-xs leading-3 capitalize border shadow-lg bg-slate-200 grow px-5 py-2.5 rounded-[54px] border-solid border-slate-300 max-md:pl-2">
                      Anime
                    </div>
                    <div className="justify-center text-black text-xs leading-3 capitalize border shadow-lg bg-slate-200 grow px-5 py-2.5 rounded-[54px] border-solid border-slate-300 max-md:pl-1">
                      Action
                    </div>
                    <div className="justify-center text-black text-xs leading-3 capitalize border shadow-lg bg-slate-200 grow px-5 py-2 rounded-[54px] border-solid border-slate-300 max-md:pl-1.5">
                      Comedy
                    </div>
                  </div>
                  <div className="justify-center text-black text-sm leading-4 capitalize max-w-[856px] ml-4 mt-7 max-md:max-w-full">
                    A spy on an undercover mission gets married and adopts a
                    child as part of his cover. His wife and daughter have
                    secrets of their own, and all three must strive to keep
                    together.
                  </div>
                  <div className="self-stretch flex items-stretch justify-between gap-0 mt-12 pr-3 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                    <button className={`bg-white flex mr-0 grow basis-[0%] flex-col pt-5 pb-7 px-5 max-md:max-w-full watchlist-button ${isInWatchlist ? 'active' : ''}`} onClick={handleWatchlistClick}>
                      <div className="border-t-[color:var(--btn\_stroke,#FFF)] border-l-[color:var(--btn\_stroke,#FFF)] shadow-md bg-[radial-gradient(171.63%_171.63%_at_50%_50%,#FFF_0%,rgba(255,255,255,0.00)_100%),radial-gradient(50%_50%_at_50%_50%,#FFF_0%,rgba(255,255,255,0.00)_100%),#D8DEE3] flex w-full justify-between gap-5 pl-5 pr-7 pt-1.5 pb-3.5 rounded-3xl border-l-2 border-t-2 border-solid max-md:max-w-full max-md:flex-wrap max-md:px-5">
                        <div className="flex items-stretch gap-3 mt-2">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d658b17e-cbd6-4f05-90d1-937cd158a516?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&"
                            className="aspect-[1.39] object-contain object-center w-[39px] fill-black overflow-hidden shrink-0 max-w-full"
                          />
                          <div className="justify-center text-blue-950 text-base leading-5 capitalize self-center my-auto">
                            {isInWatchlist ? 'In Watchlist' : 'Add to watchlist'}
                          </div>
                        </div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f690e87c-7e2b-4b7b-b508-4e5c151165d2?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&"
                          className="aspect-[4.63] object-contain object-center w-[37px] overflow-hidden shrink-0 max-w-full"
                        />
                      </div>
                    </button>
                    <button className="bg-white flex grow basis-[0%] flex-col pt-5 pb-7 px-5 max-md:max-w-full" onClick={handleOpenModal}>
                      <div className="border-t-[color:var(--btn\_stroke,#FFF)] border-l-[color:var(--btn\_stroke,#FFF)] shadow-md bg-[radial-gradient(171.63%_171.63%_at_50%_50%,#FFF_0%,rgba(255,255,255,0.00)_100%),radial-gradient(50%_50%_at_50%_50%,#FFF_0%,rgba(255,255,255,0.00)_100%),#D8DEE3] flex w-full justify-between gap-5 pl-6 pr-7 pt-1.5 pb-3.5 rounded-3xl border-l-2 border-t-2 border-solid max-md:max-w-full max-md:flex-wrap max-md:px-5">
                        <div className="flex items-stretch justify-between gap-5 mt-2">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f9deea8-0540-43c5-9a15-41ce396fe57c?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&"
                            className="aspect-[1.39] object-contain object-center w-[39px] fill-black overflow-hidden shrink-0 max-w-full"
                          />
                          <div className="justify-center text-blue-950 text-base leading-5 capitalize self-center my-auto">
                            Add your review    
                          </div>
                        </div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c2ab2e5-b134-4ecb-a385-9b7ea822d34f?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&"
                          className="aspect-[4.5] object-contain object-center w-9 overflow-hidden shrink-0 max-w-full"
                        />
                      </div>
                    </button>
                    {isModalOpen && <ReviewModal onClose={handleCloseModal} />}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[19%] ml-5 max-md:w-full max-md:ml-0">
                <div className="flex flex-col max-md:mt-10">
                  <div className="flex w-[159px] max-w-full items-stretch justify-between gap-5 ml-5 max-md:ml-2.5">
                    <div className="flex grow basis-[0%] flex-col items-stretch">
                      <div className="justify-center text-blue-950 text-2xl leading-7 capitalize">
                        Rating
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/decba030-9c3e-422a-97fb-db800482be64?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&"
                        className="aspect-[1.36] object-contain object-center w-[68px] fill-yellow-300 overflow-hidden self-center mt-3.5"
                      />
                    </div>
                    <div className="justify-center text-blue-950 text-2xl leading-7 capitalize mt-14 self-end max-md:mt-10">
                      9.1/10
                    </div>
                  </div>
                  <div className="bg-white self-stretch flex flex-col mt-1.5 pt-5 pb-7 px-5">
                    <div className="border-t-[color:var(--btn\_stroke,#FFF)] border-l-[color:var(--btn\_stroke,#FFF)] shadow-md bg-[radial-gradient(171.63%_171.63%_at_50%_50%,#FFF_0%,rgba(255,255,255,0.00)_100%),radial-gradient(50%_50%_at_50%_50%,#FFF_0%,rgba(255,255,255,0.00)_100%),#D8DEE3] flex w-full flex-col items-stretch pl-8 pr-2.5 pt-5 pb-11 rounded-3xl border-l-2 border-t-2 border-solid max-md:pl-5">
                      <div className="flex justify-between gap-5">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/281500fa-80b5-4625-8c85-e42bbcaf9987?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&"
                          className="aspect-[1.1] object-contain object-center w-[55px] fill-black overflow-hidden shrink-0 max-w-full mt-4"
                        />
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd73bfe8-cfed-40c7-ab38-775ee3f478b5?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&"
                          className="aspect-[0.67] object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                        />
                      </div>
                      <div className="justify-center text-blue-950 text-base leading-5 capitalize mt-5">
                        <a href="">10 Videos</a>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white self-stretch flex flex-col pt-5 pb-7 px-5">
                    <div className="border-t-[color:var(--btn\_stroke,#FFF)] border-l-[color:var(--btn\_stroke,#FFF)] shadow-md bg-[radial-gradient(171.63%_171.63%_at_50%_50%,#FFF_0%,rgba(255,255,255,0.00)_100%),radial-gradient(50%_50%_at_50%_50%,#FFF_0%,rgba(255,255,255,0.00)_100%),#D8DEE3] flex w-full flex-col items-stretch pl-8 pr-2.5 pt-4 pb-12 rounded-3xl border-l-2 border-t-2 border-solid max-md:pl-5">
                      <div className="flex justify-between gap-5">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/990769f6-5e4b-47de-8c53-d6df0ef743b8?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&"
                          className="aspect-[1.41] object-contain object-center w-12 overflow-hidden shrink-0 max-w-full mt-6"
                        />
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5268fc83-4019-4e7c-b94a-ca35bcf88f6e?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&"
                          className="aspect-[0.64] object-contain object-center w-4 overflow-hidden shrink-0 max-w-full self-start"
                        />
                      </div>
                      <div className="justify-center text-blue-950 text-base leading-5 capitalize mt-5 mb-1.5">
                        10 Photos
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-center text-blue-950 text-2xl leading-7 capitalize mt-7 max-md:max-w-full">
          User Review 100 &gt;
        </div>
        <div className="relative bg-white flex w-[921px] max-w-full flex-col items-stretch pt-5 pb-7 px-5 self-start">
          <div className="border-t-[color:var(--btn\_stroke,#FFF)] border-l-[color:var(--btn\_stroke,#FFF)] shadow-md bg-[radial-gradient(171.63%_171.63%_at_50%_50%,#FFF_0%,rgba(255,255,255,0.00)_100%),radial-gradient(50%_50%_at_50%_50%,#FFF_0%,rgba(255,255,255,0.00)_100%),#D8DEE3] flex justify-between gap-5 mr-2.5 pl-6 pr-7 py-5 rounded-3xl border-l-2 border-t-2 border-solid max-md:max-w-full max-md:flex-wrap max-md:px-5">
            <div className="flex grow basis-[0%] flex-col items-stretch mt-1.5 max-md:max-w-full">
              <div className="justify-center text-blue-950 text-2xl leading-7 capitalize max-md:max-w-full">
                Lorem Ipsum
              </div>
              <div className="text-black text-base leading-5 capitalize mt-6 max-md:max-w-full">
                <a href="./forum">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </a>
                <button onClick={addComment}>Add Comment</button>
                <button onClick={() => removeComment(1)}>Remove Comment</button>
          <button onClick={() => likeComment(1)}>Like Comment</button>
          <button onClick={() => addReply(1, 'Reply text')}>Add Reply</button>
              </div>
            </div>
            <div className="self-stretch flex basis-[0%] flex-col items-center">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/321637f4-e529-44ac-97df-426341c086a5?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/321637f4-e529-44ac-97df-426341c086a5?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/321637f4-e529-44ac-97df-426341c086a5?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/321637f4-e529-44ac-97df-426341c086a5?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/321637f4-e529-44ac-97df-426341c086a5?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/321637f4-e529-44ac-97df-426341c086a5?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/321637f4-e529-44ac-97df-426341c086a5?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/321637f4-e529-44ac-97df-426341c086a5?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&"
                className="aspect-[1.11] object-contain object-center w-[105px] overflow-hidden"
              />
              <div className="text-black text-base leading-5 capitalize mt-4">
                user 1
              </div>
            </div>
          </div>
        </div>
        <div className="relative shadow-lg bg-zinc-600 self-stretch flex w-full flex-col items-center mt-5 pt-12 pb-px px-5 border-2 border-solid border-white border-opacity-0 max-md:max-w-full">
          <div className="flex w-[604px] max-w-full flex-col items-stretch mt-6">
            <div className="text-black text-2xl leading-7 capitalize max-md:max-w-full">
              Home Games Film Anime Songs More
            </div>
            <div className="text-black text-2xl leading-7 capitalize whitespace-nowrap mt-12 max-md:max-w-full max-md:mt-10">
              STANPEDIA ©2023 All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;




