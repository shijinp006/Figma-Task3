import { LandingPage } from "./components/landingpage";
import { Banner } from "./components/banner";
import { BestDeliciousFood } from "./components/the best delicious food ";
import { DeliciousItem } from "./components/hotdeliciousitems";

export const Home = () => {
  return (
    <>
      <div className="flex flex-wrap w-full h-screen justify-center items-center">
        <div className="w-full">
          <LandingPage />
        </div>
        <div className="w-full">
          <Banner />
        </div>
        <div className="w-full">
          <BestDeliciousFood/>
        </div>
        <div className="w-full"><DeliciousItem/></div>
      </div>
    </>
  );
};
