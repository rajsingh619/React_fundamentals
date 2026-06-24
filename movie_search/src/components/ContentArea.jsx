import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import ErrorComponent from "./ErrorComponent";

export default function ContentArea({ searchText }) {
  const [moviesObject, setMoviesObject] = useState({
    Search: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const[error,setError] = useState();
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
      if(resData.Response=="False"){
        throw new Error("No movies found please enter valid name")
      }
      setMoviesObject(resData);
      }catch(error){
        setError({
          message: error.message || "Internal failure, please try again later"
        });
      }
      setIsLoading(false);
    }
    fetchMovies();
  }, [searchText]);

  if(error){
    return (
      <ErrorComponent error = {error}/>
    )
  }

  const movieObjectList = moviesObject.Search || [];

  return (
    <>
      <div className="flex flex-col">
        {isLoading && <Loading/>}
          {!isLoading && movieObjectList.length>0 ? (
            <>
              {(searchText!="")&&<p className="text-white text-xl m-4">Search results for : <span className="font-semibold text-red-400">{searchText}</span></p>}
              <div className="flex  flex-wrap justify-center gap-20 m-8">
              {movieObjectList.map((movies) => {
                return (
                  <MovieCard
                    id = {movies.imdbID}
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
