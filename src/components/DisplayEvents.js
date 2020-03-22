import React, { Component } from 'react'
import EventContainer from './EventContainer'
import NoResultsPage from './NoResultsPage'

export default class DisplayEvents extends Component {
    constructor(props){
        super(props)
            this.state = {
                eventsByMilage: null,
                areThereProps: false,
                originalEvents: null
        }
    }



    componentDidUpdate() {
        if(this.props.totalEvents !== this.state.originalEvents) {
            this.filterEventsByMilage()
        }
    }
    
    
    filterEventsByMilage = (event) => {
        if (this.state.areThereProps === true) {
            this.setState({
                areThereProps: false
            })
        }
        let userInput = 50
        if (event) {
            userInput = event.target.value.slice(0,2)
        }
        let totalEvents = this.props.totalEvents
        let filteredEvents = []
       
        for(let day of totalEvents) {
            let left = 0
            let right = day.events.length - 1
            while(left < right) {
                let middle = (left + Math.floor((right - left) / 2))
                if(day.events[middle].distance > userInput) {
                    right = middle
                } else {
                left = middle + 1
                }
            }
            filteredEvents.push(day.events.slice(0, left))
        }
        this.setState({
            eventsByMilage: filteredEvents,
            originalEvents: this.props.totalEvents
        })
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

        

        {this.state.eventsByMilage ?
        <EventContainer events={this.state.eventsByMilage} />
    : <NoResultsPage />}
              
              
                
            </div>
        )
    }
}
