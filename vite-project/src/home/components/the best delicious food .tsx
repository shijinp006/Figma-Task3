import { motion } from "framer-motion";
import pizzabg from "../../assets/pizzabg.jpg";
import shadowbg from "../../assets/shadowbg.png";
import profile from "../../assets/profile.jpg";
import sign from "../../assets/sign.jpg";

export const BestDeliciousFood = () => {
  return (
    <>
      <motion.div
        className="flex w-full h-full flex-col lg:h-screen mt-2 lg:flex-row"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* left section */}
        <motion.div
          className="w-full lg:w-[600px] h-[500px] relative "
          style={{
            backgroundImage: `url(${pizzabg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="w-[200px] lg:w-[300px] h-[160px] bg-[#FFC222] absolute bottom-0 right-0 flex items-center justify-center"
            style={{ backgroundImage: `url(${shadowbg})` }}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="font-[Oswald] font-bold text-xs lg:text-[24px] lg:leading-[36.4px] capitalize text-[#000000]">
              we cook hot <br /> sandwiches for you
            </p>
          </motion.div>
        </motion.div>

        {/* right section */}
        <motion.div
          className="flex flex-col p-2 lg:ml-10 lg:p-0"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* About title */}
          <div className="w-[110px] h-[28px]">
            <p className="font-[Oswald] font-bold text-[14px] leading-[28px] text-[#00A149] capitalize align-middle">
              About Our Food
            </p>
          </div>

          {/* Heading */}
          <div className="w-full h-[80px] md:h-[134px] lg:w-[690px] lg:h-[134px]">
            <div className="w-full h-[80px] md:h-[130px] lg:w-[580px] lg:h-[130px]">
              <p className="font-[Oswlad] font-bold text-[25px] leading-[30px] md:text-[50px] md:leading-[60px] lg:text-[50px] lg:leading-[60.2px] text-[#212121] capitalize align-middle">
                The best delicious food
                <br />
                made from us...
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="w-full h-[110px] md:h-[84px] lg:w-[630px] lg:h-[84px]">
            <p className="font-[Oswald] font-normal text-xs md:text-[17px] lg:text-[17px] lg:leading-[28px] text-[#5C5C5B] align-middle">
              Its the perfect dining experience where every dish is crafted with
              fresh, high-quality ingredients. Experience quick and efficient
              service that ensures your food is served fresh. It's the perfect
              place where every dining experience is crafted with care and
              high-quality ingredients.
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-col lg:flex-row w-full lg:w-[690px] lg:h-[125px] border-t border-[#D9D9D9] items-center">
            <motion.div
              className="w-full lg:w-[224px] h-[124px] border-b border-[#D9D9D9] flex flex-col items-center justify-center relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-row items-center">
                <div className="w-[53px] h-[117px] absolute top-[1%] left-[22%] md:left-[37%] lg:left-[7%]">
                  <p className="font-oswald font-bold text-[90px] leading-[117px] text-[#212121] opacity-9 capitalize align-middle">
                    0
                  </p>
                </div>
              </div>
              <div className="w-[113px] h-[23px] flex">
                <p className="font-[Oswald] font-medium text-[14px] leading-[23.4px] text-[#212121] capitalize align-middle">
                  Satisfied Clients
                </p>
              </div>
              <div className="w-[101px] h-[56px]">
                <p className="font-[Oswald] font-bold text-[50px] leading-[56px] text-[#FFC222] capitalize align-middle">
                  250+
                </p>
              </div>
            </motion.div>

            {/* Repeat for other stats */}
            <motion.div
              className="w-[224px] h-[124px] border-b border-[#D9D9D9] flex flex-col items-center justify-center relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
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
            </motion.div>

            <motion.div
              className="w-[224px] h-[124px] border-b border-[#D9D9D9] flex flex-col items-center justify-center relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
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
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            className="flex flex-col lg:flex-row justify-between items-center gap-3 lg:gap-0 lg:mt-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <img src={profile} alt="profile" />
            <img src={sign} alt="sign" />
            <div className="w-full lg:w-[400px] h-[30px] rounded-[19px] bg-[#212121] flex items-center justify-center lg:mr-5">
              <div className="w-[212px] h-[16px] flex items-center justify-center">
                <p className="font-[Oswald] font-semibold text-[12px] leading-[16px] text-center capitalize align-middle text-[#FFFFFF]">
                  Foundation, since <span className="text-[#FFC222]">21st</span> Oct, 2019
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};
