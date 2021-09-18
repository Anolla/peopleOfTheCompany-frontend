import React from "react";
import TableComponent from "./components/table";
import NavBarComponent from "./components/navBar";
import Footer from "./components/footer";
import "./app.css";

function App() {
  return (
    <React.Fragment>
      <NavBarComponent />
      <TableComponent />
      <Footer />
    </React.Fragment>
  );
}

export default App;
