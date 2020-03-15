import React from 'react'

export default function EventCard(props) {
    return (
        <div className='cardDiv'>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <p className='cardDate'>{props.event.start.date}</p>
                            <h5 className="card-title">{props.event.performance.length ? props.event.performance[0].displayName : 'Unknown Artist'}</h5>
                            <p>at</p>
                            <p className="card-text">{props.event.venue.displayName}</p>
                            <a className="btn btn-primary" target='_blank' href={props.event.uri}>More info</a>
                            <p className="distanceTag">{props.event.distance == null ? 'unknown' : 
                            props.event.distance.toString().split('').slice(0,4)} mi</p>
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