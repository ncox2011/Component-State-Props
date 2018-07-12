import React, { Component } from "react"
import EmployeeList from "./EmployeeList"
import LocationList from "./LocationList"
import AnimalList from "./AnimalList"
import OwnerList from "./OwnerList"


export default class Kennel extends Component {

    state = {
        employees: [
            { id: 1, name: "Jessica Younker" },
            { id: 2, name: "Jordan Nelson" },
            { id: 3, name: "Zoe LeBlanc" },
            { id: 4, name: "Blaise Roberts" }
        ],
        locations: [
            { id: 1, name: "Nashville North" },
            { id: 2, name: "Nashville South" }
        ],
        animals: [
            { id: 1, name: "Bruce"},
            { id: 2, name: "Max"},
            { id: 3, name: "Sandy"},
            { id: 4, name: "Kitty"},
            { id: 5, name: "Little Bear"}
        ],
        owners: [
            { id: 1, name: "Erdin"},
            { id: 2, name: "Natasha"},
            { id: 3, name: "Grease"},
            { id: 4, name: "Jenny"},
            { id: 5, name: "Deborah"}
        ]
    }

    render() {
        return (
            <React.Fragment>
                <LocationList locations={this.state.locations} />
                <EmployeeList employees={this.state.employees} />
                <AnimalList animals={this.state.animals} />
                <OwnerList owners={this.state.owners} />
            </React.Fragment>
        );
    }
}