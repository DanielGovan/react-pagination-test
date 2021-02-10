import React, { useEffect, useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LinkContainer } from "react-router-bootstrap";

const ListFrame = styled.div`
  max-width: 98vw;
  overflow-x: auto;
`;

const BookPaging = ({
  pageNumber,
  booksPerPage,
  // setPageNumber,
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
      <LinkContainer to={`/${number}/`}>
        <Pagination.Item key={number} active={number === active}>
          {number}
        </Pagination.Item>
      </LinkContainer>
    );
  }

  return (
    <ListFrame>
      <Pagination>{items}</Pagination>
    </ListFrame>
  );
};

export default BookPaging;
