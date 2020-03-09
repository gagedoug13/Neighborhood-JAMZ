import React from 'react'

export default function EventCard(props) {
    return (
        <div className='cardDiv'>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{props.event.performance[0].displayName}</h5>
                            <p>at</p>
                            <p className="card-text">{props.event.venue.displayName}</p>
                            <a className="btn btn-primary">Starts at {props.event.start.time}.</a>
                            <p className="distanceTag">0.3 mi</p>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}



{/* <div className='cardDiv'>
            <h2>{props.event.performance[0].displayName}</h2>
            <h1>{props.event.venue.displayName}</h1>
            <p>{props.event.start.time}</p>
        </div> */}