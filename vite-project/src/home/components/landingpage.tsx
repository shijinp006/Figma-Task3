import { motion } from "framer-motion";
import yellowunderline from "../../assets/yellowunderline.svg";
import truckicon from "../../assets/truckicon.svg";
import discounticon from "../../assets/discount.png";
import bgImage from "../../assets/vegetables-set-left-black-slate 1.png";
import { useState } from "react";
export const LandingPage = () => {
  const [subscribe, setSubscribe] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const HandleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setSubscribe(!subscribe);
      setLoading(false);

   
    }, 1000);
  };
  return (
    <>
      <div
        className="flex flex-wrap w-full h-screen relative items-center justify-center "
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex items-center  w-full max-w-7xl px-4 md:px-6 lg:px-10  lg:ml-10">
          <div className="flex flex-row items-center justify-center relative">
            <div className="flex flex-col gap-4">
              <motion.div
                className="flex flex-col justify-center  lg:gap-4"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center w-[138px] h-[20px]">
                  <p className="font-['Roboto'] font-normal text-[12px] leading-[26px] align-middle text-white">
                    Starting at $24.00
                  </p>
                </div>
                <div className="flex items-center w-full md:w-[550px] lg:w-[710px] h-[100px]">
                  <h4 className="font-['Roboto'] font-black text-[34px] leading-[50px] lg:text-[65px] lg:leading-[65px] align-middle text-white">
                    The best Food <br /> Collection 2024
                  </h4>
                </div>
                <p className="font-[Oregano] font-normal text-[14px] leading-[26px] text-white">
                  Exclusive offer
                  <span className="relative inline-block text-[#FFD43A]">
                    -35%
                    <motion.img
                      src={yellowunderline}
                      alt="yellow underline"
                      className="absolute left-0 bottom-[-5px] w-[40px]"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    />
                  </span>{" "}
                  off this week
                </p>
              </motion.div>

              <motion.div className="flex flex-col justify-center w-[120px]">
                <button
                  className="bg-[#EF294C] w-[120px] h-[40px] rounded-[9px] opacity-100 
             text-white font-[Oswald] font-semibold text-xs 
             cursor-pointer hover:scale-95 transition-transform duration-300 flex items-center justify-center gap-2"
                >
                  <img src={truckicon} alt="truck icon" />
                  Order Now
                </button>
              </motion.div>

              <motion.div
                className="flex items-center"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="flex items-center bg-white rounded-full overflow-hidden  w-full md:w-[300px] lg:w-[300px] h-[40px] shadow">
                  <div className="flex items-center px-3 flex-grow">
                    <img
                      src="https://logowik.com/content/uploads/images/paper-airplane5825.jpg"
                      alt="rocket icon"
                      className="w-[18px] h-[18px] mr-2"
                    />
                    <input
                      type="text"
                      placeholder="Your email address"
                      className="text-xs flex-grow border-none outline-none bg-transparent"
                    />
                  </div>
                  <button
                    className={`w-full h-full bg-[#EF294C] text-white text-sm font-medium rounded-full cursor-pointer transition transform hover:scale-95  ${
                      subscribe ? "bg-green-500" : "bg-[#EF294C]"
                    }      ${loading ? "opacity-70 cursor-wait" : ""}`}
                    onClick={HandleClick}
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="animate-spin h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                          ></path>
                        </svg>
                        Please wait...
                      </span>
                    ) : subscribe ? (
                      "Subscribed"
                    ) : (
                      "Subscribe"
                    )}
                  </button>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="w-[100px] h-[80px]  lg:h-[350px] flex items-center justify-center  absolute right-[-20%] md:right-[1%] lg:right-[1%]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className=" h-[50px] lg:w-700px lg:h-[250px] flex items-center justify-center">
                <motion.img
                  src={discounticon}
                  alt="discount icon"
                  className="w-[40px] md:w-[90px] lg:w-[90px]"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};
