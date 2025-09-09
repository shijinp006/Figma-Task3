import normalburger from "../../assets/normalburger2.jpg";
import burger from "../../assets/burger5.jpg";
import pasta from "../../assets/pasta.jpg";
import burger7 from "../../assets/burger7.jpg";
import image from "../../assets/image.jpg";

export const BottomBanner = () => {
  return (
    <div className="flex items-center justify-center w-full h-full lg:h-[380px]">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 w-full h-full">
        <div className="flex items-center justify-center w-full h-full ">
          <img src={pasta} alt="pasta" className="h-[297px] w-full" />
        </div>
        <div className="flex items-center justify-center w-full h-full ">
          <img src={burger7} alt="burger" className="h-[297px] w-full" />
        </div>
        <div className="flex items-center justify-center w-full full ">
          <img src={image} alt="image" className="h-[297px] w-full" />
        </div>
        <div className="flex items-center justify-center w-full h-full ">
          <img src={burger} alt="Burger" className="h-[297px] w-full" />
        </div>
        <div className="flex items-center justify-center w-full h-full">
          <img src={normalburger} alt="normal Burger" className="h-[297px] w-full" />
        </div>
      </div>
    </div>
  );
};
