import React, { Component } from 'react'
import EventContainer from './EventContainer'

export default class DisplayEvents extends Component {
    constructor(props){
        super(props)
            this.state = {
                eventsByMilage: null
        }
        // this.componentDidMount = this.componentDidMount.bind(this)
    }


    componentDidMount() {
        console.log(this.props.totalEvents)
        this.setState({
            eventsByMilage: this.props.totalEvents
        })
        this.filterEventsByMilage = this.filterEventsByMilage.bind(this)
    }

    filterEventsByMilage = (event) => {
        let userInput = event.target.value.slice(0,2)
        let totalEvents = this.props.totalEvents
        let filteredEvents = []
       
        for(let day of totalEvents) {
            
            let left = 0
            let right = day.events.length - 1
        //    console.log(day)

            while(left < right) {
                let middle = (left + Math.floor((right - left) / 2))
            //    console.log(day.events[middle].distance)
            //    console.log(day.events.length, 'length')
                if(day.events[middle].distance > userInput) {
                    right = middle
                } else {
                left = middle + 1
                }

            }
            filteredEvents.push(day.events.slice(0, left))
        }
        // console.log(filteredEvents)
        this.setState({
            eventsByMilage: filteredEvents
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
                
                
                <EventContainer events={this.state.eventsByMilage}/>
            </div>
        )
    }
}
