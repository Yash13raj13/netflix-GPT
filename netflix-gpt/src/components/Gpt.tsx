import { BG_IMG } from "../utils/constants"
import GptSearchBar from "./GptSearchBar"
import GptSuggestions from "./GptSuggestions"


const Gpt = () => {
  return (
    <div>
        <div className="fixed ">
            <img src={BG_IMG} alt="bgImg" className="object-cover w-screen h-screen" />
        </div>
        <div className="relative bg-linear-to-t from-black/30 to-black/70 h-screen">
        <GptSearchBar />
        <GptSuggestions />
        </div>
    </div>
  )
}

export default Gpt