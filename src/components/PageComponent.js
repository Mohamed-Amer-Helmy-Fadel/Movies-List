import React from "react";
import ReactPaginate from "react-paginate";
export const PageComponent = ({getAllPages,pagesCount}) => {
  const handlePageClick = (data) => {
    getAllPages(data.selected+1)
  };


  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="التالي"
      onPageChange={handlePageClick}
      pageRangeDisplayed={2}       //first two pages
      marginPagesDisplayed={2}     // last two pages
      pageCount={pagesCount}
      previousLabel="السابف"
      containerClassName={"pagination justify-content-center"}   // this used to make classes from css or bootstrap
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}     //for numbers of pagenation to take style of rectangle button

      previousClassName={"page-item"}      //for making it like button
      previousLinkClassName={"page-link"}     // for making it linkable
      nextClassName={"page-item"}
      nextLinkClassName={"page-link"}
      breakClassName={"page-itm"}
      breakLinkClassName={"page-link"}
      activeClassName="active"
      />
  );
};
export default PageComponent;
