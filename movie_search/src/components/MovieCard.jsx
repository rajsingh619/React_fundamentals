export default function MovieCard({ title, imgSrc, alt, year }) {
  return (
    <div className="w-80 h-fit m-4">
      <img
        src={imgSrc}
        alt={alt}
        className="rounded-2xl shadow-xl border-2 border-white h-80 w-80 "
      />
      <p className="text-white text-xl font-bold truncate">{title}</p>
      <p className="text-white font-semibold text-xl">Year: {year}</p>
      <a href="" className="text-white underline hover:text-blue-200">show details</a>
    </div>
  );
}
