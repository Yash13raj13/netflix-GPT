import { useSelector } from "react-redux";
import { useMemo } from "react";
import VidTitle from "./VidTitle";
import VidBg from "./VidBg";
import type { RootState } from "../utils/appStore";

// Recommendation: Move this to a central types file (e.g., types.ts)
interface Movie {
  id: number;
  title: string;
  overview: string;
}

const MainCont = () => {
  // 1. Better Typing: Cast the selector result so TS knows it is an array of Movies
  const movies = useSelector((store: RootState) => store.movies?.nowPlayingMovies);

  // 2. Fix "Flickering": Use useMemo to pick a random movie ONLY when the 'movies' list changes.
  // Without this, every time you click a button or type (causing a re-render), the background movie would randomize again.
  const mainMovie = useMemo(() => {
    if (!movies || movies.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * movies.length);
    return movies[randomIndex];
  }, [movies]);

  // 3. Early Return: Handle loading state
  if (!mainMovie) return null; // Or return a Shimmer/Loading component

  const { title, overview, id } = mainMovie;

  return (
    <div className="pt-36 md:pt-0"> 
      <VidTitle title={title} overview={overview} />
      <VidBg Mid={id} />
    </div>
  );
};

export default MainCont;