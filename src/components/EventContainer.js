import React from 'react'
import EventCard from './EventCard'

export default function EventContainer(props) {

    return (
        <div className='eventContainerDiv'>
            {props.events ?
            props.events.map(event => {
                return (
                    event.map(x => {
                        return (
                            <div key={x.id}>
                                <EventCard event={x} /> 
                            </div>
                        )
                    })
                )
            }) : null
        }                    
        </div>
    )
}



