import React, { useEffect } from "react";
import { ImLocation, ImPhone, ImMail3, ImFacebook } from "react-icons/im";

export default function Footer() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <footer className="mt-12 bg-gray-100 pt-10">
      <div className="container md:flex flex-wrap items-start justify-between pb-10">
        <div className="lg:w-1/5 md:w-4/12 w-full mb-5 lg:mb-0">
          <img
            src={require("../../Images/logo2.png")}
            alt="logo"
            className="h-96"
          />
        </div>
        <div className="text-left md:w-7/12 lg:w-2/6 mt-5">
          <h2 className="text-head font-bold text-xl border-b">Contact Us</h2>
          <hr className="w-16 bg-green h-1" />
          <ul>
            <li className="text-gray-600 flex items-center my-3">
              <ImPhone className="text-green mr-3" />
              +2011111111111 <br />
              +20122222222222
            </li>
            <li className="text-gray-600 flex items-center mb-3">
              <ImLocation className="text-green mr-3" />
              Villa ASSE....456 El tahrer St. Behind
            </li>
            <li className="text-gray-600 flex items-center mb-3">
              <ImMail3 className="text-green mr-3" />
              wafaaadelll99@gmail
            </li>
          </ul>
          <div className="flex ">
            <section className="bg-gray-300 p-3 rounded-full mr-5">
              <a href="#">
                <ImFacebook className="text-gray-500" />
              </a>
            </section>
            <section className="bg-gray-300 p-3 rounded-full mr-5">
              <a href="#">
                <ImFacebook className="text-gray-500" />
              </a>
            </section>
            <section className="bg-gray-300 p-3 rounded-full">
              <a href="#">
                <ImFacebook className="text-gray-500" />
              </a>
            </section>
          </div>
        </div>
        <div className="text-left my-5 lg:w-2/6 md:w-full ">
          <h2 className="text-head font-bold text-xl border-b">Find Us</h2>
          <hr className="w-10 bg-green h-1 mb-5" />
          <div
            class="badge-base LI-profile-badge"
            data-locale="en_US"
            data-size="large"
            data-theme="light"
            data-type="VERTICAL"
            data-vanity="wafaa-adel"
            data-version="v1"
          >
            <a
              class="badge-base__link LI-simple-link"
              href="https://eg.linkedin.com/in/wafaa-adel?trk=profile-badge"
            >
              Wafaa Adel
            </a>
          </div>
        </div>
      </div>
      <div className="bg-green py-4 text-white">
        <p>All Rights Reserve Academy © 2022</p>
        <p>
          Developed By{" "}
          <a href="mailto:wafaaadelll99@gmail.com" className="text-blue-400">
            Wafaa
          </a>
        </p>
      </div>
    </footer>
  );
}
