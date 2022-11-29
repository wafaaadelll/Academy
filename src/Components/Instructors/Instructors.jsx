import React, { useCallback, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Instructor from "../../Services/Instructor";
import Paginate from "../../Shared/Pagination/Paginate";

export default function Instructors() {
  const [currentPage, setCurrentPage] = useState(1);
  let NUM_OF_RECORDS = Instructor.length;
  let LIMIT = 6;

  const onPageChanged = useCallback(
    (event, page) => {
      event.preventDefault();
      setCurrentPage(page);
    },
    [setCurrentPage]
  );
  const currentData = Instructor.slice(
    (currentPage - 1) * LIMIT,
    (currentPage - 1) * LIMIT + LIMIT
  );
  AOS.init();

  return (
    <div className="lg:pt-24 pt-12">
      <div className="bg-head py-4 mb-10">
        <h1 className="text-white font text-5xl font-bold">Our Instructors</h1>
      </div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-4 container">
        {currentData.map((instructor) => {
          return (
            <div
              className="relative grid lg:grid-cols-2 items-center"
              key={instructor.id}
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="w-44">
                <Link to={`/Aboutinstructors/${instructor.id}`}>
                  <img
                    src={instructor.img}
                    alt={instructor.Name}
                    className="w-full h-44"
                  />
                </Link>
              </div>

              <div className="pl-1">
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
          );
        })}
      </div>
      <div className="pagination-wrapper">
        <Paginate
          totalRecords={NUM_OF_RECORDS}
          pageLimit={LIMIT}
          pageNeighbours={2}
          onPageChanged={onPageChanged}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}
