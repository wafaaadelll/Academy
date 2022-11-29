import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Nav.css";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ImWhatsapp } from "react-icons/im";

export default function Nav() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const Links = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About us",
      sublinks: [
        { title: "Who We Are", link: "/Aboutus" },
        { title: "Instracturs", link: "/Aboutinstructors" },
      ],
    },
    {
      title: "Programs",
      link: "/Programs",
    },
    {
      title: "Gallery",
      link: "/Gallery",
    },
    {
      title: "Contact",
      link: "/Contact",
    },
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const [nav, setNav] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });
  return (
    <div
      className={`${
        nav ? "navbar activ" : "navbar"
      }  z-20 bg-transparent w-full fixed`}
    >
      <nav
        className={`${
          useLocation().pathname !== "/"
            ? "activ otherpage  lg:h-24 text-center mx-auto"
            : "navbar "
        } py-5 navigation flex items-center ${
          !nav ? "justify-between" : "justify-between lg:h-24 w-full"
        } px-10`}
      >
        <a href="/" className="brand-name">
          <img src={require("../../Images/logo2.png")} alt="logo" />
        </a>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <svg
            className="text-white"
            id="Layer_1"
            version="1.1"
            viewBox="0 0 40 40"
            width="37px"
          >
            <path
              d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2 s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2 S29.104,22,28,22z"
              fill="white"
            ></path>
          </svg>
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            {Links.map((item, index) => {
              return item.sublinks ? (
                <Menu
                  key={index}
                  as="div"
                  className="relative inline-block text-left"
                >
                  <div>
                    <Menu.Button className="items inline-flex items-center font-semibold">
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
                    <Menu.Items className="absolute -right-16 lg:right-0  w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
              ) : (
                <li key={index} className="font font-semibold">
                  <NavLink end to={item.link}>
                    {item.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
      <section className="whatsapp bg-green p-2.5 rounded-full text-white hover:text-green hover:border-2 hover:border-green hover:bg-white">
        <a
          aria-label="Chat on WhatsApp"
          target={"_blank"}
          href="https://api.whatsapp.com/send?phone=201112765868&data=AWAqZi1uLSpuuapntBw2olKk-BuZ0Tgl2V5iQ2h9G6W9E25J6xFcUGxD8iTNqzMptotq6pH_3pnVvOIOukwOUdG67XU9suO9Yu7oZoKSCgWueNXubd7BDrUblrPA5HT1I5QRfgxjslWHlmXGyglswRS6zcO8szMA-6PXF1jhOCBGE2iFNb8PZt2-nmNjIOc4eg4pROLmHsNdbIzWNdQyZR1a8zMS_LUIviP8HDpP2xCcbd8uly8fX8ZRkClxlIvDxJxs4-6A1OWbYL9ehpipfkdAIHZCbD9zzmSMAsmZChXDV5CCmZPMO-MMg3Yl9ti3E7w&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR1gTai7rnE9kTIaSs-UELpSLcAP4rAItRFVkfP8ALzILqjPW7USM8UrU7k"
          className=""
        >
          {" "}
          <ImWhatsapp className="text-4xl" />
        </a>
      </section>
    </div>
  );
}
