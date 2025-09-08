import scooter from "../../assets/scooter.png";
import truckicon from "../../assets/greentruck.svg";
import tomatto from "../../assets/tomatto.png";
import redchilly from "../../assets/redchilly.png";

export const DeliveryChallenge = () => {
  return (
    <>
      <div className="flex flex-wrap w-full lg:h-[406px] h-[600px] md:h-screen items-center justify-center bg-[#EF294C] relative">
        <div className="flex flex-wrap flex-row  w-full max-w-7xl items-center justify-center  px-4 md:px6 lg:px10 mx-auto ">
          {/*left8*/}
          <div className="flex flex-col justify-center">
            <div className=" lg:w-[160px] h-[28px] flex items-center">
              <p className="font-[Oswald] font-bold text-[14px]  lg:leading-[28px] capitalize text-[#FFC222]">
                Crispy, Every Bite Taste
              </p>
            </div>
            <div className="w-450px h-[130px]">
              <p className="font-[Oswald] font-bold text-[36px] sm:text-[48px] lg:text-[50px] lg:leading-[60.2px] capitalize text-[#FFFFFF]">
                30 Minutes Fast <br />{" "}
                <span className="text-[#FFC222]">Delivery</span> Challenge
              </p>
            </div>
          </div>
          {/*center*/}
          <div className="w-[300px] h-[340px] flex items-center justify-center">
            <img src={scooter} alt="scooter" />
          </div>
          <button
            className="w-[200px] h-[65px] bg-[#FFFFFF] rounded-[9px] flex items-center justify-center gap-2  hover:text-[#212121] hover:shadow-lg hover:scale-105
             transition duration-300 ease-in-out cursor-pointer"
          >
            <img src={truckicon} alt="truck icon" />
            <p className="font-[Oswald] font-semibold text-[14px] leading-[17px] tracking-[0.8px] text-center capitalize text-[#212121]">
              order now
            </p>
          </button>
        </div>
        <img
          src={tomatto}
          alt="tomatto"
          className="hidden lg:block   absolute bottom-0 left-0 "
        />
        <img
          src={redchilly}
          alt="red chilly"
          className=" hidden lg:block absolute right-0"
        />
      </div>
    </>
  );
};
