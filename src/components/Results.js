import React, { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import styled from "styled-components";

const Loading = styled.h2`
  margin: 20vh auto;
`;

const Results = ({ pageNumber, setTotalCount, booksPerPage }) => {
  const [resultsPage, setResultsPage] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const url = "http://nyx.vima.ekt.gr:3000/api/books";

  useEffect(() => {
    setIsLoading(true);
    fetch(`${url}?page=${pageNumber}`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        page: pageNumber,
        itemsPerPage: booksPerPage,
        // filters: filters == "delete" ? [] : filters,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        setResultsPage(response.books);
        setTotalCount(response.count);
        setIsLoading(false);
        console.log("Fetch success", response.books, response.count);
      })
      .catch((error) => console.log("Fetch error", error));
  }, [pageNumber]);

  return (
    <>
      <ListGroup>
        {!isLoading &&
          resultsPage &&
          resultsPage.length > 0 &&
          resultsPage.map((item, i) => (
            <ListGroup.Item key={i}>
              {item.book_title} - {item.book_publication_year}
            </ListGroup.Item>
          ))}
        {isLoading && <Loading>Loading results</Loading>}
      </ListGroup>
    </>
  );
};

export default Results;