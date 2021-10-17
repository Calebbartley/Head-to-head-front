import React, { useState } from 'react';

const Likes =()=>  {

    const [isLiked, updateLike] = useState(false);


  const handleLike = () => {
    if (!isLiked) {
      updateLike(true);
    } else {
      updateLike(false);
    }

    return (
        <div>
            <button
            onClick={handleLike}
            disabled={isLiked}
            >Likes</button>
            <button
            onClick={handleLike}
            disabled={!isLiked}
            >
           dislike </button>
        </div>
    )
}}

export default Likes