import { motion } from "framer-motion";

export const TrendingFoodMenu = () => {
  const menuItems = [
    {
      title: "Chicago Deep Pizza",
      description:
        "Its the perfect dining experience where Experience quick and efficient",
      price: "$22.00",
    },
    {
      title: "Chicago Burger King.",
      description:
        "Its the perfect dining experience where Experience quick and efficient",
      price: "$26.00",
    },
    {
      title: "Chicago French Fries.",
      description:
        "Its the perfect dining experience where Experience quick and efficient",
      price: "$28.00",
    },
    {
      title: "Chicago Beef Jerky.",
      description:
        "Its the perfect dining experience where Experience quick and efficient",
      price: "$39.00",
    },
    {
      title: "Chinese Pasta",
      description:
        "Its the perfect dining experience where Experience quick and efficient",
      price: "$34.00",
    },
    {
      title: "Chicago Chicken Wings.",
      description:
        "Its the perfect dining experience where Experience quick and efficient",
      price: "$39.00",
    },
    {
      title: "Chicago Deep Pasta.",
      description:
        "Its the perfect dining experience where Experience quick and efficient",
      price: "$34.00",
    },
    {
      title: "Chicago Salad Recipes.",
      description:
        "Its the perfect dining experience where Experience quick and efficient",
      price: "$26.00",
    },
  ];

  return (
    <>
      <div className="flex flex-wrap items-center justify-center flex-col w-full h-full lg:h-screen lg:mt-20">
        <div className="flex flex-wrap items-center justify-center max-w-7xl px-4 md:px-6 lg:px-10 mx-auto flex-col w-full lg:mt-8 ">
          <div className="flex items-center justify-center flex-col ">
            {/*Head*/}
            <motion.div
              className="flex flex-col items-center justify-center "
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-[100px] h-[26px]">
                <p className="font-[Oswald] font-bold text-[12px] leading-[28px] text-center capitalize text-[#00A149]">
                  About Our Food
                </p>
              </div>
              <div className="flex items-center justify-center w-full lg:w-[400px] h-[67px]">
                <p className="font-[Oswald] font-bold text-[20px] lg:text-[43px] lg:leading-[60px] text-center capitalize text-[#212121]">
                  Trending Food Menu
                </p>
              </div>
            </motion.div>

            {/*Center*/}
            <motion.div
              className="flex flex-col lg:flex-row lg:flex-wrap lg:pb-4 border-[1px] border-dashed  border-[#5C5C5B] rounded-[13px] h-full lg:h-[460px] items-center justify-center w-full lg:w-[1020px] p-1 lg:p-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {menuItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="w-full lg:w-[500px] h-[120px] flex flex-col justify-center lg:px-1"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Title */}
                  <div className="w-full max-w-[160px] h-[26px]">
                    <p className="font-[Oswald] font-semibold text-[12px] lg:text-[14px] leading-[20px] lg:leading-[26px] capitalize text-[#212121]">
                      {item.title}
                    </p>
                  </div>

                  {/* Description + Price */}
                  <div className="flex flex-row items-center w-full relative ">
                    <p className="font-[Oswald] font-normal text-[10px] lg:text-[12px] leading-[20px] lg:leading-[28px] text-[#5C5C5B] w-full lg:w-[400px] truncate ">
                      {item.description}
                    </p>

                    <p className="font-[Oswald] font-medium text-[12px] lg:text-[14px] leading-[18px] lg:leading-[20px] capitalize text-[#FFC222] ml-2 lg:absolute lg:top-[-2%] lg:right-30">
                      {item.price}
                    </p>
                  </div>

                  <div className="border-b border-dashed border-[#5C5C5B] my-4 w-full "></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};
