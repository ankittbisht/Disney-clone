import React from "react";
import { genere } from "../utils/GenresList";
import MovieList from "./MovieList";

function GenreMovieList() {
  return (
    <div>
      {genere.map(
        (item, index) =>
          index <= 6 && (
            <div key={item.id} className="p-8 px-8 md:px-16">
              <h1 className="flex items-center text-[20px] text-white font-bold">
                {item.name}
              </h1>
              <MovieList key={item.id} genreId={item.id} index_i={index} />
            </div>
          )
      )}
    </div>
  );
}

export default GenreMovieList;
