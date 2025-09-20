import Logo from "../assets/logo.svg";
import { FaTelegramPlane } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

const Menu = () => {
  const menus = ["Home", "Lifestyle", "Features", "Post Layout", "Contact"];
  return (
    <div className="bg-white py-5 shadow-xl">
      <div className="container mx-auto flex items-center justify-between">
        <div className="logo">
          <img src={Logo} alt="Logo" className="w-[110px]" />
        </div>
        <div className="menu flex items-center">
          <ul className="flex items-center gap-10">
            {menus.map((el, idx) => (
              <li className="font-normal text-[18px]" key={idx}>{el}</li>
            ))}
          </ul>
          <div className="flex items-center gap-6 ml-10">
            <button className="bg-[#FF5671] px-5 py-2 flex items-center gap-2 text-white rounded-md">
              <FaTelegramPlane />
              Join Us
            </button>

            <CiSearch className=""/>
            <CiMenuBurger />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
