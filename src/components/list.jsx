import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

function ListComponent(props) {
  let { items, onItemSelect, selectedItem } = props;
  return (
    <ListGroup>
      <ListGroup.Item
        active={selectedItem === "" ? "active" : false}
        onClick={() => {
          onItemSelect("");
        }}
      >
        All department
      </ListGroup.Item>
      {items.map((department) => {
        return (
          <ListGroup.Item
            active={selectedItem === department.name ? "active" : false}
            key={department.id}
            onClick={() => {
              onItemSelect(department.name);
            }}
          >
            {department.name}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}

export default ListComponent;
