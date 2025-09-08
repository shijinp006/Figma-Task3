import blackBanner from "../../assets/blackbanner.jpg";
import yellowArrow from "../../assets/rightyellowarrow.svg"

export const BlackBanner = () => {
  return (
    <>
      <div
        className="w-full h-full lg:h-[390px] flex flex-wrap justify-center relative "
        style={{
          backgroundImage: `url(${blackBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-wrap justify-center  max-w-7xl px-4 md:px-6 lg:px-10 bg lg:absolute bottom-0">
          <div className="w-[100px] h-[100px] rounded-full border-2 border-white border-dashed opacity-100 flex items-center justify-center">
                    <img src={yellowArrow} alt="yellow Arrow" />
          </div>
        </div>
      </div>
    </>
  );
};
