import burger4 from "../../assets/burger4.jpg";
import burger5 from "../../assets/burger5.jpg";
import pizza from "../../assets/pizza4.png";
import rightarrow from "../../assets/rightbigarrow.svg";
import lefttarrow from "../../assets/leftbigarrow.svg";

export const BurgerPizzaBanner = () => {
  const Images = [
    {
      image: burger4,
    },
    {
      image: burger5,
    },
    {
      image: pizza,
    },
  ];
  return (
    <>
      <div className="w-full h-full lg:h-screen flex flex-wrap items-center justify-center relative  ">
        <div className="flex flex-wrap items-center justify-center w-full max-w-7xl px-4 md:px-6 lg:px-10 mx-auto">
          <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center gap-2 lg:gap-3">
            {Images.map((item, index) => (
              <div
                key={index}
                className="w-full pb-2  md:h-[300px] md:pb-4 lg:w-[320px] lg:h-[430px]  lg:pb-0 flex items-center justify-center  overflow-hidden cursor-pointer hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
              >
                <img
                  src={item.image}
                  alt={`Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <img
          src={lefttarrow}
          alt="left arrow"
          className="hidden lg:block absolute left-0 cursor-pointer hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out "
        />
        <img src={rightarrow} alt="right arrow" className="hidden lg:block absolute right-0 cursor-pointer hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out " />
      </div>
    </>
  );
};
