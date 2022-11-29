import React from "react";
import { Link } from "react-router-dom";
import Program from "../../../Services/Program";
import "./Upcoming.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Upcoming() {
  AOS.init();

  return (
    <div
      className="mt-12 container"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h2 className="font-bold text-head text-4xl mb-6 uppercase">
        Upcoming Programs
      </h2>
      <hr className="md:mb-20 mb-12 w-20 mx-auto bg-green hover:w-96 h-1" />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
        {Program.map((program) => {
          return program.upcoming ? (
            <div
              className="relative flex justify-center items-center"
              key={program.id}
            >
              <div>
                <div className="contain">
                  <a>
                    <img
                      src={program.img}
                      alt="Upcoming program"
                      className="prog"
                    />
                  </a>
                  <div className="overlay">
                    <div className="show">
                      <p className="time bg-head w-28">{program.time}</p>
                      <Link
                        className="button py-3 underline hover:bg-green bg-head text-white text-md"
                        to={`/Programs/${program.id}`}
                      >
                        Show Details
                      </Link>
                    </div>
                  </div>
                </div>

                <h3 className="text-left text-xl text-green font-bold font py-2">
                  {program.Name}
                </h3>
              </div>
            </div>
          ) : (
            ""
          );
        })}
      </div>
      <Link
        to={"/Programs"}
        className="bg-head hover:bg-green text-white font-bold mt-20 py-2 w-52 inline-block border-b-4 border-green hover:border-head rounded"
      >
        Veiw Programs Time &rarr;
      </Link>
    </div>
  );
}
