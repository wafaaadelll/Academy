import React from "react";
import { ImLocation, ImPhone, ImMail3, ImFacebook } from "react-icons/im";

export default function Footer() {
  return (
    <footer className="mt-12 bg-gray-100 pt-10">
      <div className="container md:flex flex-wrap items-center justify-between pb-10">
        <div className="lg:w-1/6 md:w-4/12 w-full mb-5 lg:mb-0">
          <img
            src={require("../../Images/logo2.png")}
            alt="logo"
            className="h-72"
          />
        </div>
        <div className="text-left md:w-7/12 lg:w-2/6">
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
              Villa SPC....29 El Tawfiq St. Behind ' Sun Mall Al-Tawfiq
            </li>
            <li className="text-gray-600 flex items-center mb-3">
              <ImMail3 className="text-green mr-3" />
              info@spc-eg.com
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
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCitySmile.Dental.Academy&tabs=timeline&width=340&height=350px&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=true&appId"
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            className="lg:w-94 xl:w-98 md:h-41 md:w-100 w-full h-full"
          ></iframe>
        </div>
      </div>
      <div className="bg-green py-4 text-white">
        <p>All Rights Reserve City Smile © 2022</p>
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
