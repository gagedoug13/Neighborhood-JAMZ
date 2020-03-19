import React from 'react'
import EventCard from './EventCard'
import NoResultsPage from './NoResultsPage'

export default function EventContainer(props) {


    return (
        <div className='eventContainerDiv'>
           {props.events ?
               
                props.events.map(event => {
                    return (
                        event.events.map(x => {
                            return (
                                <div key={x.id}>
                                    <EventCard event={x} /> 
                                </div>
                            )
                        })
                    )
                })
            : <NoResultsPage />
           }
        </div>
    )
}



