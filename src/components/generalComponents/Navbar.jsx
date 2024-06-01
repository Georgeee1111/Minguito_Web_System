import { useState, useEffect } from "react";

import { close, logo, menu } from "../../assets";
import { navLinks } from "../../constants";
import Button1 from "./Button1";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [navbarPosition, setNavbarPosition] = useState({ top: 0 });

  useEffect(() => {
    const updateNavbarPosition = () => {
      const navbar = document.querySelector(".navbar");
      const navbarRect = navbar.getBoundingClientRect();
      setNavbarPosition({ top: navbarRect.top });
    };

    updateNavbarPosition();

    const handleResize = () => {
      updateNavbarPosition();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className="w-full flex py-6 justify-between items-center navbar fixed top-0 left-0 z-50 bg-primary"
      style={{ top: navbarPosition.top }}
    >
      <div className="ml-4">
        <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      </div>

      <ul className="list-none sm:flex hidden justify-center items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:flex hidden items-center space-x-4 mr-4">
        <Button1 to="/signup">Sign Up</Button1>
        <Button1 to="/login">Sign In</Button1>
      </div>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          style={{ backdropFilter: "blur(8px)" }}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
