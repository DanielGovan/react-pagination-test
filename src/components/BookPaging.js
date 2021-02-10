import React, { useEffect } from "react";
import Pagination from "react-bootstrap/Pagination";
import styled from "styled-components";
import { LinkContainer } from "react-router-bootstrap";

const ListFrame = styled.div`
  max-width: 98vw;
  overflow-x: auto;
`;

const BookPaging = ({ pageNumber, booksPerPage, totalCount }) => {
  useEffect(() => {
    console.log(pageNumber);
  }, [pageNumber]);

  let totalBooks = totalCount / booksPerPage + 1;
  let active = pageNumber;
  let items = [];
  for (let number = 1; number <= totalBooks; number++) {
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
