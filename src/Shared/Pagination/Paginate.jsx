import "./Paginate.css";
import React, { useState, useEffect, Fragment, useMemo } from "react";
const LEFT_PAGE = "LEFT";
const RIGHT_PAGE = "RIGHT";

const range = (from, to, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

const Paginate = (props) => {
  const {
    totalRecords,
    pageLimit,
    pageNeighbours,
    onPageChanged,
    currentPage,
  } = props;
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    setTotalPages(Math.ceil(totalRecords / pageLimit));
  }, [currentPage]);

  const fetchPageNumbers = () => {
    const totalNumbers = pageNeighbours * 1 + 1;
    const totalBlocks = totalNumbers;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbours);
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);

      let pages = range(startPage, endPage);

      const hasLeftSpill = startPage > 2;
      const hasRightSpill = totalPages - endPage > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        // handle: (1) < {5 6} [7] {8 9} (10)
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = range(startPage - spillOffset, startPage - 1);
          pages = [LEFT_PAGE, ...extraPages, ...pages];
          break;
        }
        // handle: (1) < {4 5} [6] {7 8} > (10)
        case hasLeftSpill && hasRightSpill:
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
          break;
        }
      }
      return [1, ...pages, totalPages];
    }
    return range(1, totalPages);
  };

  const pages = fetchPageNumbers() || [];
  return (
    <div aria-label="Page navigation" className="flex justify-center pt-10">
      {pages.map((page, index) => {
        if (page === LEFT_PAGE)
          return (
            <ul disabled={currentPage <= 0} className="mr-5">
              <a
                onClick={(e) => onPageChanged(e, currentPage - 1)}
                aria-label="Previous"
                previous
              >
                &laquo;
              </a>
            </ul>
          );

        if (page === RIGHT_PAGE)
          return (
            <ul disabled={currentPage >= totalPages - 1} className="mr-5">
              <a
                onClick={(e) => onPageChanged(e, currentPage + 1)}
                aria-label="Next"
                next
              >
                &raquo;
              </a>
            </ul>
          );

        return (
          <ul active={currentPage === index} key={index} className="mx-5">
            <li
              onClick={(e) => onPageChanged(e, page)}
              className={`${
                currentPage === page ? "pageactive" : null
              } px-2 rounded-full cursor-pointer`}
            >
              {page}
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default Paginate;
