import MovieCard from "./MovieCard"
interface MovieListProps {
    title: string;
    movies: {
        id: number;
        poster_path: string;
    }[];
}
const MovieList = ({title, movies}: MovieListProps) => {
  return (
    <div>
        <h1 className="text-lg md:text-2xl font-bold text-white px-1.5 md:px-3">{title}</h1>
        <div className="flex overflow-x-scroll no-scrollbar">
            {movies.map((movie) => (
                <MovieCard key={movie.id} poster={movie.poster_path} />
            ))}
        </div>
    </div>
  )
}

export default MovieList