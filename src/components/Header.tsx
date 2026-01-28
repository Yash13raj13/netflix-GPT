import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGO } from "../utils/constants";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptButton } from "../utils/gptSlice"; // Fixed Case
import type { RootState } from "../utils/appStore";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store: RootState) => store.user);
  const showGptSearch = useSelector((store: RootState) => store.gpt.GptButton);

  const handleSignOut = () => {
    signOut(auth).catch(() => {
      navigate("/error");
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-20 flex justify-between">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2 items-center">
          <button className="py-2 px-4 bg-purple-800 text-white rounded-lg" onClick={() => dispatch(toggleGptButton())}>
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <button onClick={handleSignOut} className="font-bold text-white ml-2">(Sign Out)</button>
        </div>
      )}
    </div>
  );
};

export default Header;