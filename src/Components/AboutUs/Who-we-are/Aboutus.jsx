import React from "react";
import "./Aboutus.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

export default function Aboutus() {
  AOS.init();
  const about = [
    {
      title: "Vision",
      text: [
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, perferendis neque voluptatum vitae sunt ex?",
        "Lorem ipsum dolor sit amet consectetur adipisicing.",
        "Lorem ipsum dolor sit amet consectetur adipisicing Loreonsectetur adipisicing.",
      ],
    },
    {
      title: "Mission",
      text: [
        "Lorem ipsum dolor sit amet consectetur adipisicing.",
        "Lorem ipsum dolor sit amet consectetur adipisicing Loreonsectetur adipisicing.",
      ],
    },
    {
      title: "Values",
      text: [
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, perferendis neque voluptatum vitae sunt ex?",
        "Lorem ipsum dolor sit amet consectetur adipisicing Loreonsectetur adipisicing.",
      ],
    },
    {
      title: "Goals & Objective",
      text: [
        "Lorem ipsum dolor sit amet consectetur adipisicing  adipisicing.",
        "Lorem ipsum dolor sit consectetur adipisicing.",
        "Lorem ipsum dolor sit amet consectetur adipisicing Loreonsectetur adipisicing.",
      ],
    },
  ];
  return (
    <div>
      <header></header>
      <section className="container mt-12">
        <h2 className="text-head text-4xl font-bold font border-b w-full pb-3 border-gray-300">
          Academy Strategy
        </h2>
        <div className="text-left pl-10 my-10">
          <ul className="list-decimal">
            {about.map((item, index) => {
              return (
                <div key={index} data-aos="fade-up" data-aos-duration="1000">
                  <li className="my-5 font text-green text-2xl font-bold">
                    {item.title}
                  </li>
                  <ul className="list-disc pl-5">
                    {item.text.map((text, index) => {
                      return (
                        <li key={index} className="my-1 text-gray-600 ">
                          {text}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </ul>
        </div>
      </section>
      <div
        className="container text-left"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <Link
          to={"/Programs"}
          className="bg-head hover:bg-green text-white font-bold py-2 px-10 border-b-4 border-green hover:border-head rounded"
        >
          Veiw Our Programs
        </Link>
      </div>
    </div>
  );
}
