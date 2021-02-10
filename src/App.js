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

const App = ({ pageNumber, setPageNumber }) => {
  const [] = useState(1);
  const [totalCount, setTotalCount] = useState(1);
  const booksPerPage = 40;

  return (
    <div className="App">
      <Router>
        <h1>Page {pageNumber}</h1>
        <BookPaging
          pageNumber={pageNumber}
          setPageNumber={(e) => setPageNumber(e)}
          totalCount={totalCount}
          booksPerPage={booksPerPage}
        />
        <Switch>
          <Route path="/:page">
            <Results
              setTotalCount={setTotalCount}
              booksPerPage={booksPerPage}
            />
          </Route>
        </Switch>
      </Router>
      <Results />
    </div>
  );
};

export default App;
