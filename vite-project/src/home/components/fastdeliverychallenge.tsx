import { motion } from "framer-motion";
import scooter from "../../assets/scooter.png";
import truckicon from "../../assets/greentruck.svg";
import tomatto from "../../assets/tomatto.png";
import redchilly from "../../assets/redchilly.png";

export const DeliveryChallenge = () => {
  return (
    <>
      <motion.div
        className="flex flex-wrap w-full lg:h-[406px] h-[600px] md:h-screen items-center justify-center bg-[#EF294C] relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="flex flex-wrap flex-row w-full max-w-7xl items-center justify-center px-4 md:px6 lg:px10 mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {/* left text */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="lg:w-[160px] h-[28px] flex items-center">
              <p className="font-[Oswald] font-bold text-[14px] lg:leading-[28px] capitalize text-[#FFC222]">
                Crispy, Every Bite Taste
              </p>
            </div>
            <div className="w-450px h-[130px]">
              <p className="font-[Oswald] font-bold text-[36px] sm:text-[48px] lg:text-[50px] lg:leading-[60.2px] capitalize text-[#FFFFFF]">
                30 Minutes Fast <br />{" "}
                <span className="text-[#FFC222]">Delivery</span> Challenge
              </p>
            </div>
          </motion.div>

          {/* center scooter */}
          <motion.div
            className="w-[300px] h-[340px] flex items-center justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.img
              src={scooter}
              alt="scooter"
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* button */}
          <motion.button
            className="w-[170px] h-[65px] bg-[#FFFFFF] rounded-[9px] flex items-center justify-center gap-2 hover:text-[#212121] hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={truckicon} alt="truck icon" />
            <p className="font-[Oswald] font-semibold text-[14px] leading-[17px] tracking-[0.8px] text-center capitalize text-[#212121]">
              order now
            </p>
          </motion.button>
        </motion.div>

        {/* bottom tomato */}
        <motion.img
          src={tomatto}
          alt="tomatto"
          className="hidden lg:block absolute bottom-0 left-0"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        />

        {/* right chilly */}
        <motion.img
          src={redchilly}
          alt="red chilly"
          className="hidden lg:block absolute right-0"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        />
      </motion.div>
    </>
  );
};
