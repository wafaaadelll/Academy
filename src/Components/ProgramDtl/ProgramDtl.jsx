import React from "react";
import { Link, useParams } from "react-router-dom";
import Program from "../../Services/Program";
import { SlClock } from "react-icons/sl";
import Instructor from "../../Services/Instructor";
import NoteSwiper from "../../Shared/NoteSwiper/NoteSwiper";
export default function ProgramDtl() {
  const { productId } = useParams();
  const thisProduct = Program.find((prod) => prod.id === productId);
  return (
    <div className="lg:pt-24 pt-12">
      <div className="bg-head py-4">
        <h1 className="text-white font text-5xl font-bold">
          {thisProduct.Name}
        </h1>
      </div>
      <NoteSwiper />
      <div className="mb-10">
        <img src={thisProduct.img} alt="" className="w-full h-screen" />
      </div>
      <section className=" container grid lg:grid-cols-4 gap-4">
        <div className="text-left mb-5 col-span-2">
          <h2 className="text-green font-bold text-2xl font">
            {thisProduct.Name}
          </h2>
          <hr className="w-20 bg-head h-1 mb-5" />
          <h2 className="font text-head font-semibold ml-5">INSTRUCTORS:</h2>
          {thisProduct.instructor.map((ele) => {
            return Instructor.map((el) => {
              return ele === el.id ? (
                <div>
                  <div className="flex items-center ml-10 my-3">
                    <img
                      src={el.profile}
                      alt=""
                      className="w-14 h-14 rounded-full mr-2"
                    />
                    <Link to={`/Aboutinstructors/${el.id}`}>Dr. {el.Name}</Link>
                  </div>
                </div>
              ) : (
                ""
              );
            });
          })}
          <h4 className="text-head font-semibold ml-5">
            {thisProduct.Name} Course Content:
          </h4>
          <ul className="list-disc ml-10 lg:ml-16">
            {thisProduct.About.map((item, index) => {
              return item.title ? (
                <div>
                  <h3 className="font text-green font-semibold">
                    {item.title}
                  </h3>
                  <ul className="list-disc">
                    {item.about.map((e) => {
                      return (
                        <li className="ml-10 lg:ml-16 text-gray-600">{e}</li>
                      );
                    })}
                  </ul>
                </div>
              ) : (
                <li className="py-1 text-gray-600" key={index}>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-span-2 text-left">
          <h2 className="text-green font-bold text-2xl font">Day schedule</h2>
          <hr className="w-16 bg-head h-1 mb-5" />
          <div>
            <p className="flex items-center">
              <SlClock className="text-head mr-2" />
              <span className="font-bold text-head mr-1">9:30 am </span>
              <span className="font font-semibold"> breakfast</span>
            </p>
            <p className="flex items-center">
              <SlClock className="text-head mr-2" />
              <span className="font-bold text-head mr-1">10:30 am </span>
              <span className="font font-semibold"> lecture </span>
            </p>
            <p className="flex items-center">
              <SlClock className="text-head mr-2" />
              <span className="font-bold text-head mr-1">02:00 -02:30 pm </span>
              <span className="font font-semibold"> lunch break</span>
            </p>
            <p className="flex items-center">
              <SlClock className="text-head mr-2" />
              <span className="font-bold text-head mr-1">
                02:30 pm - 05:30 pm
              </span>
              <span className="font font-semibold"> work shop</span>
            </p>
            <a
              href="#"
              className="bg-head inline-block hover:bg-green text-white font-bold mt-6 py-2 px-8 border-b-4 border-green hover:border-head rounded"
            >
              Register Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
