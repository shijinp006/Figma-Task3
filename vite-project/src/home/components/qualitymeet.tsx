import superQualityFoodIcon from "../../assets/superqualitfood.svg";
import wellReputaionIcon from "../../assets/wellreputaion.svg";
import buregr from "../../assets/burgers.jpg";
export const QualityMeet = () => {
  return (
    <>
      <div className="w-full h-full lg:h-screen flex flex-wrap items-center justify-center flex-col">
        <div className="flex flex-wrap items-center justify-center w-full max-w-7xl px-4 md:px-6 lg:px-10 mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-2 text-center lg:text-left">
            {/* left */}
            <div className="flex flex-col justify-center items-center lg:items-start">
              <div className="w-fit px-2 h-[28px] flex items-center  mb-3">
                <p className="font-[Oswald] font-bold text-[12px] sm:text-[14px] leading-[20px] sm:leading-[28px] capitalize text-[#F3274C] align-middle">
                  About Our Food
                </p>
              </div>

              <div className="flex items-center w-full lg:w-[633px] mb-4 justify-center lg:justify-start">
                <div className="flex items-center w-full lg:w-[476px]">
                  <h1 className="font-[Oswald] font-bold text-[28px] sm:text-[36px] md:text-[44px] lg:text-[50px] leading-[36px] sm:leading-[48px] md:leading-[54px] lg:leading-[60px] capitalize text-[#212121] align-middle">
                    Where Quality Meet <br />
                    Excellent <span className="text-[#F3274C]">Service.</span>
                  </h1>
                </div>
              </div>

              <div className="w-full lg:w-[600px] mb-4">
                <p className="font-[Oswald] font-normal text-[14px] sm:text-[15px] md:text-[16px] leading-[20px] sm:leading-[24px] md:leading-[28px] text-[#5C5C5B] align-middle">
                  Its the perfect dining experience where every dish is crafted
                  with fresh, high-quality. Experience quick and efficient
                  service that ensures your food is served fresh. Its the dining
                  experience where every dish is crafted with fresh,
                  high-quality ingredients.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start lg:gap-3 gap-4 mb-6">
                {/* Super Quality Food */}
                <div className="flex items-start gap-3">
                  <div className="w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] flex items-center justify-center">
                    <img
                      src={superQualityFoodIcon}
                      alt="super Quality Food Icon"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="font-[Oswald] font-semibold text-[14px] sm:text-[16px] leading-[20px] capitalize text-[#212121] align-middle">
                      Super Quality Food
                    </h3>
                    <p className="font-[Oswald] font-normal text-[13px] sm:text-[14px] leading-[20px] text-[#212121] align-middle">
                      A team of dreamers and doers building <br />
                      unique interactive music and art
                    </p>
                  </div>
                </div>

                {/* Well Reputation */}
                <div className="flex items-start gap-3">
                  <div className="w-[40px] h-[40px] sm:w-[49px] sm:h-[50px] flex items-center justify-center">
                    <img src={wellReputaionIcon} alt="well Reputation" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="font-[Oswald] font-semibold text-[14px] sm:text-[16px] leading-[20px] capitalize text-[#212121] align-middle">
                      Well Reputation
                    </h3>
                    <p className="font-[Oswald] font-normal text-[13px] sm:text-[14px] leading-[20px] text-[#212121] align-middle">
                      A team of dreamers and doers building <br />
                      unique interactive music and art
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button className="w-[160px] sm:w-[180px] h-[50px] sm:h-[60px] flex items-center justify-center rounded-[9px] bg-[#F3274C] font-[Oswald] font-semibold text-[12px] sm:text-[14px] leading-[18px] tracking-[0.8px] text-center capitalize text-white align-middle cursor-pointer hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out">
                  More About Us
                </button>

                <div className="flex flex-col justify-center">
                  <h5 className="font-[Oswald] font-semibold text-[12px] sm:text-[14px] leading-[18px] text-[#FFC222] align-middle">
                    BRENDON GARREY
                  </h5>
                  <p className="font-[Oswald] font-bold text-[12px] sm:text-[14px] leading-[18px] capitalize text-[#212121] align-middle">
                    CUSTOMER’S EXPERIENCE IS OUR HIGHEST PRIORITY.
                  </p>
                </div>
              </div>
            </div>

            {/* right */}
            <div className="flex items-center justify-center w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[630px] mt-6 lg:mt-0  cursor-pointer hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out relative">
              <img
                src={buregr}
                alt="burger"
                className="object-contain max-h-full"
              />
              <div className="absolute right-3 bottom-19 md:right-35 md:bottom-30 lg:right-30 lg:bottom-45   flex items-center justify-center w-[140px] h-[50px] md:w-[160px] md:h-[70px] lg:w-[160px] lg:h-[70px] rounded-[14px] bg-[#00A149] rotate-[-25.5deg] shadow-md">
                <span className="font-[Oswald] font-bold text-[22px] leading-[28px] capitalize text-white rotate-[-5.5deg]">
                  Since /1985
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
