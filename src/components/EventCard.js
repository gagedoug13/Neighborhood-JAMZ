import React from 'react'

export default function EventCard(props) {
    return ( 
        <div className='cardDiv'>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                           {console.log(props.event)}
                            <p className='cardDate'>{new Date(props.event.start.date).toString().slice(0,10) + ', ' + new Date(props.event.start.date).toString().slice(11,15)}</p>
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



