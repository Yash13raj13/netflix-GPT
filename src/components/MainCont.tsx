import { useSelector } from "react-redux";
import { useMemo } from "react";
import VidTitle from "./VidTitle";
import VidBg from "./VidBg";
import type { RootState } from "../utils/appStore";

interface Movie {
  id: number;
  title: string;
  overview: string;
}

const MainCont = () => {
  // 1. Fix Typing: Cast the selector to Movie[] | null
  // This tells TypeScript that 'movies' is an array, enabling .length and indexing
  const movies = useSelector((store: RootState) => store.movies?.nowPlayingMovies) as Movie[] | null;

  // 2. Memoize the random selection to prevent re-randomizing on every click/re-render
  const mainMovie = useMemo(() => {
    if (!movies || movies.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * movies.length);
    return movies[randomIndex];
  }, [movies]);

  // 3. Early Return: If movies aren't loaded yet, don't try to render
  if (!mainMovie) return null; 

  const { title, overview, id } = mainMovie;

  return (
    <div className="pt-36 md:pt-0"> 
      <VidTitle title={title} overview={overview} />
      <VidBg Mid={id} />
    </div>
  );
};

export default MainCont;