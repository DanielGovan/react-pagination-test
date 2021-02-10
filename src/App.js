import React, { useEffect, useState } from "react";
import Results from "./components/Results";
import BookPaging from "./components/BookPaging";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

import "./App.scss";

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [totalCount, setTotalCount] = useState(1);
  const booksPerPage = 40;

  // let { page } = useParams();

  // useEffect(() => {
  //   setPageNumber(page);
  // }, [page]);

  return (
    <Router>
      {/* <Route path="/{page}/" component={Component} /> */}
      <div className="App">
        <h1>Page {pageNumber}</h1>
        <BookPaging
          pageNumber={pageNumber}
          setPageNumber={(e) => setPageNumber(e)}
          totalCount={totalCount}
          booksPerPage={booksPerPage}
        />
        <Results
          pageNumber={pageNumber}
          setTotalCount={setTotalCount}
          booksPerPage={booksPerPage}
        />
      </div>
    </Router>
  );
}

export default App;
