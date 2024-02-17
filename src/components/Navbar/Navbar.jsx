import { useState } from "react";

import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMene = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const HandleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      }
    };
    window.addEventListener("scroll", HandleScroll);
  }, []);
  return (
    <header className="">
      <nav className="w-full flex items-center justify-between gap-10">
        <div className="lg:block ">
          <Link to={"/Login"}>
            <button className="w-[105px] h-10 bg-red-400 rounded-[40px] ">
              ورود/ثبت نام
            </button>
          </Link>
          <img src="../assets/images/Search.svg" />
        </div>
        <div className="lg:flex md:flex hidden items-center gap-3  text-stone-700">
          <NavLink
            to="/"
            className="w-[94px] h-3.5 text-center text-gray-900 text-xs font-bold font-['Yekan'] uppercase leading-none tracking-wide  hover:border-b-4"
          >
            خانه
          </NavLink>
          <NavLink
            to="/News"
            className="w-[94px] h-3.5 text-center text-gray-900 text-xs font-bold font-['Yekan'] uppercase leading-none tracking-wide hover:border-b-4"
          >
            اطلاعیه ها
          </NavLink>
          <NavLink
            to="/Members"
            className="w-[94px] h-3.5 text-center text-gray-900 text-xs font-bold font-['Yekan'] uppercase leading-none tracking-wide hover:border-b-4"
          >
            {" "}
            اعضای کمیته
          </NavLink>
          <NavLink
            to="/Picture"
            className="w-[94px] h-3.5 text-center text-gray-900 text-xs font-bold font-['Yekan'] uppercase leading-none tracking-wide hover:border-b-4"
          >
            {" "}
            گالری عکس{" "}
          </NavLink>
          <NavLink
            to="/History"
            className="w-[94px] h-3.5 text-center text-gray-900 text-xs font-bold font-['Yekan'] uppercase leading-none tracking-wide hover:border-b-4"
          >
            {" "}
            تاریخچه
          </NavLink>
        </div>
        <div className="font-bold text-2xl cursor-pointer text-black">
          <a href="/">
            <img src={logo} alt="" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
