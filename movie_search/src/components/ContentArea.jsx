import MovieCard from "./MovieCard";

export default function ContentArea() {
  return (
    <>
      <div className="flex flex-col m-8">
        <div className="flex justify-around ">
          <MovieCard
            title={"Spiderman - The Amazingaaaaaaaaaaaaaaaaaaa"}
            imgSrc={
              "https://m.media-amazon.com/images/M/MV5BNzI0MmQyMzYtZDAzNi00ZWZiLWFjMTgtNzQwOTRjYTFlM2Y3XkEyXkFqcGc@._V1_SX300.jpg"
            }
            alt={"The amazing spider"}
            year={2021}
          />
          <MovieCard
            title={"Batman Begins"}
            imgSrc={
              "https://m.media-amazon.com/images/M/MV5BMzA2NDQzZDEtNDU5Ni00YTlkLTg2OWEtYmQwM2Y1YTBjMjFjXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg"
            }
            alt={"Batman Begins"}
            year={2021}
          />
          <MovieCard
            title={"The Batman"}
            imgSrc={
              "https://m.media-amazon.com/images/M/MV5BMmU5NGJlMzAtMGNmOC00YjJjLTgyMzUtNjAyYmE4Njg5YWMyXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg"
            }
            alt={"The amazing spider"}
            year={2021}
          />
        </div>
         <div className="flex justify-around m-8">
          <MovieCard
            title={"Spiderman - The Amazing"}
            imgSrc={
              "https://m.media-amazon.com/images/M/MV5BZTJkYjdmYjYtOGMyNC00ZGU1LThkY2ItYTc1OTVlMmE2YWY1XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg"
            }
            alt={"The amazing spider"}
            year={2021}
          />
          <MovieCard
            title={"Spiderman - The Amazing"}
            imgSrc={
              "https://m.media-amazon.com/images/M/MV5BZTliMDVkYTktZDdlMS00NTAwLWJhNzYtMWIwMDZjN2ViMGFiXkEyXkFqcGc@._V1_SX300.jpg"
            }
            alt={"The amazing spider"}
            year={2021}
          />
          <MovieCard
            title={"Spiderman - The Amazing"}
            imgSrc={
              "https://m.media-amazon.com/images/M/MV5BNzI0MmQyMzYtZDAzNi00ZWZiLWFjMTgtNzQwOTRjYTFlM2Y3XkEyXkFqcGc@._V1_SX300.jpg"
            }
            alt={"The amazing spider"}
            year={2021}
          />
        </div>
      </div>
    </>
  );
}
