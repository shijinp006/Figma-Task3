import { useRef, useEffect, RefObject } from "react";
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
import { UpdateNews } from "./components/updatenews&blog";
import { BottomBanner } from "./components/bottombanner";
import { Footer } from "./components/footer";

// Step 1: define valid keys
type SectionKey =
  | "Home"
  | "Banner"
  | "Best"
  | "Delicious"
  | "Black"
  | "Delivery"
  | "Shop"
  | "Trending"
  | "BurgerPizza"
  | "AboutUs"
  | "Serve"
  | "Blog"
  | "Pages"
  | "Bottom"
  | "Contact";

// Step 2: type the prop
type HomeProps = {
  action?: SectionKey;
};

export const Home = ({ action }: HomeProps) => {
  // Step 3: type refs properly
  const refs: Record<SectionKey, RefObject<HTMLDivElement>> = {
    Home: useRef<HTMLDivElement>(null),
    Banner: useRef<HTMLDivElement>(null),
    Best: useRef<HTMLDivElement>(null),
    Delicious: useRef<HTMLDivElement>(null),
    Black: useRef<HTMLDivElement>(null),
    Delivery: useRef<HTMLDivElement>(null),
    Shop: useRef<HTMLDivElement>(null),
    Trending: useRef<HTMLDivElement>(null),
    BurgerPizza: useRef<HTMLDivElement>(null),
    AboutUs: useRef<HTMLDivElement>(null),
    Serve: useRef<HTMLDivElement>(null),
    Blog: useRef<HTMLDivElement>(null),
    Pages: useRef<HTMLDivElement>(null),
    Bottom: useRef<HTMLDivElement>(null),
    Contact: useRef<HTMLDivElement>(null),
  };

  // Step 4: scroll effect
  useEffect(() => {
    if (action && refs[action]?.current) {
      refs[action].current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [action]);

  return (
    <div className="flex flex-wrap w-full h-full justify-center items-center gap-2 lg:gap-0">
      <div className="w-full" ref={refs.Home}><LandingPage /></div>
      <div className="w-full" ref={refs.Banner}><Banner /></div>
      <div className="w-full" ref={refs.Best}><BestDeliciousFood /></div>
      <div className="w-full" ref={refs.Delicious}><DeliciousItem /></div>
      <div className="w-full" ref={refs.Black}><BlackBanner /></div>
      <div className="w-full" ref={refs.Delivery}><DeliveryChallenge /></div>
      <div className="w-full" ref={refs.Shop}><TodaySpecialDelicious /></div>
      <div className="w-full" ref={refs.Trending}><TrendingFoodMenu /></div>
      <div className="w-full" ref={refs.BurgerPizza}><BurgerPizzaBanner /></div>
      <div className="w-full" ref={refs.AboutUs}><QualityMeet /></div>
      <div className="w-full" ref={refs.Serve}><HowWeServeYou /></div>
      <div className="w-full" ref={refs.Blog}><PiterBowmen /></div>
      <div className="w-full" ref={refs.Pages}><UpdateNews /></div>
      <div className="w-full" ref={refs.Bottom}><BottomBanner /></div>
      <div className="w-full" ref={refs.Contact}><Footer /></div>
    </div>
  );
};
