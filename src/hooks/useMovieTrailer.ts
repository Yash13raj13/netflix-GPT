import { useEffect } from "react";
import { useDispatch } from "react-redux"; // Removed useSelector if not used elsewhere
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieId: number) => {
  const dispatch = useDispatch();

  

  const getMovieVideos = async () => {
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
    getMovieVideos();
  }, [movieId]);
};

export default useMovieTrailer;