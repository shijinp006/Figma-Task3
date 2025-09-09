export const HowWeServeYou = () => {
  return (
    <>
      <div className=" flex flex-wrap items-center justify-center w-full h-full lg:h-screen flex-col bg-[#F4F1EA]">
        <div className="flex flex-wrap items-center justify-center w-full max-w-7xl px-4 md:px-6 lg:px-10 mx-auto ">
          <div className="flex flex-col items-center justify-center ">
            {/*Head*/}
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center w-[130px] h-[28px]">
                <p className="font-[Oswald] font-bold text-[12px] leading-[18px] capitalize text-center text-[#00A149] align-middle">
                  FOOD PROCESSING
                </p>
              </div>
              <div className=" w-full lg:w-[500px] h-[56px] flex items-center justify-center">
                <h2 className="font-[Oswald] font-bold text-[32px] sm:text-[44px] md:text-[52px] lg:text-[40px] leading-[30px] sm:leading-[52px] md:leading-[30px] lg:leading-[30px] capitalize text-center text-[#212121] align-middle">
                  HOW WE SERVE YOU?
                </h2>
              </div>
            </div>
            {/*Middle*/}
            <div className="flex items-center justify-center flex-col lg:flex-row relative">
              <div className="hidden lg:block  w-[200px] border-dashed border-[1px] border-[#5C5C5B] absolute left-25 top-18 "></div>
              <div className="hidden lg:block  w-[193px] border-dashed border-[1px] border-[#5C5C5B] absolute right-27 top-18 "></div>
              <div className="flex items-center justify-center flex-col w-full lg:w-[300px] h-[200px]">
                <div className="flex items-center justify-center w-[210px] h-[36px] ">
                  <h2 className="font-[Oswald] font-bold text-[14px] leading-[20px] text-center capitalize text-[#212121]">
                    Cooking with Care
                  </h2>
                </div>
                <div className="flex items-center justify-center w-full lg:w-[230px] h-[56px]">
                  <p className="font-[Oswald] font-normal text-[12px] leading-[18px] text-center text-[#5C5C5B]">
                    Its the perfect dining experience where Experience quick and
                    efficient
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-full lg:w-[300px] h-[200px] rounded-[16px]  border-dashed border-[1px]">
                <div className="flex items-center justify-center w-[200px] h-[36px] ">
                  <h2 className="font-[Oswald] font-bold text-[14px] leading-[20px] text-center capitalize text-[#212121]">
                    QUICKLY DELIVERY
                  </h2>
                </div>
                <div className="flex items-center justify-center w-full lg:w-[230px] h-[56px]">
                  <p className="font-[Oswald] font-normal text-[12px] leading-[18px] text-center text-[#5C5C5B]">
                    Its the perfect dining experience where Experience quick and
                    efficient
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-full lg:w-[300px] h-[200px]">
                <div className="flex items-center justify-center w-[200px] h-[36px] ">
                  <h2 className="font-[Oswald] font-bold text-[14px] leading-[20px] text-center capitalize text-[#212121]">
                    CHOOSE FOOD
                  </h2>
                </div>
                <div className="flex items-center justify-center w-full lg:w-[230px] h-[56px]">
                  <p className="font-[Oswald] font-normal text-[12px] leading-[18px] text-center text-[#5C5C5B]">
                    Its the perfect dining experience where Experience quick and
                    efficient
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
