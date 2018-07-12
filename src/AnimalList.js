import React, { Component } from 'react'

export default class AnimalList extends Component {

    state = {
        animals: [
            { id: 1, name: "Bruce" },
            { id: 2, name: "Max" },
            { id: 3, name: "Sandy" },
            { id: 4, name: "Kitty" },
            { id: 5, name: "Little Bear" }
        ]
    }

render() {
    return (
        <React.Fragment>
            <ul>
                {
                    this.state.animals.map(animal => <li key={animal.id} >{animal.name}</li> )
                }
            </ul>
        </React.Fragment>
    )
}
}