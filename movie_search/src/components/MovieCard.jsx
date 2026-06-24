import { useState,useRef } from "react";
import MovieModal from "./MovieModal";

export default function MovieCard({ title, imgSrc, alt, year, id }) {
  const [showDetail, setShowDetail] = useState(false);
  const [movieId, setMovieId] = useState();
  const dialog = useRef();

  function handleClick(id) {
    setMovieId(id);
    dialog.current.showModal(); //adding the showModal button automatically creates the backdrop 
    setShowDetail(true);
  }

  function handleClose(){
     setShowDetail(false);
     dialog.current.close();
  }

  return (
    <>
    <MovieModal ref={dialog} movieId={movieId} open={showDetail} onClose={handleClose}/>
      <div className="w-80 h-fit m-4">
        <img
          src={imgSrc}
          alt={alt}
          className="rounded-4xl shadow-2xl shadow-gray-200 border-2 border-white h-80 w-80 transition-transform
duration-300
hover:scale-105
hover:shadow-2xl "
        />
        <p className="text-white text-xl font-bold truncate">{title}</p>
        <p className="text-white font-semibold text-xl">Year: {year}</p>
        <button
          onClick={() => handleClick(id)}
          className="text-white underline hover:text-blue-200"
        >
          show details
        </button>
      </div>
    </>
  );
}
