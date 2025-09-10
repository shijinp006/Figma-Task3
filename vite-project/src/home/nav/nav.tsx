import { useState } from "react";
import pizzalogo from "../../assets/pizzahutlogo.png";
import bucketicon from "../../assets/bucketicon.svg";
import threeline from "../../assets/threeline.svg";

export const Nav = ({ Action }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const selecActions = (action: string) => {
    if (action) {
      const formattedAction = action.replace(/\s+/g, "");
      Action(formattedAction);
    }
  };

  const handleClick = (action: string) => {
    setMenuOpen(false);
    if (action) {
      const formattedAction = action.replace(/\s+/g, "");
      Action(formattedAction);
    }
  };

  return (
    <nav className="w-full h-[97px] bg-[#FFFFFF] flex items-center relative  px-4 lg:px-0">
      <div className="w-full flex items-center justify-between max-w-7xl px-4 md:px-6 lg:px-10 mx-auto">
        {/* Logo + Title */}
        <div className="flex items-center gap-2">
          <img
            src={pizzalogo}
            alt="pizza logo"
            className="w-[70px] h-[50px] md:w-[119px] md:h-[67px]  lg:w-[119px] lg:h-[67px] "
          />
          <p className="font-['Fugaz_One'] text-[12px] md:text-[20px] lg:text-[20px] leading-[26.67px] font-normal text-[#EE3A43] ">
            pizza hut
          </p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex w-[520px] h-[41px] items-center justify-center gap-6">
          {["Home", "About Us", "Shop", "Blog", "Pages", "Contact"].map(
            (item) => (
              <p
                key={item}
                className="font-['Oswald'] font-medium text-[18px] leading-[28px] capitalize text-[#212121] cursor-pointer transition transform hover:scale-95"
                onClick={() => selecActions(item)}
              >
                {item}
              </p>
            )
          )}
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <img src={bucketicon} alt="bucket icon" className="w-[20px]" />

          <div className="hidden lg:flex items-center justify-center w-[180px] h-[57px] rounded-[7px] bg-[#FFC222] cursor-pointer transition transform hover:scale-95">
            <p className="font-['Oswald'] font-semibold text-[17px] leading-[17px] tracking-[0.8px] text-center capitalize text-white">
              Contact Us
            </p>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden cursor-pointer"
            onClick={() => setMenuOpen(true)}
          >
            <img src={threeline} alt="menu" className="w-[28px] h-[28px]" />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50">
          <div className="fixed top-0 left-0 w-[250px] h-full bg-white shadow-lg p-6 flex flex-col gap-6 z-50">
            {["Home", "About Us", "Shop", "Blog", "Pages", "Contact"].map(
              (item) => (
                <p
                  key={item}
                  className="font-['Oswald'] font-medium text-[18px] leading-[28px] capitalize text-[#212121] cursor-pointer transition hover:text-[#EE3A43]"
                  onClick={() => handleClick(item)}
                >
                  {item}
                </p>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
