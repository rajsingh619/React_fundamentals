export default function MovieModal({ ref, movieId, onClose }) {
  return (
    <>
      <dialog className="relative mx-auto my-auto h-fit w-1/2 bg-[#4A5565] border-2 rounded-2xl scrollbar-thin scrollbar-track-[#31363F] scrollbar-thumb-red-300 hover:scrollbar-thumb-red-400" ref={ref}>
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl text-red-400 font-bold m-2 underline">
            The Batman
          </h1>
          <img
            src="https://m.media-amazon.com/images/M/MV5BMmU5NGJlMzAtMGNmOC00YjJjLTgyMzUtNjAyYmE4Njg5YWMyXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg"
            alt="alternative images"
            className="rounded-4xl shadow-2xl shadow-gray-200 border-2 border-white h-80 w-80 "
          />
        </div>
        <p className="text-center m-4 mt-12 text-red-300 font-semibold">"When a sadistic serial killer begins murdering key political figures in Gotham, the Batman is forced to investigate the city's hidden corruption and question his family's involvement."</p>
        <div className="flex justify-evenly">
          <p className="text-xl text-red-300">IMDB: <span className="text-white">7.8</span> </p>
         <p className="text-xl text-red-300">RottenTomatoes: <span className="text-white">85%</span> </p>
        </div>
        <div className="flex justify-around m-4">
          <p className="text-xl text-red-300">
            Release Date: <span className="text-white">04-MARCH-2022</span>{" "}
          </p>
          <p className="text-xl text-red-300">
            Runtime: <span className="text-white">176 min</span>
          </p>
          <p className="text-xl text-red-300">
            Rated: <span className="text-white">PG-13</span>
          </p>
        </div>
        <p className="text-center text-xl text-red-300 m-4">
          Genre: <span className="text-white">Action, Crime, Drama</span>
        </p>
        <p className="text-center text-xl text-red-300 m-4">
          Director: <span className="text-white">Matt Reeves</span>
        </p>
        <p className="text-center text-xl text-red-300 m-4">
          Writer: <span className="text-white">Matt Reeves, Peter Craig, Bob Kane</span>
        </p>
        <p className="text-center text-xl text-red-300 m-4">
          Actors: <span className="text-white">Robert Pattinson, Jeffrey Wright </span>
        </p>
        <p className="text-center text-xl text-red-300 m-4">
          Box Office Collection: <span className="text-white">$369,801,546 </span>
        </p>

       
          <button className="absolute top-4 right-4 text-3xl text-gray-300 hover:text-red-400 transition-colors" onClick={onClose}>&times;</button>
       
      </dialog>
    </>
  );
}
