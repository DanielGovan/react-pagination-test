import React, { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Loading = styled.h2`
  margin: 20vh auto;
`;

const Results = ({ setTotalCount, booksPerPage, filters }) => {
  const [resultsPage, setResultsPage] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);

  let { id } = useParams();

  useEffect(() => {
    setPageNumber(id);
  }, [id]);

  const url = "http://nyx.vima.ekt.gr:3000/api/books";

  const success = (response) => {
    setResultsPage(response.books);
    setTotalCount(response.count);
    setIsLoading(false);
    console.log("Fetch success", response.books, response.count);
  };

  const fetchBooks = (pageNumber = 1, filters = []) => {
    return fetch(url, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        page: pageNumber,
        itemsPerPage: booksPerPage,
        filters: filters,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        success(response);
      })
      .catch((error) => console.log("Fetch error", error));
  };

  useEffect(() => {
    console.log("Page attempt", pageNumber);
    setIsLoading(true);
    fetchBooks(pageNumber, []);
  }, [pageNumber]);

  useEffect(() => {
    //Turn words into array
    console.log("Search attempt", filters);
    setIsLoading(true);
    !filters
      ? fetchBooks(pageNumber, [])
      : fetchBooks(1, [{ type: "all", values: [filters] }]);
  }, [filters]);

  return (
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
  );
};

export default Results;
