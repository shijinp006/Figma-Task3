import pizzabg from "../../assets/pizzabg.jpg";
import shadowbg from "../../assets/shadowbg.png";
import profile from "../../assets/profile.jpg";
import sign from "../../assets/sign.jpg";
export const BestDeliciousFood = () => {
  return (
    <>
      <div className=" flex w-full h-full flex-col lg:h-screen mt-2 lg:flex-row  ">
        <div
          className=" w-full lg:w-[600px] h-[500px]  relative"
          style={{
            backgroundImage: `url(${pizzabg})`,
          }}
        >
          <div
            className=" w-[200px] lg:w-[300px] h-[160px] bg-[#FFC222] absolute bottom-0 right-0 flex items-center justify-center"
            style={{
              backgroundImage: `url(${shadowbg})`,
            }}
          >
            <p className="font-[Oswald] font-bold text-xs lg:text-[24px] lg:leading-[36.4px] capitalize text-[#000000]">
              we cook hot <br /> sandwiches for you
            </p>
          </div>
        </div>
        {/*right*/}

        <div className="flex flex-col p-9 ml-10 lg:p-0 ">
          <div className="w-[110px] h-[28px]">
            <p className="font-[Oswald] font-bold text-[14px] leading-[28px] text-[#00A149] capitalize align-middle">
              About Our Food
            </p>
          </div>
          <div className=" w-full lg:w-[690px] h-[134px]">
            <div className="w-full  lg:w-[580px] h-[130px]">
              <p className="font-[Oswlad] font-bold text-[30px] lg:text-[50px] lg:leading-[60.2px] text-[#212121] capitalize align-middle">
                The best delicious food
                <br />
                made from us...
              </p>
            </div>
          </div>
          <div className="w-full lg:w-[630px] h-[84px] ">
            <p className="font-[Oswald] font-normal text-xs lg:text-[17px] lg:leading-[28px] text-[#5C5C5B] align-middle">
              Its the perfect dining experience where every dish is crafted with
              fresh, high-quality ingredients. Experience quick and efficient
              service that ensures your food is served fresh. It's the perfect
              place where every dining experience is crafted with care and
              high-quality ingredients.
            </p>
          </div>
          <div className=" flex flex-col lg:flex-row w-full lg:w-[690px] lg:h-[125px] border-t border-[#D9D9D9] items-center">
            <div className=" w-full lg:w-[224px] h-[124px] border-b border-[#D9D9D9] flex flex-col items-center justify-center relative">
              <div className="flex flex-row items-center">
                <div className="w-[53px] h-[117px] absolute top-[1%] left-[15%] lg:left-[6%]">
                  <p className="font-oswald font-bold  text-[90px] leading-[117px] text-[#212121] opacity-9 capitalize align-middle">
                    0
                  </p>
                </div>
              </div>
              <div className=" w-[113px] h-[23px] flex ">
                <p className="font-[Oswald] font-medium text-[14px] leading-[23.4px] text-[#212121] capitalize align-middle">
                  Satisfied Clients
                </p>
              </div>
              <div className="w-[101px] h-[56px] ">
                <p className="font-[Oswald] font-bold text-[50px] leading-[56px] text-[#FFC222] capitalize align-middle">
                  250+
                </p>
              </div>
            </div>
            <div className="w-[224px] h-[124px] border-b border-[#D9D9D9]">
              <div className="w-[224px] h-[124px] border-b border-[#D9D9D9] flex flex-col items-center justify-center relative">
                <div className="flex flex-row items-center">
                  <div className="w-[39px] h-[117px] absolute top-[1%] left-[18%]">
                    <p className="font-oswald font-bold text-[90px] leading-[117px] text-[#212121] opacity-9 capitalize align-middle">
                      F
                    </p>
                  </div>
                </div>
                <div className="w-[149px] h-[23px] flex">
                  <p className="font-[Oswald] font-medium text-[14px] leading-[23.4px] text-[#212121] capitalize align-middle">
                    Total food catagories
                  </p>
                </div>
                <div className="w-[101px] h-[56px]">
                  <p className="font-[Oswald] font-bold text-[50px] leading-[56px] text-[#FFC222] capitalize align-middle">
                    153+
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[224px] h-[124px] border-b border-[#D9D9D9]">
              <div className="w-[224px] h-[124px] border-b border-[#D9D9D9] flex flex-col items-center justify-center relative">
                <div className="flex flex-row items-center">
                  <div className="w-[49px] h-[117px] absolute top-[1%] left-[18%]">
                    <p className="font-oswald font-bold text-[90px] leading-[117px] text-[#212121] opacity-9 capitalize align-middle">
                      A
                    </p>
                  </div>
                </div>
                <div className="w-[83px] h-[23px] flex">
                  <p className="font-[Oswald] font-medium text-[14px] leading-[23.4px] text-[#212121] capitalize align-middle">
                    awward win
                  </p>
                </div>
                <div className="w-[73px] h-[56px]">
                  <p className="font-[Oswald] font-bold text-[30px] lg:text-[50px] leading-[56px] text-[#FFC222] capitalize align-middle">
                    25+
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-3 lg:gap-0 lg:mt-5 ">
            <img src={profile} alt="profile" />
            <img src={sign} alt="sign" />
            <div className="w-full lg:w-[450px] h-[36px] rounded-[19px] bg-[#212121] flex items-center justify-center">
              <div className="w-[212px] h-[16px] flex items-center justify-center">
                <p className="font-[Oswald] font-semibold text-[16px] leading-[16px] text-center capitalize align-middle text-[#FFFFFF]">
                  Foundation, since 21st Oct, 2019
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
