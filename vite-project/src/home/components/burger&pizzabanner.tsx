import { motion } from "framer-motion";
import burger4 from "../../assets/burger4.jpg";
import burger5 from "../../assets/burger5.jpg";
import pizza from "../../assets/pizza4.png";
import rightarrow from "../../assets/rightbigarrow.svg";
import lefttarrow from "../../assets/leftbigarrow.svg";

export const BurgerPizzaBanner = () => {
  const Images = [
    { image: burger4 },
    { image: pizza },
    { image: burger5 },
    
  ];

  return (
    <>
      <div className="w-full h-full lg:h-screen flex flex-wrap items-center justify-center relative">
        <div className="flex flex-wrap items-center justify-center w-full max-w-7xl px-4 md:px-6 lg:px-10 mx-auto">
          <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center gap-2 lg:gap-3">
            {Images.map((item, index) => (
              <motion.div
                key={index}
                className="w-full pb-2 md:h-[300px] md:pb-4 lg:w-[320px] lg:h-[430px] lg:pb-0 flex items-center justify-center overflow-hidden cursor-pointer hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <img
                  src={item.image}
                  alt={`Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>

          <motion.img
            src={lefttarrow}
            alt="left arrow"
            className="hidden lg:block absolute left-1 cursor-pointer hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          />

          <motion.img
            src={rightarrow}
            alt="right arrow"
            className="hidden lg:block absolute right-1 cursor-pointer hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          />
        </div>
      </div>
    </>
  );
};
