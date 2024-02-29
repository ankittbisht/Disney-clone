import React, { useEffect, useRef, useState } from "react";
import MovieCard from "./MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import HrMovieCard from "./HrMovieCard";
import { GENRE_MOVIE_API } from "../utils/constant";
import ShimmerCard from "./ShimmerCard";

function MovieList({ genreId, index_i }) {
  const [genreMovie, SetGenreMovie] = useState([]);
  const elemRef = useRef(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(GENRE_MOVIE_API + genreId);
    const json = await data.json();

    SetGenreMovie(json.results);
  };

  const slideRight = (element) => {
    element.current.scrollLeft += 500;
  };
  const slideLeft = (element) => {
    element.current.scrollLeft -= 500;
  };

  return genreMovie.length === 0 ? (
    <ShimmerCard iterations={5} />
   ) : (
    <div className="relative">
      <IoChevronBackOutline
        onClick={() => slideLeft(elemRef)}
        className={`text-[50px] text-white
           p-2 pl-0 z-10 cursor-pointer 
            hidden md:block absolute
            ${index_i % 3 == 0 ? "mt-[80px]" : "mt-[150px]"} `}
      />

      <div
        className="flex overflow-x-auto gap-8 scrollbar-none scroll-smooth py-5 px-3"
        ref={elemRef}
      >
        {genreMovie.map((item, index) => (
          <React.Fragment key={item.id}>
            {index_i % 3 == 0 ? (
              <HrMovieCard movie={item} />
            ) : (
              <MovieCard movie={item} />
            )}
          </React.Fragment>
        ))}
      </div>
      <IoChevronForwardOutline
        onClick={() => slideRight(elemRef)}
        className={`text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 top-0
            absolute right-0 ${index_i % 3 == 0 ? "mt-[80px]" : "mt-[150px]"}
            `}
      />
    </div>
  );
}

export default MovieList;
