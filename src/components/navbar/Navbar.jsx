import { NavLink } from "react-router-dom";
import { useState } from "react";
import { navLink } from "./navbar.js";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="bg-primary">
      <nav className="sm:py-10 sm:px-24 py-10 px-12">
        <div className="navbar-container flex items-center font-medium justify-between">
          <NavLink
            to="/"
            className={`${({ isActive, isPending }) =>
              isActive
                ? "active"
                : isPending
                ? "pending"
                : ""} logo text-white cursor-pointer`}
            onClick={() => setActive("")}
          >
            <h1>Edspert</h1>
          </NavLink>
          <ul className="navbar-links list-none hidden lg:flex flex-row w-100 gap-10 items-center">
            {navLink.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-yellow" : "text-white"
                } font-medium cursor-pointer`}
                onClick={() => {
                  if (active === link.title) setActive("");
                  else setActive(link.title);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
                {active === link.title && (
                  <div className="absolute top-20 z-20 shadow-xl">
                    <div className="w-5 h-4 bg-white rotate-45 absolute left-0.5 mt-0.5"></div>
                    <div className="submenu bg-[#EFF4FA] flex flex-col w-100 h-100 py-4 px-4 mt-[9px] justify-end items-start">
                      {link.sublink.map((item, index) => (
                        <div key={index}>
                          <div className="flex flex-row w-100 items-center ">
                            <h3 className="text-black mt-[10px] ">
                              {item.name}
                            </h3>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
            <button className="btn-login">Masuk/Daftar</button>
          </ul>

          <div className="navbar-menu">
            {toggleMenu ? (
              <RiCloseLine
                color="#fff"
                size={27}
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <RiMenu3Line
                color="#fff"
                size={27}
                onClick={() => setToggleMenu(true)}
              />
            )}
            {toggleMenu && (
              <div className="sub-nav-container flex flex-col bg-white h-100 w-100 justify-start items-start text-start p-8 absolute top-20 right-4">
                <ul className="sub-nav-links">
                  {navLink.map((link) => (
                    <li
                      key={link.id}
                      className={`${
                        active === link.title ? "text-yellow" : "text-secondary"
                      } font-bold cursor-pointer py-2`}
                      onClick={() => {
                        if (active === link.title) {
                          setActive("");
                        } else {
                          setActive(link.title);
                        }
                      }}
                    >
                      <a href={`#${link.id}`}>{link.title}</a>
                      {active === link.title && (
                        <div className="flex-col flex w-100 ml-2 bg-white">
                          {link.sublink.map((item, index) => (
                            <div key={index}>
                              <div className="flex flex-row w-100 items-center mt-2">
                                <small className="text-footer">
                                  {item.name}
                                </small>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </li>
                  ))}
                  <button className="btn-login mt-2">Masuk/Daftar</button>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
