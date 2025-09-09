import burger from "../../assets/normalburger.jpg";
import hotburger from "../../assets/hotburger.jpg";
import burgerPastha from "../../assets/burgerpastha.jpg";
import shadowBurger from "../../assets/burgershadow2.png";
import shadowFrenchFries from "../../assets/shadowfrenchfries.png"

export const UpdateNews = () => {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center flex-col lg:flex-row w-full h-full lg:h-screen relative">

        <div className="flex flex-wrap items-center justify-center w-full max-w-7xl px-4 md:px-6 lg:px-10">
          <div className="flex items-center justify-center flex-col gap-4">
            {/*Head*/}
            <div className="flex items-center justify-center flex-col">
              <div className="flex items-center justify-center w-[90px] h-[28px] ">
                <p className="font-[Oswald] font-bold text-[12px] md:text-[14px] lg:text-[14px] leading-[20px] text-center capitalize text-[#00A149]">
                  NEWS & BLOG
                </p>
              </div>
              <div className="flex items-center justify-center w-full h-[50px]  md:h-[67px] lg:w-[480px]  lg:h-[67px] ">
                <h1 className="font-[Oswald] font-bold  text-[20px] sm:text-[50px] md:text-[40px] lg:text-[40px] leading-[40px] sm:leading-[55px] md:leading-[67.2px] text-center capitalize text-[#212121]">
                  update news & blog
                </h1>
              </div>
            </div>
            {/*Middle*/}
            <div className="flex items-center justify-center flex-col lg:flex-row gap-3 ">
              {/*Card1*/}
              <div className="w-full  md:w-[300px]  lg:w-[300px]  h-[400px] flex flex-col  items-center lg:justify-center rounded-[16px] cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
                <div className="flex items-center justify-center w-full lg:w-[300px] h-[200px] ">
                  <img src={burger} alt="burger" className="rounded-[4px]" />
                </div>
                <div className="flex items-center justify-center flex-col w-full  lg:w-[300px] h-[330px] bg-[#F4F4F4] rounded-[4px] p-4 ">
                  <div className="flex  flex-row w-full h-[40px] border-b border-[#00A149]">
                    <div className="flex items-center justify-center w-[80px] h-[28px]">
                      <p className="font-[Oswald] font-semibold text-[12px] leading-[16px] capitalize text-[#212121]">
                        15 Feb 2024
                      </p>
                    </div>
                    <div className="flex items-center justify-center w-[95px] h-[28px]">
                      <p className="font-[Oswald] font-semibold text-[12px] leading-[16px] capitalize text-[#212121]">
                        Comments (0)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center w-full h-[77px]">
                    <div className="flex items-center justify-around w-full h-[72px]">
                      <p className="font-[Oswald] font-semibold text-[24px] leading-[30px] capitalize text-[#212121]">
                        Quick Cravings: Unraveling Fast Food Delights
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center w-full h-[102px]">
                    <p className="font-[Oswald] font-normal text-[12px] leading-[20px] text-[#5C5C5B]">
                      There are many variations of passages of Lorem Ipsum
                      available, but majority have suffered Lorem haca
                      ullamcorper donec ante habi believable. If you are going
                      to use a passage...
                    </p>
                  </div>
                </div>
              </div>
              {/*Card2*/}
              <div className="w-full h-[400px]  md:w-[300px]  lg:w-[300px] lg:h-[100px] flex flex-col items-center lg:justify-center rounded-[16px] cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
                <div className="flex items-center justify-center w-full lg:w-[300px] h-[200px] ">
                  <img
                    src={hotburger}
                    alt="hot burger"
                    className="rounded-[4px] w-full lg:w-[300px] h-[160px]"
                  />
                </div>
                <div className="flex items-center justify-center flex-col w-full  lg:w-[300px] h-[330px] bg-[#F4F4F4] rounded-[4px] p-4">
                  <div className="flex  flex-row w-full h-[40px] border-b border-[#00A149]">
                    <div className="flex items-center justify-center w-[80px] h-[28px]">
                      <p className="font-[Oswald] font-semibold text-[12px] leading-[16px] capitalize text-[#212121]">
                        15 Feb 2024
                      </p>
                    </div>
                    <div className="flex items-center justify-center w-[95px] h-[28px]">
                      <p className="font-[Oswald] font-semibold text-[12px] leading-[16px] capitalize text-[#212121]">
                        Comments (0)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center w-full h-[77px]">
                    <div className="flex items-center justify-around w-full h-[72px]">
                      <p className="font-[Oswald] font-semibold text-[24px] leading-[30px] capitalize text-[#212121]">
                        Veggie Vibes: Garden Fresh Delightful Creations
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center w-full h-[102px]">
                    <p className="font-[Oswald] font-normal text-[12px] leading-[20px] text-[#5C5C5B]">
                      There are many variations of passages of Lorem Ipsum
                      available, but majority have suffered Lorem haca
                      ullamcorper donec ante habi believable. If you are going
                      to use a passage...
                    </p>
                  </div>
                </div>
              </div>
              {/*Card3*/}
              <div className="w-full  md:w-[300px]   lg:w-[300px] h-[400px] flex flex-col items-center justify-center rounded-[16px] cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
                <div className="flex items-center  lg:justify-center w-full lg:w-[300px] h-[200px] ">
                  <img
                    src={burgerPastha}
                    alt="burgerPasta"
                    className="rounded-[4px]"
                  />
                </div>
                <div className="flex items-center justify-center flex-col w-full  lg:w-[300px] h-[330px] bg-[#F4F4F4] rounded-[4px] p-4">
                  <div className="flex  flex-row w-full h-[40px] border-b border-[#00A149]">
                    <div className="flex items-center justify-center w-[80px] h-[28px]">
                      <p className="font-[Oswald] font-semibold text-[12px] leading-[16px] capitalize text-[#212121]">
                        15 Feb 2024
                      </p>
                    </div>
                    <div className="flex items-center justify-center w-[95px] h-[28px]">
                      <p className="font-[Oswald] font-semibold text-[12px] leading-[16px] capitalize text-[#212121]">
                        Comments (2)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center w-full h-[77px]">
                    <div className="flex items-center justify-around w-full h-[72px]">
                      <p className="font-[Oswald] font-semibold text-[24px] leading-[30px] capitalize text-[#212121]">
                        Bold Bite: Exotic Flavors, Global Adventure
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center w-full h-[102px]">
                    <p className="font-[Oswald] font-normal text-[12px] leading-[20px] text-[#5C5C5B]">
                      There are many variations of passages of Lorem Ipsum
                      available, but majority have suffered Lorem haca
                      ullamcorper donec ante habi believable. If you are going
                      to use a passage...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src={shadowBurger} alt="shadowBurger" className=" hidden lg:block absolute left-2 top-40" />
        <img src={shadowFrenchFries} alt="shadow French Fries"  className="hidden lg:block "/>
      </div>
    </>
  );
};
