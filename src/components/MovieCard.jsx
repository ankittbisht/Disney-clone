import React from "react";
import { IMAGAE_BASE_URL } from "../utils/constant";

function MovieCard({ movie }) {
  return (
    <>
      <img
        src={IMAGAE_BASE_URL + movie.poster_path}
        className="w-[110px] md:w-[200px] rounded-lg hover:border-[3px] border-gray-100  cursor-pointer hover:scale-110 transition-all ease-in duration-200"
      />
    </>
  );
}

export default MovieCard;
