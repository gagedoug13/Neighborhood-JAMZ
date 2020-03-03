import React from 'react'

export default function EventCard(props) {
    return (
        <div className='cardDiv'>
            <h2>{props.event.performance[0].displayName}</h2>
            <h1>{props.event.venue.displayName}</h1>
            <p>{props.event.start.time}</p>
        </div>
    )
}
