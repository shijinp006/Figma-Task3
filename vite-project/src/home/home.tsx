import { LandingPage } from "./components/landingpage";
import { Banner } from "./components/banner";
import { BestDeliciousFood } from "./components/the best delicious food ";
import { DeliciousItem } from "./components/hotdeliciousitems";
import { BlackBanner } from "./components/blackbanner";
import { DeliveryChallenge } from "./components/fastdeliverychallenge";
import { TodaySpecialDelicious } from "./components/todayspecildelicious";
import { TrendingFoodMenu } from "./components/trendingfoodmenu";
import { BurgerPizzaBanner } from "./components/burger&pizzabanner";
import { QualityMeet } from "./components/qualitymeet";
import { HowWeServeYou } from "./components/howweserveyou";
import { PiterBowmen } from "./components/piterbowmen";

export const Home = () => {
  return (
    <>
      <div className="flex flex-wrap w-full h-screen justify-center items-center  gap-2 lg:gap-0">
        <div className="w-full">
          <LandingPage />
        </div>
        <div className="w-full">
          <Banner />
        </div>
        <div className="w-full">
          <BestDeliciousFood />
        </div>
        <div className="w-full">
          <DeliciousItem />
        </div>
        <div className="w-full">
          <BlackBanner />
        </div>
        <div className="w-full">
          <DeliveryChallenge />
        </div>
        <div className="w-full">
          <TodaySpecialDelicious />
        </div>
        <div className="w-full">
          <TrendingFoodMenu />
        </div>
        <div className="w-full">
          <BurgerPizzaBanner />
        </div>
        <div className="w-full">
          <QualityMeet />
        </div>
        <div className="w-full">
          <HowWeServeYou />
        </div>
        <div className="w-full">
          <PiterBowmen />
        </div>
      </div>
    </>
  );
};
