import { motion } from "framer-motion";
import normalburger from "../../assets/normalburger2.jpg";
import burger from "../../assets/burger5.jpg";
import frenchFries from "../../assets/frenchfries3.jpg"
import cake from "../../assets/cake.jpg"
import image from "../../assets/image2.jpg"


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
          <img src={frenchFries} alt="French Fries" className="h-[297px] w-full" />
        </motion.div>

        <motion.div
          className="flex items-center justify-center w-full h-full "
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img src={cake} alt="Cake" className="h-[297px] w-full" />
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
          <img src={normalburger} alt=" Normal Burger" className="h-[297px] w-full" />
        </motion.div>

        <motion.div
          className="flex items-center justify-center w-full h-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <img src={burger} alt="Burger" className="h-[297px] w-full" />
        </motion.div>
      </div>
    </div>
  );
};
