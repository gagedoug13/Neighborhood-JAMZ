import React from 'react'
import EventCard from './EventCard'

export default function EventContainer(props) {


    return (
        <div className='eventContainerDiv'>
           {
            props.events ?

                props.events.map(event => {
                return <div key={event.id}>
                  <EventCard event={event} /> 
                </div>
                })
            : null
           }
        </div>
    )
}
