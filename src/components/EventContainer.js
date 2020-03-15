import React from 'react'
import EventCard from './EventCard'
import NoResultsPage from './NoResultsPage'

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
            : <NoResultsPage />
           }
        </div>
    )
}
