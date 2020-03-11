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
            : (<img className='catPic' alt='no kitty' src='https://www.demilked.com/magazine/wp-content/uploads/2016/06/gif-animations-replace-loading-screen-3.gif'></img>) 
           }
        </div>
    )
}
