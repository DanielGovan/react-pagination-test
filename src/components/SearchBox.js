import React from "react";
import Form from "react-bootstrap/Form";

const SearchBox = ({ handleSearchBoxChange }) => {
  return (
    <Form>
      <Form.Control
        type="input"
        placeholder="Enter search terms"
        onChange={handleSearchBoxChange}
      />
    </Form>
  );
};

export default SearchBox;
