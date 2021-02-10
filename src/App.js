import React, { useState } from "react";
import Results from "./components/Results";
import BookPaging from "./components/BookPaging";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";

const App = ({ pageNumber, setPageNumber }) => {
  const [totalCount, setTotalCount] = useState(1);
  const booksPerPage = 40;

  return (
    <Router>
      <div className="App">
        <h1>Page {pageNumber}</h1>
        <BookPaging
          pageNumber={pageNumber}
          setPageNumber={(e) => setPageNumber(e)}
          totalCount={totalCount}
          booksPerPage={booksPerPage}
        />
        <Switch>
          <Route path="/:id">
            <Results
              setTotalCount={setTotalCount}
              booksPerPage={booksPerPage}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
