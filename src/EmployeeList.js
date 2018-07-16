import React, { Component } from 'react'
import Employee from './Employee'
import APIHandler from './APIHandler';

export default class EmployeeList extends Component {

    state = {
        employees: []
    }

    componentDidMount () {
        APIHandler.getEmployees()
            .then(employees => {
            this.setState({employees: employees})
            console.log(employees)
        })
    }
    render() {
        return (
            <React.Fragment>
                    {
                        this.state.employees.map(employee => 
                        < Employee key={employee.id} employee={employee}>
                        {employee.name}
                        </ Employee>
                        )
                    }

            </React.Fragment>
        )
    }


}