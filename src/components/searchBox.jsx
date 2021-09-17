import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

const SearchBox = (props) => {
  let { value, onChange } = props;
  return (
    <React.Fragment>
      <InputGroup className="mb-3">
        <FormControl
          type="text"
          name="query"
          value={value}
          onChange={(e) => onChange(e.currentTarget.value)}
          aria-label="Text input with dropdown button"
        />
      </InputGroup>
    </React.Fragment>
  );
};

export default SearchBox;
