import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { GiElectric } from "react-icons/gi";
import { ImFire } from "react-icons/im";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import SwiperCore, { Autoplay, Scrollbar } from "swiper";

export default function NoteSwiper() {
  SwiperCore.use([Autoplay]);

  return (
    <div>
      <Swiper
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Scrollbar]}
        className="cursor-pointer bg-red-900 text-white"
      >
        <SwiperSlide className="flex items-center justify-center py-2 font">
          Don't miss early registration discount{" "}
          <GiElectric className="text-yellow-500 ml-2" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center py-2 font">
          Special offer for friends <ImFire className="text-yellow-500 ml-2" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
