import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";

export default function ContentArea({ searchText }) {
  const [moviesObject, setMoviesObject] = useState({
    Search: [
      {
        Title: "",
      },
    ],
  });
  //search functionality will go here
  useEffect(() => {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=8c34f061&s=${searchText}`)
      .then((response) => {
        return response.json();
      })
      .then((resData) => setMoviesObject(resData));
  }, [searchText]);

  console.log(moviesObject);

  const moviebjectList = moviesObject.Search;
  // const rows = Math.ceil(moviebjectList.length / 3);

  return (
    <>
      <p className="text-white m-8">Search Results for: {searchText} </p>
      <div className="flex flex-col">
        <div className="flex  flex-wrap justify-center gap-20 m-8">
          {moviebjectList.map((movies) => {
            return (
              <MovieCard
                title={movies.Title}
                imgSrc={
                  movies.Poster
                }
                alt={movies.Title}
                year={movies.Year}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
