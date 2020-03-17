import React from 'react'
import EventCard from './EventCard'
import NoResultsPage from './NoResultsPage'

export default function EventContainer(props) {


    return (
        <div className='eventContainerDiv'>
            {props.events ?
            <div className='filterDiv'>
                <div className='filterForm'>
                    <label className='filterLabel' >See concerts within:</label>
            
                    <select id="filter">
                    <option placeholder="1 mile">1 mile</option>
                    <option placeholder="5 miles">5 miles</option>
                    <option placeholder="10 miles">10 miles</option>
                    <option placeholder="25 miles">25 miles</option>
                    <option placeholder="50 miles">50 miles</option>
                    </select>
                </div>
            </div>
                    : null }
           
           
           
           
           
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



