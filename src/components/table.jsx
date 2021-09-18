import React from "react";
import axios from "axios";
import ListComponent from "./list";
import Table from "react-bootstrap/Table";
import { paginate } from "./pagination";
import PaginationComponent from "./pagination";
import SearchBox from "./searchBox";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class TableComponent extends React.Component {
  state = {
    employees: [],
    departments: [],
    pageSize: 5,
    currentPage: 1,
    selectedDepartment: "",
    searchQuery: "",
    searchBy: "fullName",
  };

  async componentDidMount() {
    let { data: employees } = await axios.get(
      "https://people-of-the-company.herokuapp.com/employees"
    );
    let { data: departments } = await axios.get(
      "https://people-of-the-company.herokuapp.com/departments"
    );

    this.setState({ employees, departments });
    if (
      this.state.employees.length === 0 &&
      this.state.departments.length === 0
    )
      toast.error("No data to display");
  }

  handleDepartmentSelect = (department) => {
    this.setState({
      selectedDepartment: department,
      searchQuery: "",
      currentPage: 1,
    });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSearch = (query) => {
    this.setState({
      searchQuery: query,
      selectedDepartment: "",
      currentPage: 1,
    });
  };

  handleSearchBy = (searchBy) => {
    this.setState({
      searchBy,
    });
  };

  render() {
    let {
      employees: allEmployees,
      departments,
      selectedDepartment,
      currentPage,
      pageSize,
      searchQuery,
      searchBy,
    } = this.state;

    let filtered = allEmployees;
    if (searchQuery && searchBy)
      filtered = allEmployees.filter((m) => {
        return m[searchBy].toLowerCase().startsWith(searchQuery.toLowerCase());
      });

    if (selectedDepartment) {
      filtered = allEmployees.filter(
        (m) => m.department.name === selectedDepartment
      );
    }

    const employees = paginate(filtered, currentPage, pageSize);

    return (
      <Container>
        <ToastContainer />
        <Row>
          <Col md={4}>
            <ListComponent
              items={departments}
              selectedItem={selectedDepartment}
              onItemSelect={this.handleDepartmentSelect}
            />
          </Col>
          <Col md={8}>
            <SearchBox
              value={searchQuery}
              onChange={this.handleSearch}
              onSearchByChange={this.handleSearchBy}
            />
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Department</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => {
                  return (
                    <tr key={employee.id}>
                      <td>{employee.fullName}</td>
                      <td>{employee.email}</td>
                      <td>{employee.department.name}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            <PaginationComponent
              itemsCount={filtered.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TableComponent;
