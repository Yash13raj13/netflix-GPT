import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants"; // Fixed Path
import { addPopularMovies } from "../utils/movieSlice"; // Fixed Path
import type { RootState } from "../utils/appStore"; // Fixed Path

const usePopularMovies = () => {
  const dispatch = useDispatch();

  // 1. Typed Selector
  const popularMovies = useSelector(
    (store: RootState) => store.movies.popularMovies
  );

  const getPopularMovies = async () => {
    try {
      // 2. Fetch Popular Movies
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        API_OPTIONS
      );

      if (!data.ok) throw new Error("Failed to fetch popular movies");

      const json = await data.json();
      
      // 3. Dispatch action
      dispatch(addPopularMovies(json.results));
      
    } catch (error) {
      console.error("Error fetching popular movies:", error);
    }
  };

  useEffect(() => {
    // 4. Memoization: Fetch only if data is missing
    if (!popularMovies) {
      getPopularMovies();
    }
  }, []);
};

export default usePopularMovies;