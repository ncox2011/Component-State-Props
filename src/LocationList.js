import React, { Component } from 'react'
import Location from './Location'
import APIHandler from './APIHandler';


export default class LocationList extends Component {

    state = {
        locations: []
    }

    componentDidMount () {
        APIHandler.getLocations()
        .then(locations => {
            this.setState({locations: locations})
        })
    }

    render() {
        return (
            <React.Fragment>
                <ul>
                    {
                        this.state.locations.map(location => < Location key={location.id} location={location} />)
                    }
                </ul>
            </React.Fragment>
        )
    }
}