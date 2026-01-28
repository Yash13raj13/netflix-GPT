import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import type { RootState } from "../utils/appStore";

const GptSuggestions = () => {
  const {movieListResult,movieNamesResult}=useSelector((state:RootState)=>state.gptview);
  if(!movieNamesResult || !movieListResult){
    return null;
  }
  return (
    <div className="p-4 m-4 bg-black/80 text-white flex justify-center ">
      <div>
        {/* @ts-expect-error - movieNamesResult is inferred as never but is actually a string array */}
        {movieNamesResult.map((name: string,index:number) => (
          <MovieList key={name} title={name} movies={movieListResult[index]} />
        ))}
      </div>
    </div>
  )
}

export default GptSuggestions