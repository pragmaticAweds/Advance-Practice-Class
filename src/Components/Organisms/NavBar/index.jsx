import clsx from "clsx";
import "./NavBar-Style.css";
import Input from "../../Atoms/Input";
import CartIcon from "../../Atoms/Vectors/CartIcon";
import SearchIcon from "../../Atoms/Vectors/SearchIcon";
import UserIcon from "../../Atoms/Vectors/UserIcon";
import HamburgerIcon from "../../Atoms/Vectors/HamburgerIcon";
import MobileLogo from "../../Atoms/Vectors/MobileLogo";
import CloseIcon from "../../Atoms/Vectors/CloseIcon";
import ArrowRightIcon from "../../Atoms/Vectors/ArrowRightIcon";
import { useState, useEffect, useRef } from "react";
import useScrollYListener from "../../../hooks/useScrollYListener";

const NavBar = () => {
  const scroll = useScrollYListener();
  const [openSideBar, setOpenSideBar] = useState(false);
  const handleSideBarToggle = () => {
    setOpenSideBar((prev) => !prev);
  };

  const navLinks = [
    "Shop",
    "Artists",
    "About",
    "FAQs",
    "Sell",
    "Login",
    "Instagram",
  ];

  return (
    <nav
      className={clsx(
        "nav transition-all delay-100",
        scroll > 1 ? "bg-white" : "bg-transparent"
      )}
    >
      <div
        className={clsx(
          "mobile-side-bar transition-all delay-75",
          openSideBar ? "left-0" : "-left-[50rem]"
        )}
      >
        <div className="flex items-center justify-between w-[70%] px-6">
          <span onClick={handleSideBarToggle}>
            <CloseIcon />
          </span>
          <span className="block lg:hidden">
            <MobileLogo />
          </span>
        </div>
        <div className="bg-black-bg flex-1 px-6 border-t border-t-[#333333] py-7">
          <Input />
          <div className="flex flex-col gap-y-8 mt-8">
            {navLinks.map((link, i) => (
              <span
                key={"nav-link" + i}
                className="text-[1.75rem] text-white flex items-center justify-between leading-9"
              >
                {link} <ArrowRightIcon />
              </span>
            ))}
          </div>
        </div>
      </div>
      <>
        <span
          className={clsx(
            "hidden lg:block text-[2.125rem] ",
            scroll > 1 ? "text-black" : "text-white"
          )}
        >
          Good Mood
        </span>
        <span className="lg:hidden" onClick={handleSideBarToggle}>
          <HamburgerIcon />
        </span>
      </>
      <>
        <div className="nav-spacing">
          {navLinks.map((link, i) => (
            <span
              key={"nav-link" + i}
              className={clsx(
                "nav-link",
                scroll > 1 ? "text-black" : "text-white",
                i === navLinks.length - 1
                  ? "hidden"
                  : i === navLinks.length - 2
                  ? "hidden"
                  : ""
              )}
            >
              {link}
            </span>
          ))}
        </div>
        <span className="block lg:hidden">
          <MobileLogo />
        </span>
      </>
      <>
        <span className="block lg:hidden">
          <CartIcon />
        </span>
        <div className="nav-spacing">
          <SearchIcon />
          <UserIcon />
          <CartIcon />
        </div>
      </>
    </nav>
  );
};

export default NavBar;
