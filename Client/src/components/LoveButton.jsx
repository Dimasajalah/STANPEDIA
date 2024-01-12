import React, { useState } from "react";

const LoveButton = () => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked((prevLiked) => !prevLiked);
  };

  return (
    <button
      className={`text-4xl`}
      onClick={handleLikeClick}
    >
      {liked ? "❤️" : "🤍"}
    </button>
  );
};

export default LoveButton;
















