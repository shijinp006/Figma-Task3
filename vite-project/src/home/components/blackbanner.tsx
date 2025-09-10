import { motion } from "framer-motion";
import blackBanner from "../../assets/blackbanner.jpg";
import yellowArrow from "../../assets/rightyellowarrow.svg";

export const BlackBanner = () => {
  return (
    <>
      <motion.div
        className="w-full h-full lg:h-[390px] flex flex-wrap justify-center relative"
        style={{
          backgroundImage: `url(${blackBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="flex flex-wrap justify-center max-w-7xl px-4 md:px-6 lg:px-10 bg lg:absolute bottom-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <motion.div
            className="w-[100px] h-[100px] rounded-full border-2 border-white border-dashed opacity-100 flex items-center justify-center"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 1, ease: "linear" }}
          >
            <motion.img
              src={yellowArrow}
              alt="yellow Arrow"
              initial={{ x: -10 }}
              animate={{ x: 10 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1.2,
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};
