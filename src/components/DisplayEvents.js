import React, { Component } from 'react'
import EventContainer from './EventContainer'

export default class DisplayEvents extends Component {
    constructor(props){
        super(props)
            this.state = {
                eventsByMilage: []
        }
    }

    filterEventsByMilage = () => {
        // preventDefault()
        let totalEvents = this.props.events
        console.log(totalEvents)
        let left = 0
        let right = totalEvents.events.length
        
        // for (let i=0; left < right; i++) {

        // }
        
    }

    render() {
        return (
            <div>
                {this.props.totalEvents ?
                <div className='filterForm'>
                <label className='filterLabel' >See concerts within:</label>
        
                <select id="filter" onChange={this.filterEventsByMilage}>
                <option placeholder="1 mile">1 mile</option>
                <option placeholder="5 miles">5 miles</option>
                <option placeholder="10 miles">10 miles</option>
                <option placeholder="25 miles">25 miles</option>
                <option placeholder="50 miles">50 miles</option>
                </select>
            </div>
            
            : <h1 className='gettingEvents'>getting events...</h1>
        }


                <EventContainer events={this.props.totalEvents}/>
            </div>
        )
    }
}
