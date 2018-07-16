import React from 'react'
import { Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"

export default props => {
    let location = {}

// Check if the data is in `props.animal`
if (props.hasOwnProperty("location")) {
    location = props.location

// If not, data will be in `props.location.state.animal`
} else {
    location = props.location.state.location
}
   return (
        <div className="card" style={{width: `18rem`}}>
            <div className="card-body">
                <h5 className="card-title">
                    {location.name}
                </h5>
                <p className="card-text">{location.title}</p>
                {
                    <Link className="card-link"
                    to={{
                        pathname: `/locations/${location.id}`,
                        state: { location: location }
                    }}>
                    Details
                </Link>
                }
            </div>
        </div>
    )
}