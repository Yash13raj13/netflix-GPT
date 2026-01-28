import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import type { RootState } from "../utils/appStore";

const useMovieTrailer = (movieId: number) => {
  const dispatch = useDispatch();

  // 1. Optimization: Use RootState for better TypeScript support (optional)
  const trailerVideo = useSelector((store: RootState) => store.movies.trailerVideo);

  const getMovieVideos = async () => {
    // 2. CRITICAL FIX: Removed the extra space after "movie/"
    // Previous: "https://api.themoviedb.org/3/movie/ " + movieId
    // Fixed:    "https://api.themoviedb.org/3/movie/" + movieId
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US",
      API_OPTIONS
    );

    const json = await data.json();

    const filterData = json.results.filter((video: any) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    // 3. Logic Improvement:
    // Only fetch if we don't have a trailer OR if the movieId has changed.
    // However, if you switch movies, 'trailerVideo' might still exist from the previous movie.
    // For now, it is safer to fetch every time 'movieId' changes.
    getMovieVideos();
    
  }, [movieId]); // 4. Added 'movieId' to dependency array so it updates if the movie changes
};

export default useMovieTrailer;