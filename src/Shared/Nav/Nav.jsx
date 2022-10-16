import React, { useEffect, useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [navbar, setNavbar] = useState(false),
    [nav, setNav] = useState(false);
  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 66) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });
  const Links = [
    { title: "Home", link: "/Home" },
    {
      title: "About us",
      link: "/About",
      sublinks: [
        { title: "Who We Are", link: "/Who" },
        { title: "Instracturs", link: "/Instracturs" },
      ],
    },
    { title: "Programs", link: "/Programs" },
    { title: "Calender", link: "/Calender" },
    { title: "Gallery", link: "/Gallery" },
    { title: "Contact", link: "/Contact" },
  ];
  return (
    <nav
      className={`${
        nav ? "navbar active" : "navbar"
      } w-full bg-transparent fixed`}
    >
      <div
        className={` ${
          !nav ? "justify-between" : "justify-center h-16"
        } px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8`}
      >
        {!nav ? (
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <a>
                <h2 className="text-2xl font-bold">LOGO</h2>
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
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {Links.map((item, index) => {
                return !item.sublinks ? (
                  <li className="hover:text-blue-600" key={index}>
                    <a>{item.title}</a>
                  </li>
                ) : (
                  <div>
                    <button
                      id="dropdownDefault"
                      data-dropdown-toggle="dropdown"
                      class="hover:text-blue-600 inline-flex items-center"
                      type="button"
                    >
                      Dropdown button{" "}
                      <svg
                        class="ml-2 w-4 h-4"
                        aria-hidden="true"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </button>
                    <div
                      id="dropdown"
                      class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                    >
                      <ul
                        class="py-1 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownDefault"
                      >
                        <li>
                          <a
                            href="#"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Dashboard
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Settings
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Earnings
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Sign out
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
