import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants"; // Fixed Path
import { addNowPlayingMovies } from "../utils/movieSlice"; // Fixed Path
import type { RootState } from "../utils/appStore"; // Fixed Path

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  // 1. Use RootState instead of 'any' for better autocomplete
  const nowPlayingMovies = useSelector(
    (store: RootState) => store.movies.nowPlayingMovies
  );

  const getNowPlayingMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS
      );
      
      if (!data.ok) {
        throw new Error("Failed to fetch movies");
      }

      const json = await data.json();
      
      // 2. Dispatch the results to the store
      dispatch(addNowPlayingMovies(json.results));
      
    } catch (error) {
      console.error("Error fetching now playing movies:", error);
    }
  };

  useEffect(() => {
    // 3. Memoization: Only fetch if data is NOT in the store
    if (!nowPlayingMovies) {
      getNowPlayingMovies();
    }
  }, []); // Empty dependency array = run once on mount
};

export default useNowPlayingMovies;