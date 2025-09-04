import pizza from "../../assets/pizza2.png";
import frenchFries from "../../assets/frenchfries2.png";
import chicken from "../../assets/FriedChicken.png";
import burger from "../../assets/burger (2).png";

export const DeliciousItem = () => {
  const Items = [
    {
      title: "Chicago Deep Pizza",
      description:
        "Its the perfect dining experience where Experience quick and efficient",
      image: pizza, // replace with actual image path or URL
    },
    {
      title: "Fast Food Combo",
      description:
        "Its the perfect dining experience where Experience quick and efficient",
      image: frenchFries, // replace with actual image path or URL
    },
    {
      title: "Grilled Chicken",
      description:
        "Its the perfect dining experience where Experience quick and efficient",
      image: chicken, // replace with actual image path or URL
    },
    {
      title: "Whopper Burger King",
      description:
        "Its the perfect dining experience where Experience quick and efficient",
      image: burger, // replace with actual image path or URL
    },
  ];

  return (
    <>
      <div className="flex flex-wrap items-center justify-center w-full h-full lg:h-screen ">
        <div className="flex flex-wrap items-center justify-center w-full max-w-7xl px-4 md:px-6 lg:px-10 mx-auto">
          <div className=" flex flex-col items-center justify-center bg-[#F3F3F3] w-full h-[500px]">
            <div className="w-[107px] h-[28px]">
              <p className="font-[Oswald] font-bold text-[12px] leading-[28px] text-center capitalize text-[#00A149]">
                about our food
              </p>
            </div>
            <div className="w-[454px] h-[67px]">
              <p className="font-[Oswald] font-bold text-[45px] leading-[67.2px] text-center capitalize text-[#212121]">
                hot delicious item
              </p>
            </div>
            <div className="flex flex-row items-center justify-center w-full h-[50px] gap-3">
              <div className="w-[110px] h-[40px] rounded-[40px] bg-[#FFC222] flex items-center justify-center cursor-pointer hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out">
                <div className="w-[80px] h-[28px] flex items-center justify-center ">
                  <p className="font-[Oswald] font-medium text-[14px] leading-[28px] capitalize text-[#212121]">
                    chicken fry
                  </p>
                </div>
              </div>
              <div className="w-[70px] h-[40px] flex items-center justify-center rounded-[40px] bg-[#D9D9D9] cursor-pointer hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out">
                <div className="flex items-center justify-center w-[35px] h-[28px]">
                  <p className="font-[Oswald] font-medium text-[14px] leading-[28px] capitalize text-[#212121]">
                    pizza
                  </p>
                </div>
              </div>
              <div className=" flex items-center justify-center w-[80px] h-[40px] rounded-[40px] bg-[#D9D9D9] cursor-pointer hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out">
                <div className="flex items-center justify-center w-[47px] h-[28px]">
                  <p className="font-[Oswald] font-medium text-[14px] leading-[28px] capitalize text-[#212121]">
                    burger
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center w-[80px] h-[40px] bg-[#D9D9D9] rounded-[40px] cursor-pointer hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out">
                <div className="flex items-center justify-center w-[53px] h-[28px]">
                  <p className="font-[Oswald] font-medium text-[14px] leading-[28px] capitalize text-[#212121]">
                    deserts
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row w-full h-[240px] items-center justify-center gap-6">
              {Items.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center  p-2 cursor-pointer hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
                >
                  <div className="w-[120px] h-[130px] flex items-center justify-center ">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-contain h-full"
                    />
                  </div>

                  <div className="w-[200px] h-[39px] flex items-center justify-center">
                    <div className="w-[200px] h-[33px] flex items-center justify-center">
                      <p className="font-[Oswald] font-bold text-[16px] leading-[33.8px] text-center capitalize text-[#212121] ">
                        {item.title}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-center text-gray-600 mt-2 px-2 font-[Oswald]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
