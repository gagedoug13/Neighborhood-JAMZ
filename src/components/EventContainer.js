import React from 'react'
import EventCard from './EventCard'

export default function EventContainer(props) {


    return (
        <div className='eventContainerDiv'>
            {!props.date ?
            (<img className='catPic' src='https://images-na.ssl-images-amazon.com/images/I/71BoMD5mjNL._AC_SL1500_.jpg'></img>) : null}
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
