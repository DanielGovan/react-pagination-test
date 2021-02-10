import React, { useEffect, useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import styled from "styled-components";

const ListFrame = styled.div`
  max-width: 98vw;
  overflow-x: auto;
`;

const BookPaging = ({
  pageNumber,
  booksPerPage,
  setPageNumber,
  totalCount,
}) => {
  useEffect(() => {
    console.log(pageNumber);
  }, [pageNumber]);

  let total = totalCount / booksPerPage + 1;
  let active = pageNumber;
  let items = [];
  for (let number = 1; number <= total; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => setPageNumber(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <ListFrame>
      <Pagination>{items}</Pagination>
    </ListFrame>
  );
};

export default BookPaging;
