import React, { Component } from 'react'

const APIHandler = Object.create({}, {
   getAnimals: {
    value: () => {
        return fetch("http://localhost:5002/animals")
        .then(e => e.json())
    }
},
    getEmployees: {
        value: () => {
            return fetch("http://localhost:5002/employees")
            .then(e => e.json())
        }
    },
    getLocations: {
        value: () => {
            return fetch("http://localhost:5002/locations")
            .then(e => e.json())
        }
    }
}) 


export default APIHandler;