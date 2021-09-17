import React from "react";
import TableComponent from "./components/table";
import NavBarComponent from "./components/navBar";
// import "./app.css";

function App() {
  return (
    <React.Fragment>
      <NavBarComponent />
      <TableComponent />
    </React.Fragment>
  );
}

export default App;
