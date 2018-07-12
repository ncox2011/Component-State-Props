import React, { Component } from 'react'

export default class OwnerList extends Component {
    
    state = {
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
                <ul>
                    {
                        this.state.owners.map(owner => <li key={owner.id} >{owner.name}</li>)
                    }
                </ul>
            </React.Fragment>
        )
    }
}