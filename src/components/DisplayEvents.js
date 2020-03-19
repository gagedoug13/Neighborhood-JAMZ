import React, { Component } from 'react'
import EventContainer from './EventContainer'

export default class DisplayEvents extends Component {
    constructor(props){
        super(props)
            this.state = {
                eventsByMilage: null
        }
        this.filterEventsByMilage = this.filterEventsByMilage.bind(this)
    }

    // this is trying to set state before it gets the data from the main component. need it to wait until the data is there to set state
    componentDidMount(){
        this.setState({
            eventsByMilage: this.props.totalEvents
        })
        console.log('did mount running')
    }

    filterEventsByMilage = (event) => {
        let userInput = event.target.value.slice(0,2)
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
        return this.setState({
            eventsByMilage: filteredEvents
        })
        // console.log(filteredEvents)
        // console.log(this.state.eventsByMilage)
        
    }

    render() {
        console.log(this.state.eventsByMilage)
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
              
                <EventContainer events={this.props.totalEvents} />
              
                
            </div>
        )
    }
}
