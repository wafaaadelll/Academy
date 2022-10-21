import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import Program from "../../Services/Program";
import Paginate from "../../Shared/Pagination/Paginate";
import "./Paging.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Programs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  let NUM_OF_RECORDS = Program.length;
  let LIMIT = 6;

  const onPageChanged = useCallback(
    (event, page) => {
      event.preventDefault();
      setCurrentPage(page);
    },
    [setCurrentPage]
  );
  const currentData = Program.slice(
    (currentPage - 1) * LIMIT,
    (currentPage - 1) * LIMIT + LIMIT
  );
  AOS.init();
  return (
    <main role="main" className="lg:pt-24 pt-12">
      <div className="bg-head py-4 mb-10">
        <h1 className="text-white font text-5xl font-bold">Our Programs</h1>
      </div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-4 container">
        {currentData.map((items) => {
          return (
            <div
              className="md:w-80 w-full rounded-lg shadow lg:max-w-sm mx-auto hover:shadow-xl"
              key={items.id}
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <img
                className="object-cover md:w-80 mx-auto h-80 rounded"
                src={items.img}
                alt="image"
              />
              <div className="p-4">
                <h4 className="text-md mb-6 font-semibold text-head">
                  {items.Name}
                </h4>
                <Link
                  to={`/Programs/${items.id}`}
                  className="py-2 veiw text-sm text-white bg-head rounded shadow flex items-center justify-center mx-auto "
                >
                  Veiw Details
                </Link>
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
    </main>
  );
};
export default Programs;
