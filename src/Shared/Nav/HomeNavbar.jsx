import React, { useEffect, useState } from "react";
import "./HomeNavbar.css";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { NavLink, useLocation } from "react-router-dom";

const HomeNavbar = () => {
  const [navbar, setNavbar] = useState(false),
    [nav, setNav] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });
  const Links = [
    {
      title: "Home",
      link: "/Home",
    },
    {
      title: "About us",
      exect: "activeClassName='is-active'",
      sublinks: [
        { title: "Who We Are", link: "/Aboutus" },
        { title: "Instracturs", link: "/Aboutinstructors" },
      ],
    },
    {
      title: "Programs",
      exect: "activeClassName='is-active'",
      link: "/Programs",
    },
    {
      title: "Calender",
      exect: "activeClassName='is-active'",
      link: "/Calender",
    },
    {
      title: "Gallery",
      exect: "activeClassName='is-active'",
      link: "/Gallery",
    },
    {
      title: "Contact",
      exect: "activeClassName='is-active'",
      link: "/Contact",
    },
  ];
  return (
    <nav
      className={`${
        nav ? "navbar activ" : "navbar"
      } w-full bg-transparent fixed z-10
      ${useLocation().pathname !== "/Home" ? "activ otherpage" : "navbar"}
      `}
    >
      <div
        className={` ${
          !nav ? "justify-between" : "justify-center h-16"
        } px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 navitem`}
      >
        {!nav ? (
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block texxxt">
              <a>
                <img src={require("../../Images/logo1.png")} alt="logo" />
              </a>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className=" items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {Links.map((item, index) => {
                return !item.sublinks ? (
                  <li className="items" key={index}>
                    <NavLink exact="true" to={item.link} className="py-2 px-4">
                      {item.title}
                    </NavLink>
                  </li>
                ) : (
                  <Menu
                    key={index}
                    as="div"
                    className="relative inline-block text-left"
                  >
                    <div>
                      <Menu.Button className="items inline-flex">
                        {item.title}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 ml-2 -mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          {item.sublinks.map((sublink, index) => {
                            return (
                              <Menu.Item key={index}>
                                {({ active }) => (
                                  <NavLink
                                    to={sublink.link}
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    {sublink.title}
                                  </NavLink>
                                )}
                              </Menu.Item>
                            );
                          })}
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default HomeNavbar;