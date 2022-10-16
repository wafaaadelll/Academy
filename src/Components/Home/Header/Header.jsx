import React from "react";
import "./Header.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import SwiperCore, { Autoplay, Pagination } from "swiper";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Header() {
  AOS.init();
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };
  const swipe = [
    {
      head: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      pragraph:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, necessitatibus esse deleniti repellat incidunt culpa quisquam in enim ratione temporibus?",
      img: "bg-[url('https://www.spc-eg.com/uploads/slides/t/9.jpg')]",
      link: "",
    },
    {
      head: "Lorem ipsum dolor sit amet consectetur.",
      pragraph:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, necessitatibus esse deleniti repellat incidunt culpa quisquam in enim ratione temporibus?",
      img: "bg-[url('https://www.spc-eg.com/uploads/slides/t/12.jpg')]",
      link: "",
    },
    {
      head: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      pragraph:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, necessitatibus esse deleniti repellat incidunt culpa quisquam in enim ratione temporibus?",
      img: "bg-[url('https://www.spc-eg.com/uploads/slides/t/9.jpg')]",
      link: "",
    },
  ];
  SwiperCore.use([Autoplay]);

  return (
    <header className="">
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        className="h-screen"
      >
        {swipe.map((slide, index) => {
          return (
            <SwiperSlide
              className={`h-screen flex items-center justify-center bg-center bg-cover ${slide.img}`}
              key={index}
            >
              <section className="new h-screen w-full flex items-center">
                <div className="w-3/4 mx-auto " data-aos="fade-up">
                  <h1 className="text-7xl py-10 text-white font-bold">
                    {slide.head}
                  </h1>
                  <p className="text-white text-xl w-4/5 mx-auto text-center">
                    {slide.pragraph}
                  </p>
                  <button class=" mt-12 bg-transparent hover:bg-white hover:text-gray-500 text-white font-bold py-2 px-6 border border-white rounded">
                    Learn More
                  </button>
                </div>
              </section>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </header>
  );
}
