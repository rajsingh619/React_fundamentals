import { useEffect, useState } from "react";

export default function MovieModal({ ref, movieId, onClose }) {
  const [movieDetails, setMovieDetails] = useState(null);
  const [loadingMovie, setLoadingMovie] = useState(false);
  const[error,setError] = useState();

  useEffect(() => {
    async function fetchMovieDetails() {
      if (!movieId) return;

      setLoadingMovie(true);

      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=8c34f061&i=${movieId}`
        );
        if(!response.ok){
          throw new Error("failed to fetch movie details...")
        }

        const resData = await response.json();
        setMovieDetails(resData);
      } catch (error) {
        setError({
          message: error.message||"failure"
        })
      } finally {
        setLoadingMovie(false);
      }
    }

    fetchMovieDetails();
  }, [movieId]);

  if(error){
    return(
      <>
      <p>Error occured: {error.message}</p>
      </>
    )
  }

  return (
    <dialog
      className="relative mx-auto my-auto h-fit w-1/2 bg-[#4A5565] border-2 rounded-2xl scrollbar-thin scrollbar-track-[#31363F] scrollbar-thumb-red-300 hover:scrollbar-thumb-red-400"
      ref={ref}
    >
      {loadingMovie ? (
        <div className="flex items-center justify-center h-96">
          <p className="text-white text-xl">
            Please wait while movie details are loading...
          </p>
        </div>
      ) : (
        movieDetails && (
          <>
            <div className="flex flex-col items-center gap-4">
              <h1 className="text-4xl text-red-400 font-bold m-2 underline">
                {movieDetails.Title}
              </h1>

              <img
                src={movieDetails.Poster}
                alt="alternative images"
                className="rounded-4xl shadow-2xl shadow-gray-200 border-2 border-white h-80 w-80"
              />
            </div>

            <p className="text-center m-4 mt-12 text-red-300 font-semibold">
             {movieDetails.Plot}
            </p>

            <div className="flex justify-evenly">
              <p className="text-xl text-red-300">
                IMDB: <span className="text-white">{movieDetails.Ratings[0]?.Value}</span>
              </p>

              <p className="text-xl text-red-300">
                RottenTomatoes: <span className="text-white">{movieDetails.Ratings[1]?.Value}</span>
              </p>
            </div>

            <div className="flex justify-around m-4">
              <p className="text-xl text-red-300">
                Release Date:
                <span className="text-white">{movieDetails.Released}</span>
              </p>

              <p className="text-xl text-red-300">
                Runtime:
                <span className="text-white">{movieDetails.Runtime}</span>
              </p>

              <p className="text-xl text-red-300">
                Rated:
                <span className="text-white">{movieDetails.Rated}</span>
              </p>
            </div>

            <p className="text-center text-xl text-red-300 m-4">
              Genre:
              <span className="text-white">{movieDetails.Genre}</span>
            </p>

            <p className="text-center text-xl text-red-300 m-4">
              Director:
              <span className="text-white">{movieDetails.Director}</span>
            </p>

            <p className="text-center text-xl text-red-300 m-4">
              Writer:
              <span className="text-white">
               {movieDetails.Writer}
              </span>
            </p>

            <p className="text-center text-xl text-red-300 m-4">
              Actors:
              <span className="text-white">
                {movieDetails.Actors}
              </span>
            </p>

            <p className="text-center text-xl text-red-300 m-4">
              Box Office Collection: 
              <span className="text-white">{movieDetails.BoxOffice}</span>
            </p>

            <button
              className="absolute top-4 right-4 text-3xl text-gray-300 hover:text-red-400 transition-colors"
              onClick={onClose}
            >
              &times;
            </button>
          </>
        )
      )}
    </dialog>
  );
}