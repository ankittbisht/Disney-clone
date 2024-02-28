import React, { useEffect, useRef, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import {
  IMAGAE_BASE_URL,
  SCREEN_WIDTH,
  TRENDING_MOVIE,
} from "../utils/constant";
import Shimmer from "./Shimmer";

function Slider() {
  const [movies, SetMovies] = useState([]);

  const elemRef = useRef();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(TRENDING_MOVIE);
    const json = await data.json();

    console.log(json.results);
    SetMovies(json.results);
  };

  const sliderRight = (element) => {
    element.current.scrollLeft += SCREEN_WIDTH - 120;
  };
  const sliderLeft = (element) => {
    element.current.scrollLeft -= SCREEN_WIDTH - 120;
  };

  return movies.length === 0 ? (
   <Shimmer/>
  ) : (
    <div>
      <HiChevronLeft
        className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer"
        onClick={() => sliderLeft(elemRef)}
      />
      <HiChevronRight
        className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0 "
        onClick={() => sliderRight(elemRef)}
      />
      <div
        className="flex  overflow-x-auto px-16 py-4 scrollbar-none scroll-smooth"
        ref={elemRef}
      >
        {movies.map((movie) => (
          <img
            src={IMAGAE_BASE_URL + movie.backdrop_path}
            key={movie.id}
            className="object-cover md:object-left-top md:h-[310px] min-w-full mr-5 rounded-md hover:border-[4px] border-gray-100 transition-all duration-100 ease-out"
            alt={movie.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
