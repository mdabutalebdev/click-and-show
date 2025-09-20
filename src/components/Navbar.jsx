import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp, FaTelegramPlane, FaInstagram } from "react-icons/fa";
import { VscChromeMinimize } from "react-icons/vsc";


const Navbar = () => {
  const navMenu = ["About Us", "Our Story", "Project"];
  return (
    <div className="py-2 bg-[linear-gradient(90deg,#5686FF_0%,#FF5671_100%)]">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 text-white">
        <FaXTwitter />
        <FaWhatsapp />
        <FaInstagram />
        <FaTelegramPlane />
      </div>
      <ul className="flex gap-10 list-none">
        {navMenu.map((el, indx) => (
          <li className="text-white " key={indx}>
            {el}
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default Navbar;
