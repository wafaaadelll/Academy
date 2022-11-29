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
      img: "bg-[url('https://img-cdn.inc.com/image/upload/w_1920,h_1080,c_fill/images/panoramic/getty_1187833318_2000133220009280118_mbtvwq.jpg')]",
      link: "",
    },
    {
      head: "Lorem ipsum dolor sit amet consectetur.",
      pragraph:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, necessitatibus esse deleniti repellat incidunt culpa quisquam in enim ratione temporibus?",
      img: "bg-[url('https://elearningindustry.com/wp-content/uploads/2019/09/online-courses-what-students-want.jpg')]",
      link: "",
    },
    {
      head: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      pragraph:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, necessitatibus esse deleniti repellat incidunt culpa quisquam in enim ratione temporibus?",
      img: "bg-[url('https://cdn-wordpress-info.futurelearn.com/wp-content/uploads/FL365_Free_Certs_Blog_Header.png')]",
      link: "",
    },
  ];
  SwiperCore.use([Autoplay]);

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        className="h-screen w-full"
      >
        {swipe.map((slide, index) => {
          return (
            <SwiperSlide
              className={`h-screen flex items-center justify-center bg-center bg-cover ${slide.img}`}
              key={index}
            >
              <section className="new h-screen w-full flex items-center">
                <div className="md:w-3/4 w-full mx-auto " data-aos="fade-up">
                  <h1 className="lg:text-7xl md:text-3xl text-xl py-10 text-white font-bold">
                    {slide.head}
                  </h1>
                  <p className="text-white lg:text-xl md:text-lg text-md w-4/5 mx-auto text-center">
                    {slide.pragraph}
                  </p>
                  <button className=" mt-12 bg-transparent hover:bg-white hover:text-gray-500 text-white font-bold py-2 px-6 border border-white rounded">
                    Learn More
                  </button>
                </div>
              </section>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
