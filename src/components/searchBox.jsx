import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

const SearchBox = (props) => {
  let { value, onChange, onSearchByChange } = props;
  return (
    <React.Fragment>
      <InputGroup className="mb-3">
        <DropdownButton
          variant="outline-secondary"
          title="Search by"
          id="input-group-dropdown-1"
          placeholder="Search by name or email"
        >
          <Dropdown.Item
            onClick={(e) => onSearchByChange(e.currentTarget.id)}
            id="fullName"
          >
            Name
          </Dropdown.Item>
          <Dropdown.Item
            onClick={(e) => onSearchByChange(e.currentTarget.id)}
            id="email"
          >
            Email
          </Dropdown.Item>
        </DropdownButton>
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
