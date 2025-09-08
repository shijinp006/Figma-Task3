import todaySpecialBg from "../../assets/todayspecialbg.png";
import pizza from "../../assets/pizza3.png";
import redbg from "../../assets/redbg.png";
import saveUpTo from "../../assets/saveupto.png";
import truckIcon from "../../assets/blacktruck.svg";
import blackBg from "../../assets/blackbg.png";
import fifty from "../../assets/fiftyoff.png";
import orangeBg from "../../assets/orangebg.png";
import frenchFries from "../../assets/frenchfries.png";
import blackBg2 from "../../assets/blackbg2.png";
import deliciousChicken from "../../assets/deleciouschicken.png";
import chicken from "../../assets/chickenfrench.png";
import leaf from "../../assets/leaf.png";

export const TodaySpecialDelicious = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full lg:h-screen relative bg-green-400 border ">
      {/* Left Side */}
  

      <div
        className="w-full h-full bg-cover bg-center flex flex-col items-center justify-center relative"
        style={{ backgroundImage: `url(${todaySpecialBg})` }}
      >
        <img src={leaf} alt="leaf" className="w-[60px] border absolute left-0" />

        <div className="flex flex-col items-center justify-center">
          <p className="font-[Oswald] font-bold text-[30px] leading-[46.8px] text-center capitalize text-white">
            today
          </p>
          <p className="font-[Oswald] font-bold text-[36px] sm:text-[48px] lg:text-[50px] leading-[60.2px] text-center capitalize text-white">
            special delicious
          </p>
          <p className="font-[Oswald] font-semibold text-[28px] sm:text-[34px] lg:text-[35px] text-center capitalize text-white">
            beef<span className="text-[#FFC222]">chiness pizza</span>
          </p>
        </div>
        <div className="flex items-center justify-center w-full max-w-[700px] h-[430px] relative">
          <img src={pizza} alt="pizza" />
          <img
            src={saveUpTo}
            alt="save Up To"
            className="absolute top-0 right-[1%]"
          />
        </div>
            
      </div>

      {/* Right Side (Grid with two boxes) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        {/* Red Background Column */}
        {/* Card 1 */}
        <div
          className="flex p-6 w-full h-[350px] lg:h-full bg-cover bg-center  flex-col"
          style={{ backgroundImage: `url(${redbg})` }}
        >
          <div className="flex items-center justify-center w-[90px] h-[33px]">
            <p className="font-[Oswald] font-medium text-[26px] leading-[33.8px] capitalize text-[#FFC222]">
              Delicious
            </p>
          </div>
          <div className="w-[230px] h-[50px] flex items-center ">
            <p className="font-[Oswald] font-bold text-[30px] leading-[52px] capitalize text-white">
              Burger Combo
            </p>
          </div>
          <div className="w-[130px] h-[37px] flex items-center">
            <p className="font-[Oswald] font-semibold text-[12px] leading-[23.4px] capitalize text-white">
              This Weekend only
            </p>
          </div>
          <div className="flex flex-row items-center w-full lg:w-[460px] h-[60px] ">
            <div className="flex items-center w-[95px] h-[40px] ">
              <p className="font-[Oswald] font-semibold text-[14px] leading-[49.28px] capitalize text-white">
                Limited Offer /
              </p>
            </div>
            <div className="flex w-[54px] h-[49px] ">
              <p className="font-[Oswald] font-bold text-[30px] leading-[49.28px] capitalize text-white">
                $5
              </p>
            </div>
          </div>
          <button className="flex p-4  justify-center w-[150px] h-[70px] rounded-[9px] bg-[#FFC222] gap-1 cursor-pointer hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out">
            <img
              src={truckIcon}
              alt="truck Icon "
              className=" h-[20px] flex items-center"
            />
            <p className=" flex font-[Oswald] font-bold text-[12px] leading-[17px] tracking-[0.8px] capitalize text-[#212121]  h-[20px] items-center">
              order now
            </p>
          </button>
        </div>
        {/* Gray Column */}
        {/* Card 2 */}
        <div
          className="flex p-6 w-full h-[350px] lg:h-full   bg-cover bg-center  flex-col"
          style={{ backgroundImage: `url(${blackBg})` }}
        >
          <div className="flex items-center w-[168px] h-[23px]">
            <p className="font-[Oswald] font-semibold text-[14px] leading-[23.4px] capitalize text-[#FFC222]">
              Crispy, Every Bite Taste
            </p>
          </div>
          <div className=" flex items-center w-full  h-[130px] ">
            <p className="font-[Oswald] font-bold text-[40px] leading-[60.9px] capitalize text-white">
              SUPER DELICIOUS
            </p>
          </div>
          <div className="flex w-[150px] h-[150px]">
            <img src={fifty} alt="fifty" />
          </div>
        </div>{" "}
        {/* Card 3 */}
        <div
          className="flex p-6 w-full h-[350px] lg:h-full bg-gray-200  bg-cover bg-center flex-row relative "
          style={{ backgroundImage: `url(${orangeBg})` }}
        >
          {/*left*/}
          <div className="flex flex-col">
            <div className="flex w-[160px] h-[23px]">
              <p className="font-[Oswald] font-semibold text-[14px] leading-[23.4px] capitalize text-white">
                Crispy, Every Bite Taste
              </p>
            </div>
            <div className=" flex w-full lg:w-[460px] h-[130px] ">
              <div className="flex w-full lg:w-[230px] h-[130px]">
                <p className="font-[Oswald] font-bold text-[40px] leading-[55px] capitalize text-white">
                  FASH FOOD MEAL
                </p>
              </div>
            </div>
            <div className="w-full lg:w-[460px] h-[50px]">
              <div className="w-full lg:w-[190px] h-[46px]">
                <p className="font-[Oswald] font-bold text-[12px] leading-[18.2px] text-white">
                  The mouth-watering aroma of
                  <br />
                  sizzling burgers
                </p>
              </div>
            </div>
            <button className="flex w-[150px] h-[80px] bg-[#FFC222] rounded-[9px] justify-center  gap-2 p-4 cursor-pointer hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out">
              <img
                src={truckIcon}
                alt="truck Icon"
                className="w-[20px] h-[20px]"
              />
              <p className="font-[Oswald] font-bold text-[12px] leading-[17px] tracking-[0.8px] capitalize text-[#212121]">
                order now
              </p>
            </button>
          </div>
          <img
            src={frenchFries}
            alt="French Fries"
            className="w-[160px]  absolute right-0 bottom-0"
          />
        </div>
        <div
          className="w-full h-[350px] lg:h-full flex bg-cover bg-center flex-col p-6 relative"
          style={{ backgroundImage: `url(${blackBg2})` }}
        >
          <div className=" flex items-center justify-center  w-[190px] h-[125px]">
            <img src={deliciousChicken} alt="delicious Chicken" />
          </div>
          <div className="w-[200px] h-[160px] flex items-center justify-center absolute right-3 bottom-0">
            <img src={chicken} alt="chicken" />
          </div>
        </div>
      </div>
    </div>
  );
};
