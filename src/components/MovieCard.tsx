import { IMG_CDN_URL } from "../utils/constants"; // Fixed Path & Syntax

const MovieCard = ({poster}: {poster: string}) => {
  if(!poster){
    return null;
  }

  return (
    <div className="m-1 md:m-2 shrink-0">
        {/* Changed w-25 to w-24 because w-25 is not a standard Tailwind class */}
        <img className="w-24 md:w-40 rounded-md " 
        src={IMG_CDN_URL+poster} 
        alt={poster} />
    </div>
  )
}

export default MovieCard;