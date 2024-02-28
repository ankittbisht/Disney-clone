import { useState } from "react";
import logo from "../assets/Images/logo.png";
import man from "../assets/Images/man.png";
import HeaderItem from "./HeaderItem";
import { HiDotsVertical, HiHome, HiPlus, HiStar } from "react-icons/hi";
import { HiMagnifyingGlass, HiPlayCircle, HiTv } from "react-icons/hi2";

function Header() {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  };

  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    { name: "SEARCH", icon: HiMagnifyingGlass },
    { name: "WATCH LIST", icon: HiPlus },
    { name: "ORIGINALS", icon: HiStar },
    { name: "MOVIES", icon: HiPlayCircle },
    { name: "SERIES", icon: HiTv },
  ];
  return (
    <div className="p-5  flex items-center justify-between">
      <div className="flex gap-8 items-center">
        <img src={logo} className="w-[80px] md:w-[115px] object-cover " />
        <div className="hidden md:flex  gap-8">
          {menu.map((item, index) => (
            <HeaderItem key={index} name={item.name} Icon={item.icon} />
          ))}
        </div>
        {/* it means that after medium size it will be hidden and otherwise it is flex  */}
        <div className="flex md:hidden gap-5">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItem key={index} name={""} Icon={item.icon} />
          )}
          <div className="md:hidden" onClick={handleClick}>
            <HeaderItem name={""} Icon={HiDotsVertical} />
            {toggle && (
              <div className="absolute mt-3 px-1 py-1 bg-black border-[1px] border-gray-700 ">
                {menu.map(
                  (item, index) =>
                    index >= 3 && (
                      <HeaderItem
                        key={index}
                        name={item.name}
                        Icon={item.icon}
                      />
                    )
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <img src={man} className="w-[40px] rounded-full" />
    </div>
  );
}

export default Header;
