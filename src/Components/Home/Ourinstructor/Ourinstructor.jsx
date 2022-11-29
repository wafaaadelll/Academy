import React from "react";
import Instructor from "../../../Services/Instructor";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function OurInstructor() {
  AOS.init();

  return (
    <div
      className="pt-24 container"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h2 className="font-bold text-head text-4xl mb-6 uppercase">
        Our Instructors
      </h2>
      <hr className="mb-20 w-20 mx-auto bg-green hover:w-96 h-1" />
      <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-4">
        {Instructor.map((instructor) => {
          return instructor.top ? (
            <div
              className="relative grid lg:grid-cols-2 items-center"
              key={instructor.id}
            >
              <div className="w-44">
                <Link to={`/Aboutinstructors/${instructor.id}`}>
                  <img
                    src={instructor.img}
                    alt={instructor.Name}
                    className="rounded-full w-full h-44"
                  />
                </Link>
              </div>

              <div className="">
                <Link to={`/Aboutinstructors/${instructor.id}`}>
                  <h3 className="text-left text-xl text-head font-semibold pb-3">
                    Dr. {instructor.Name}
                  </h3>
                </Link>

                <div>
                  <AiOutlineUser />
                  <p className="line-clamp-1 -mt-5 pl-5 lg:ml-0 text-gray-600 text-left">
                    {instructor.headline}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            ""
          );
        })}
      </div>
    </div>
  );
}
