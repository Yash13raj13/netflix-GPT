import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
interface VidBgProps {
    Mid: number;
}
const VidBg: React.FC<VidBgProps> = ({Mid}) => {
    const TrailerKey=useSelector((store:any)=>store.movies?.trailerVideoId);
   useMovieTrailer(Mid);
    return (
        <div className="w-full h-auto overflow-hidden">
            <iframe
                className="w-screen aspect-video  " 
                src={`https://www.youtube.com/embed/${TrailerKey}?si=oOn5Fy1MgnPs0AH-&autoplay=1&mute=1&controls=0&loop=1&playlist=${TrailerKey}`} 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                 
                >
                    
                </iframe>
        </div>
    )
}
export default VidBg;