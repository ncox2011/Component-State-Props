import React, { Component } from 'react'
import Animal from './Animal'
import APIHandler from './APIHandler'

export default class AnimalList extends Component {

    state = {
        animals: []
    }
componentDidMount() {
   APIHandler.getAnimals()
    .then(animals => {
        this.setState({animals: animals})
        console.log(animals)
    })
}
    render() {
        return (
            <React.Fragment>
                    {
                        this.state.animals.map(animal => 
                        < Animal key={animal.id} animal={animal}>
                        {animal.name}
                        </Animal>
                        )
                    }
            </React.Fragment>
        )
    }
}