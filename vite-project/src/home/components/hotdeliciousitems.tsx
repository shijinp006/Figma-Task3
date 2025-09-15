import { motion } from "framer-motion";
import pizza from "../../assets/pizza2.png";
import frenchFries from "../../assets/frenchfries2.png";
import chicken from "../../assets/FriedChicken.png";
import burger from "../../assets/burger (2).png";
import bg from "../../assets/shadowbg (2).png";

export const DeliciousItem = () => {
  const Items = [
    {
      title: "Chicago Deep Pizza",
      description:
        "Its the perfect dining experience where Experience quick and efficient",
      image: pizza,
    },
    {
      title: "Fast Food Combo",
      description:
        "Its the perfect dining experience where Experience quick and efficient",
      image: frenchFries,
    },
    {
      title: "Grilled Chicken",
      description:
        "Its the perfect dining experience where Experience quick and efficient",
      image: chicken,
    },
    {
      title: "Whopper Burger King",
      description:
        "Its the perfect dining experience where Experience quick and efficient",
      image: burger,
    },
  ];

  return (
    <motion.div
      className="flex flex-wrap items-center justify-center w-full h-full lg:h-screen"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-wrap items-center justify-center w-full h-full max-w-7xl px-4 md:px-6 lg:px-10 mx-auto">
        <motion.div
          className="flex flex-col items-center justify-center bg-[#F3F3F3] w-full py-10 lg:h-[500px] lg:w-[1050px] "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          style={{
            backgroundImage:
              `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Small title */}
          <motion.div
            className="w-auto"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="font-[Oswald] font-bold text-[12px] leading-[28px] text-center capitalize text-[#00A149]">
              about our food
            </p>
          </motion.div>

          {/* Main title */}
          <motion.div
            className="w-full max-w-[454px]"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p className="font-[Oswald] font-bold text-[24px] sm:text-[30px] lg:text-[45px] lg:leading-[67.2px] text-center capitalize text-[#212121]">
              hot delicious item
            </p>
          </motion.div>

          {/* Categories */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-3 mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {["chicken fry", "pizza", "burger", "deserts"].map((cat, i) => (
              <motion.div
                key={i}
                className={`px-4 h-[40px] rounded-[40px] flex items-center justify-center cursor-pointer hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out ${
                  i === 0 ? "bg-[#FFC222]" : "bg-[#D9D9D9]"
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="font-[Oswald] font-medium text-[14px] capitalize text-[#212121]">
                  {cat}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Items grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row w-full gap-6 mt-6 items-center justify-center border-0"
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.2 }}
            viewport={{ once: true }}
          >
            {Items.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center p-4 cursor-pointer  hover:scale-105 transition duration-300 ease-in-out"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-[100px] h-[110px] sm:w-[120px] sm:h-[130px] flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-contain h-full"
                  />
                </div>

                <div className="w-full max-w-[200px] mt-2">
                  <p className="font-[Oswald] font-bold text-[16px] text-center capitalize text-[#212121]">
                    {item.title}
                  </p>
                </div>

                <p className="text-sm text-center text-gray-600 mt-2 px-2 font-[Oswald]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};
