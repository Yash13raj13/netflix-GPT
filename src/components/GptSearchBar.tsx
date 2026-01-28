import { API_OPTIONS } from "../utils/constants"; 
import { useDispatch } from "react-redux";
import { useRef } from "react";
import { addMoviesToList } from "../utils/gptSlice"; 
import client from "./Gemini";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef<HTMLInputElement | null>(null);

  const searchMovieTMDB = async (movie: string) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearch = async () => {
    if (!searchText.current) return;
    const query = "Recommend 5 movies for: " + searchText.current.value + ". Comma separated only.";

    try {
      const result = await client.generateContent(query);
      const text = result.response.text();
      const movieResult = text.split(",");

      const movieDataPromises = movieResult.map((movie: string) => searchMovieTMDB(movie.trim()));
      const movieDataArrays = await Promise.all(movieDataPromises);

      dispatch(addMoviesToList({ movieNames: movieResult, movieList: movieDataArrays }));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="pt-[30%] md:pt-[10%] flex justify-center ">
      <form className="p-4 grid grid-cols-12 w-full md:w-1/2" onSubmit={(e) => e.preventDefault()}>
        <input ref={searchText} type="text" className="p-2 col-span-9 text-black" placeholder="Search..." />
        <button type="button" className="p-2 bg-red-800 text-white col-span-3" onClick={handleGptSearch}>Search</button>
      </form>
    </div>
  );
};

export default GptSearchBar;