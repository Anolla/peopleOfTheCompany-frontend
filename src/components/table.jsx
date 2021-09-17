import React from "react";
import axios from "axios";
import ListComponent from "./list";
import Table from "react-bootstrap/Table";
import { paginate } from "./pagination";
import PaginationComponent from "./pagination";

class TableComponent extends React.Component {
  state = {
    employees: [],
    departments: [],
    pageSize: 5,
    currentPage: 1,
    selectedDepartment: "",
  };

  async componentDidMount() {
    let { data: employees } = await axios.get(
      "https://people-of-the-company.herokuapp.com/employees"
    );
    let { data: departments } = await axios.get(
      "https://people-of-the-company.herokuapp.com/departments"
    );

    this.setState({ employees, departments });
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

  render() {
    let {
      employees: allEmployees,
      departments,
      selectedDepartment,
      currentPage,
      pageSize,
    } = this.state;

    let filtered = allEmployees;
    if (selectedDepartment) {
      filtered = allEmployees.filter(
        (m) => m.department.name === selectedDepartment
      );
    }

    const employees = paginate(filtered, currentPage, pageSize);

    return (
      <React.Fragment>
        <ListComponent
          items={departments}
          selectedItem={selectedDepartment}
          onItemSelect={this.handleDepartmentSelect}
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
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default TableComponent;
