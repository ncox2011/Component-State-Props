import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'



export default props => {
    let animal = {}

// Check if the data is in `props.animal`
if (props.hasOwnProperty("animal")) {
    animal = props.animal

// If not, data will be in `props.location.state.animal`
} else {
    animal = props.location.state.animal
}
   return (
        <div className="card" style={{width: `18rem`}}>
            <div className="card-body">
                <h5 className="card-title">
                    {props.animal.name}
                </h5>
                <p className="card-text">{props.animal.breed}</p>
                {
                    <Link className="card-link"
                    to={{
                        pathname: `/animals/${animal.id}`,
                        state: { animal: animal }
                    }}>
                    Details
                </Link>
                }
            </div>
        </div>
    )
}