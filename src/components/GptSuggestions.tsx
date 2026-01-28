import { useSelector } from "react-redux";
import type { RootState } from "../utils/appStore";
import MovieList from "./MovieList";

const GptSuggestions = () => {
  const { movieNamesResult, movieListResult } = useSelector((store: RootState) => store.gpt);

  if (!movieNamesResult || !movieListResult) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        {movieNamesResult.map((movieName: string, index: number) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieListResult[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptSuggestions;