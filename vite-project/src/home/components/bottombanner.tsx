import { motion } from "framer-motion";
import normalburger from "../../assets/normalburger2.jpg";
import burger from "../../assets/burger5.jpg";
import pasta from "../../assets/pasta.jpg";
import burger7 from "../../assets/burger7.jpg";
import image from "../../assets/image.jpg";

export const BottomBanner = () => {
  return (
    <div className="flex items-center justify-center w-full h-full lg:mt-0 mt-3 ">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 w-full h-full ">
        <motion.div
          className="flex items-center justify-center w-full h-full "
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src={pasta} alt="pasta" className="h-[297px] w-full" />
        </motion.div>

        <motion.div
          className="flex items-center justify-center w-full h-full "
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img src={burger7} alt="burger" className="h-[297px] w-full" />
        </motion.div>

        <motion.div
          className="flex items-center justify-center w-full full "
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <img src={image} alt="image" className="h-[297px] w-full" />
        </motion.div>

        <motion.div
          className="flex items-center justify-center w-full h-full "
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <img src={burger} alt="Burger" className="h-[297px] w-full" />
        </motion.div>

        <motion.div
          className="flex items-center justify-center w-full h-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <img src={normalburger} alt="normal Burger" className="h-[297px] w-full" />
        </motion.div>
      </div>
    </div>
  );
};
