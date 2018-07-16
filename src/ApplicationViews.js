import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './AnimalList'
import LocationList from './LocationList'
import EmployeeList from './EmployeeList'
import Animal from './Animal';
import Login from './Login/Login'
import Employee from './Employee'
import Location from './Location'


export default class ApplicationViews extends Component {

    // Check if credentials are in local storage
    isAuthenticated = () => localStorage.getItem("credentials") !== null

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" component={LocationList}
                // render={props => {
                    // if (this.isAuthenticated()) {
                    //     return <LocationList />
                    // } else {
                    //     return <Login />
                    // }
                 />
                <Route path='/locations/:locationId' render={banana => {
                    return < Location location={banana.location.state.location} />
                }} />
                <Route exact path="/animals" render={props => {
                    // if (this.isAuthenticated()) {
                        return <AnimalList />
                    // } else {
                    //     return <Login />
                    // }
                }} />
                <Route path="/animals/:animalId" render={(props) => {
                    return <Animal animal={props.location.state.animal}>
                    {props.location.state.animal.name}
                    </Animal>
                }} />
                <Route exact path="/employees" render={props => {
                    if (this.isAuthenticated()) {
                        return <EmployeeList />
                    } else {
                        return <Login />
                    }
                }} />
                <Route path="/employees/:employeeId" render={(props) => {
                    return <Employee employee={props.location.state.employee}>
                    {props.location.state.employee.name}
                    </Employee>
                }} />
                <Route path="/login" component={Login} />
            </React.Fragment>
        )
    }
}