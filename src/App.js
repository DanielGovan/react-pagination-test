import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import BookPaging from "./components/BookPaging";
import Results from "./components/Results";
import SearchBox from "./components/SearchBox";

import "./App.scss";

const App = ({ pageNumber, setPageNumber }) => {
  const [totalCount, setTotalCount] = useState(1);
  const [filters, setFilters] = useState();
  const booksPerPage = 40;

  const handleSearchBoxChange = (e) => setFilters(e.target.value);

  return (
    <Router>
      <div className="App">
        <h1>Search for books!</h1>
        <SearchBox handleSearchBoxChange={handleSearchBoxChange} />
        <BookPaging
          pageNumber={pageNumber}
          setPageNumber={(e) => setPageNumber(e)}
          totalCount={totalCount}
          booksPerPage={booksPerPage}
        />
        <Switch>
          <Route path="/:id">
            <Results
              filters={filters}
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
