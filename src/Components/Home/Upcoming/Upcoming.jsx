import React from "react";
import Programs from "../../../Services/Programs";
import "./Upcoming.css";
export default function Upcoming() {
  return (
    <div className="mt-12 container">
      <h2 className="font-bold text-head text-4xl mb-6 uppercase">
        Upcoming Programs
      </h2>
      <hr className="mb-20 w-20 mx-auto bg-green hover:w-96 h-1" />
      <div className="grid grid-cols-4 gap-4">
        {Programs.map((program) => {
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
                      <a className="button py-3 underline hover:bg-green bg-head text-white text-md">
                        Show Details
                      </a>
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
      <button class="bg-head hover:bg-green text-white font-bold mt-20 py-2 px-4 border-b-4 border-green hover:border-head rounded">
        Veiw Programs Time &rarr;
      </button>
    </div>
  );
}
