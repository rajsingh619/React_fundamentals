import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";

export default function ContentArea({ searchText }) {
  const [moviesObject, setMoviesObject] = useState({
    Search: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  //search functionality will go here
  useEffect(() => {
    async function fetchMovies() {
      setIsLoading(true);
      try{
        const response = await fetch(
        `http://www.omdbapi.com/?apikey=8c34f061&i=tt3896198&s=${searchText}`,
      );
      if(!response.ok){
        throw new Error("Failed to fetch movies...")
      }
      const resData = await response.json();
      setMoviesObject(resData);
      }catch(error){
        
      }
      setIsLoading(false);
    }
    fetchMovies();
  }, [searchText]);

  const movieObjectList = moviesObject.Search || [];

  return (
    <>
      <div className="flex flex-col">
        {isLoading && <p>Loading the movies...</p>}
          {!isLoading && movieObjectList.length>0 ? (
            <>
              {(searchText!="")&&<p className="">Search results for: {searchText}</p>}
              <div className="flex  flex-wrap justify-center gap-20 m-8">
              {movieObjectList.map((movies) => {
                return (
                  <MovieCard
                    title={movies.Title}
                    imgSrc={movies.Poster}
                    alt={movies.Title}
                    year={movies.Year}
                    key={movies.imdbID}
                  />
                );
              })}
              </div>
            </>
          ) : (
            <p>Search for your favorite movies</p>
          )}
      </div>
    </>
  );
}
