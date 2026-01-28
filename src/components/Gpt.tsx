import { BG_IMG } from "../utils/constants"; // Fixed Path & Syntax
import GptSearchBar from "./GptSearchBar";
import GptSuggestions from "./GptSuggestions";

const Gpt = () => {
  return (
    <div>
        <div className="fixed -z-10">
            <img src={BG_IMG} alt="bgImg" className="object-cover w-screen h-screen" />
        </div>
        <div className="relative">
            <GptSearchBar />
            <GptSuggestions />
        </div>
    </div>
  )
}

export default Gpt;