import React from "react";
import { IMAGAE_BASE_URL } from "../utils/constant";

function HrMovieCard({ movie }) {
  return (
    <div className="hover:scale-110 transition-all ease-in duration-200">
      <img
        src={IMAGAE_BASE_URL + movie.backdrop_path}
        className="w-[110px] md:w-[260px] rounded-lg hover:border-[3px] border-gray-100  cursor-pointer "
      />
      <h2 className="w-[110px] md:w-[260px] text-white mt-2 text-center text-[15px] font-semibold">{movie.title}</h2>
    </div>
  );
}

export default HrMovieCard;
