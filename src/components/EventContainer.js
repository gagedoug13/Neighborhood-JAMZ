import React from 'react'
import EventCard from './EventCard'
import NoResultsPage from './NoResultsPage'

export default function EventContainer(props) {


    return (
        <div className='eventContainerDiv'>
        {console.log(props.events, 'from card container.')}
         
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



