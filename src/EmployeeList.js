import React, { Component } from 'react'
import Employee from './Employee'

export default class EmployeeList extends Component {

    state = {
        employees: [
            { id: 1, name: "Jessica Younker", title: "Vet" },
            { id: 2, name: "Jordan Nelson", title: "Groomer" },
            { id: 3, name: "Zoe LeBlanc", title: "Vet" },
            { id: 4, name: "Blaise Roberts", title: "Receptionist" }
        ]
    }
    render() {
        return (
            <React.Fragment>
                <ul>
                    {
                        this.state.employees.map(employee => < Employee key={employee.id} employee={employee} />)
                    }
                </ul>
            </React.Fragment>
        )
    }


}