import Header from "./Header";
import Gpt from "./Gpt";
import MainCont from "./MainCont";
import SecCont from "./SecCont";
import { useSelector } from "react-redux";
import type { RootState } from "../utils/appStore";

const Browse = () => {
  const gptView = useSelector((store: RootState) => store.gpt.showGptSearch);

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