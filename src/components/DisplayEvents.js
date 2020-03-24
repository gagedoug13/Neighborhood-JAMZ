import React, { Component } from 'react'
import EventContainer from './EventContainer'
import NoResultsPage from './NoResultsPage'

export default class DisplayEvents extends Component {
    constructor(props){
        super(props)
            this.state = {
                eventsByMilage: null,
                originalEvents: null
        }
    }



    componentDidUpdate() {
        if (this.props.totalEvents !== this.state.originalEvents) {
            this.filterEventsByMilage()
        }
    }
    

    filterEventsByMilage = (event) => {
        let totalEvents = this.props.totalEvents
        let filteredEvents = []

        console.log(this.props.totalEvents, 'the events as they come into the function')
        let userInput = 50
        if (event) {
            userInput = event.target.value.slice(0,2)
        }
       
        for (let day of totalEvents) {
            let left = 0
            let right = day.events.length 
            while (left < right) {
                let middle = (left + Math.floor((right - left) / 2))
                if (day.events[middle].distance > userInput) {
                    right = middle
                } else {
                left = middle + 1
                }
            }
            console.log(day.events, 'in the function')
            filteredEvents.push(day.events.slice(0, left))
        }
    
        this.setState({
            eventsByMilage: filteredEvents,
            originalEvents: this.props.totalEvents
        })
    }

    render() {
        // console.log(this.props.totalEvents)
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

        

        {this.state.eventsByMilage ?
        <EventContainer events={this.state.eventsByMilage} />
    : <NoResultsPage />}
              
              
                
            </div>
        )
    }
}
