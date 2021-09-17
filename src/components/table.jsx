import React from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import ListComponent from "./list";

class TableComponent extends React.Component {
  state = {
    employees: [],
    departments: [],
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

  render() {
    let { employees, departments, selectedDepartment } = this.state;

    return (
      <React.Fragment>
        <ListComponent
          items={departments}
          onItemSelect={this.handleDepartmentSelect}
          selectedItem={selectedDepartment}
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
      </React.Fragment>
    );
  }
}

export default TableComponent;
