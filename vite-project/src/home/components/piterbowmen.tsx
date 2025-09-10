import { motion } from "framer-motion";
import piterBowmenbg from "../../assets/piterbowmenbg.png";
import piterBowmen from "../../assets/piterbowmen.jpg";
import yellowStar from "../../assets/yellowstar.svg";

export const PiterBowmen = () => {
  return (
    <>
      <div
        className="flex flex-col lg:flex-wrap items-center justify-center w-full h-full lg:h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${piterBowmenbg})` }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl px-4 md:px-6 lg:px-10 mx-auto gap-8 lg:gap-16">
          {/* Image */}
          <motion.div
            className="w-full md:w-[300px] lg:w-[374px] h-auto relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img src={piterBowmen} alt="piterBowen" className="w-full h-auto" />
            <motion.div
              className="flex items-center justify-center w-[140px] h-[50px] bg-[#00A149] rotate-[-90deg]  absolute left-[-18%] bottom-34"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center w-[70px] h-[26px]">
                <p className="font-[Oswald] font-medium text-[20px] leading-[26px] capitalize text-white">
                  Feedback
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Text & Stars */}
          <motion.div
            className="flex flex-col items-center justify-center gap-6 lg:gap-10 w-full md:w-auto"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Name & Title */}
            <motion.div
              className="flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h2 className="font-[Oswald] font-semibold text-[20px] md:text-[22px] lg:text-[20px] leading-[30px] text-center capitalize text-[#212121]">
                Piter Bowman
              </h2>
              <p className="font-[Oswald] font-semibold text-[14px] md:text-[16px] lg:text-[14px] leading-[18px] text-center capitalize text-[#FFC222]">
                Business CEO & co founder
              </p>
            </motion.div>

            {/* Testimonial */}
            <motion.p
              className="font-[Oswald] font-medium text-[24px] sm:text-[28px] md:text-[32px] lg:text-[34px] leading-[34px] sm:leading-[38px] md:leading-[42px] lg:leading-[44.2px] text-center text-[#212121] max-w-full md:max-w-[600px] lg:max-w-[718px]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              “Thank you for dinner last night. It was amazing!! I have say it’s
              the best meal I have had in quite some time. Will definitely be
              seeing more eating next year.”
            </motion.p>

            {/* Stars */}
            <motion.div
              className="flex items-center justify-center flex-row gap-1"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              {[...Array(5)].map((_, index) => (
                <img
                  key={index}
                  src={yellowStar}
                  alt="yellow Star"
                  className="w-4 h-4 sm:w-4 sm:h-4"
                />
              ))}
            </motion.div>

            {/* Pagination Dots */}
            <motion.div
              className="flex flex-row items-center justify-center w-[146px] h-[41px] rounded-[30px] border border-[#5C5C5BE5] border-dashed opacity-100 gap-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
            >
              <div className="w-[10px] h-[10px] border bg-[#5C5C5B] rounded-full"></div>
              <div className="w-[15px] h-[15px] rounded-full border border-[#00A149] flex items-center justify-center">
                <div className="w-[10px] h-[10px] bg-[#00A149] rounded-full"></div>
              </div>
              <div className="w-[10px] h-[10px] border bg-[#5C5C5B] rounded-full"></div>
              <div className="w-[10px] h-[10px] border bg-[#5C5C5B] rounded-full"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};
