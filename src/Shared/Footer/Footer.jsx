import React from "react";
import { ImLocation, ImPhone, ImMail3, ImFacebook } from "react-icons/im";

export default function Footer() {
  return (
    <footer className="mt-12 container bg-gray-100 py-10">
      <div className=" flex items-center justify-between">
        <div className="w-1/6">
          <img
            src={require("../../Images/logo.png")}
            alt="logo"
            className="w-3/4"
          />
        </div>
        <div className="text-left w-2/6">
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
        <div className="text-left w-2/6">
          <h2 className="text-head font-bold text-xl border-b">Find Us</h2>
          <hr className="w-10 bg-green h-1 mb-5" />
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCitySmile.Dental.Academy&tabs=timeline&width=340&height=350px&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=true&appId"
            width="400"
            height="180px"
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}
