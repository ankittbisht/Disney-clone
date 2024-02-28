import React, { useState, useEffect } from "react";
import { IMAGAE_BASE_URL } from "../utils/constant";

import "../App.css"

function MovieCard({ movie }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      setLoading(false);
    };
    image.src = IMAGAE_BASE_URL + movie.poster_path;
  }, [movie]);

  return (
    <>
      {loading ? (
        <div className="shimmer-loading w-[110px] md:w-[200px] rounded-lg"></div>
      ) : (
        <img
          src={IMAGAE_BASE_URL + movie.poster_path}
          className="w-[110px] md:w-[200px] rounded-lg hover:border-[3px] border-gray-100  cursor-pointer hover:scale-110 transition-all ease-in duration-200"
          onLoad={() => setLoading(false)}
        />
      )}
    </>
  );
}

export default MovieCard;
