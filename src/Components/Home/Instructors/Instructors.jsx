import React from "react";
import Instructor from "../../../Services/Instructor";
import { AiOutlineUser } from "react-icons/ai";

export default function Instructors() {
  return (
    <div className="mt-12 container">
      <h2 className="font-bold text-head text-4xl mb-6 uppercase">
        Our Instructors
      </h2>
      <hr className="mb-20 w-20 mx-auto bg-green hover:w-96 h-1" />
      <div className="grid grid-cols-3 gap-4">
        {Instructor.map((instructor) => {
          return (
            <div
              className="relative flex justify-center items-center"
              key={instructor.id}
            >
              <img
                src={instructor.img}
                alt={instructor.Name}
                className="w-44 h-44 rounded-full"
              />
              <div className="pl-1">
                <h3 className="text-left text-xl text-head font-semibold pb-3">
                  Dr {instructor.Name}
                </h3>
                <div>
                  <AiOutlineUser />
                  <p className="line-clamp-1 -mt-5 text-gray-600">
                    {instructor.about}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
