import { motion } from "framer-motion";
import blackbg from "../../assets/blackbg.png";
import rightarrow from "../../assets/rightarrow.svg";
import saveupto from "../../assets/saveupto.png";
import pizza from "../../assets/pizza.png";
import orangebg from "../../assets/orangebg.png";
import blacktruckicon from "../../assets/blacktruckicon.svg";
import frenchfries from "../../assets/frenchfries.png";
import redbg from "../../assets/darkredbg.png";
import fifty from "../../assets/fifty.png";
import broastedChicken from "../../assets/broastedchicken.png";
import burger from "../../assets/burger.png"

export const Banner = () => {
  return (
    <>
      <div className="flex flex-wrap w-full h-full lg:h-screen justify-center items-center mt-2 relative">
        <div className="flex flex-wrap items-center justify-center w-full  max-w-7xl px-4 md:px-6 lg:px-10 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-9">

            {/* First Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-[400px] h-[330px] rounded-[9px] bg-cover bg-center p-8 relative cursor-pointer hover:scale-95 transition-transform duration-300"
              style={{
                backgroundImage: `url(${blackbg})`,
              }}
            >
              <div className="w-full lg:w-[170px] h-[23px] flex items-center">
                <p className="font-[Oswald] font-bold text-[14px] leading-[23.4px] capitalize text-[#FFC222]">
                  crispy, every bite taste
                </p>
              </div>
              <div className=" w-full md:w-[300px] lg:w-[335px] h-[99px] flex items-center">
                <div className="w-[173px] h-[98px] flex items-center justify-center">
                  <p className="font-[Oswald] font-bold text-[34px] leading-[40px] capitalize text-white">
                    Delicious & hot pizza
                  </p>
                </div>
              </div>
              <div className=" w-full md:w-[94px] lg:w-[94px] h-[43px] flex items-center cursor-pointer hover:scale-95 transition-transform duration-300">
                <div className="w-[72px] h-[28px] flex items-center justify-center">
                  <p className="font-[Oswald] font-medium text-[15px] leading-[28px] capitalize text-white">
                    order now
                  </p>
                </div>
                <div>
                  <img src={rightarrow} alt="rightarrow icon" />
                </div>
              </div>
              <motion.img
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                src={saveupto}
                alt="save up to 50%"
                className="absolute top-[40%] right-[1%] md:top-[2%] md:right-[7%] lg:top-[2%] lg:right-[10%]"
              />
              <motion.img
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                src={pizza}
                alt="pizza"
                className="absolute bottom-[2%] right-[2%]"
              />
            </motion.div>

            {/* Second Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-[400px] h-[330px] rounded-[9px] p-8 relative cursor-pointer hover:scale-95 transition-transform duration-300"
              style={{
                backgroundImage: `url(${orangebg})`,
              }}
            >
              <div className="w-full  lg:w-[330px] h-[38px] flex">
                <div className="w-[35px] h-[33px] flex">
                  <p className="font-[Oswald] font-medium text-[13.67px] leading-[33.8px] capitalize text-white">
                    Todays
                  </p>
                </div>
                <div className="w-[90px] h-[33px] flex ">
                  <p className="font-[Oswald] font-medium text-[26px] leading-[30.8px] capitalize text-[#FFC222]">
                    Delicious
                  </p>
                </div>
              </div>
              <div className="w-[170px] h-[50px] flex items-center">
                <p className="font-[Oswald] font-bold text-[34px] leading-[52px] capitalize text-white">
                  French Fry
                </p>
              </div>
              <div className="w-[130px] h-[22px] flex items-center">
                <p className="font-[Oswald] font-medium text-[14px] leading-[23.4px] text-[#FFFFFF] capitalize">
                  This Weekend only
                </p>
              </div>
              <button className=" w-[100px] md:w-[150px] lg:w-[150px] h-[70px] rounded-[9px] bg-[#FFC222] p-3 flex items-start cursor-pointer hover:scale-95 transition-transform duration-300">
                <div className="w-[24px] h-[24px] flex items-center">
                  <img src={blacktruckicon} alt="blacktruck icon" />
                </div>
                <div className="w-[75px] h-[17px] flex items-center justify-center">
                  <p className="font-[Oswald] font-medium text-xs lg:text-[13px] leading-[17px] tracking-[0.8px] text-center capitalize text-[#212121]">
                    order now
                  </p>
                </div>
              </button>
              <motion.img
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                src={frenchfries}
                alt="frenchfries"
                className="absolute bottom-[30%] left-[52%] md:bottom-[24%] md:left-[41%] lg:bottom-[24%] lg:left-[38%] w-[110px] md:w-[160px] lg:w-[160px] lg:h-[200px]"
              />
            </motion.div>

            {/* Third Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full lg:w-[400px] h-[330px] rounded-[9px] p-8 relative cursor-pointer hover:scale-95 transition-transform duration-300"
              style={{
                backgroundImage: `url(${redbg})`,
              }}
            >
              <div className="w-[170px] h-[23px] flex items-center">
                <p className="font-[Oswald] font-bold text-[14px] leading-[23.4px] capitalize text-[#FFC222]">
                  crispy, every bite taste
                </p>
              </div>
              <div className="w-full lg:w-[330px] h-[99px] flex items-center">
                <div className="w-[160px] h-[98px] flex items-center">
                  <p className="font-[Oswald] font-bold text-[34px] leading-[40px] capitalize text-white">
                    chiken & <br /> french fry
                  </p>
                </div>
              </div>
              <div className="w-[94px] h-[43px] flex items-center cursor-pointer hover:scale-95 transition-transform duration-300">
                <div className="w-[72px] h-[28px] flex items-center justify-center">
                  <p className="font-[Oswald] font-medium text-[15px] leading-[28px] capitalize text-white">
                    Order Now
                  </p>
                </div>
                <div>
                  <img src={rightarrow} alt="right arrow" />
                </div>
              </div>
              <motion.img
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                src={fifty}
                alt="fifty"
                className=" w-[70px] md:w-[100px] lg:w-[100px] absolute top-[15%] right-[10%] md:top-[10%] md:right-[34%] lg:top-[10%] lg:right-[38%]"
              />
              <motion.img
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                src={broastedChicken}
                alt="broasted Chicken"
                className=" w-[200px] md:w-[255px] lg:w-[255px] lg:h-[263px] absolute bottom-0 right-0"
              />
            </motion.div>
          </div>
        </div>
        <img src={burger} alt="burger" className="hiddden lg:block  absolute bottom-0 right-2" />
      </div>
    </>
  );
};
