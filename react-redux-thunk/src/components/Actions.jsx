import React, { useState } from "react";

function Actions() {
  const [likes, setLikes] = useState(0);

  const increaseLikes = () => {
    setLike(likes + 1);
  };

  const decreaseLikes = () => {
    if (likes > 0) {
      setLike(likes - 1);
    }
  };

  return (
    <div>
      <h1>{likes}</h1>
      <button onClick={increaseLikes}>Like</button>
      <button onClick={decreaseLikes} disabled={likes === 0}>
        Dislike
      </button>
    </div>
  );
}

export default Actions;
