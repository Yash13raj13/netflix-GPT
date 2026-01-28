import { LOGO, USER_AVATAR } from "../utils/constants";
import { auth } from "../utils/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { toggleGptButton } from "../utils/gptSlice"; // Ensure file is named gptSlice.ts
import type { RootState } from "../utils/appStore";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store: RootState) => store.user);
  
  // Accessing the GPT slice state
  const showGptSearch = useSelector((store: RootState) => store.gptview.GptButton);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptButton());
  }

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-20 flex justify-between items-center">
      
      {/* ✅ Logo: Responsive width (Small on Mobile, Standard on Desktop) */}
      <img className="w-24 md:w-44" src={LOGO} alt="logo" />
      
      {user && (
        <div className="flex p-2 items-center justify-between">
           
           {/* GPT Search Button */}
           <button 
            className="py-2 px-4 mx-4 bg-purple-800 text-white rounded-lg hover:bg-purple-900 transition-all duration-200"
            onClick={handleGptSearchClick}
           >
            {showGptSearch ? "Homepage" : "GPT Search"}
           </button>
          
          {/* User Avatar */}
          <img 
            className="hidden md:block w-10 h-10 rounded-md" 
            alt="usericon" 
            src={USER_AVATAR} 
          />
          
          {/* Sign Out Button */}
          <button 
            onClick={handleSignOut} 
            className="font-bold text-white ml-2 p-2 hover:text-red-500 transition-colors duration-200"
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;