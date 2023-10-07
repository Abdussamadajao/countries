import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination">
      <div className="pagination__content">
        <div className="pagination__item">
          {pageNumbers.map((number) => (
            <a
              key={number}
              onClick={() => paginate(number)}
              className="pagination__count"
            >
              {number}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pagination;
