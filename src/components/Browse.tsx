import Header from "./Header";
import Gpt from "./Gpt";
import MainCont from "./MainCont";
import SecCont from "./SecCont";
import { useSelector } from "react-redux";
import type { RootState } from "../utils/appStore"; // Fixed Path

const Browse = () => {
  const gptView = useSelector((store: RootState) => store.gpt.GptButton); // Changed from showGptSearch
  return (
    <div>
      <Header />
      {gptView ? (
        <Gpt />
      ) : (
        <>
          <MainCont />
          <SecCont />
        </>
      )}
    </div>
  ); 
};   

export default Browse;