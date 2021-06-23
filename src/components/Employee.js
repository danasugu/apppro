import { render } from '@testing-library/react';
import React, {Component} from 'react';

class Employee extends Component{
  render(){
    const employees = this.props.employees;
    const employeeList = employees.map(employee=>{
        return(
          <div>
            <p>Name: {employee.name}</p>
            <p>Email: {employee.email}</p>
            <p>Phone: {employee.phone}</p>
          </div>
        )
    })
    return(
      <div>
        <h1>Employee</h1>
      </div>
    )
  }
}

export default Employee;