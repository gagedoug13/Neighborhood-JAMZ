import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Address from './Address'
import Date from './Date'
import EventContainer from './EventContainer'

export default class Main extends Component {

        constructor(props){
            super(props)
                this.state = {
                    latitude: null,
                    longitude: null,
                    date: null,
                    events: null,
            }
            this.getGeoFromAddress = this.getGeoFromAddress.bind(this)
            this.getGeoFromGeoButton = this.getGeoFromGeoButton.bind(this)
        }

    getGeoFromGeoButton() {
        navigator.geolocation.getCurrentPosition(position => this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        }))
    }

    getGeoFromAddress(event) {
        let message = document.querySelector('.addressMessage')
        message.innerHTML = 'Getting results...'
        event.preventDefault()
        const addressParameter = event.target.searchBar.value
        if (addressParameter.length > 0) {
            fetch(`/searchAddress?q=${addressParameter}`)
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                } else {
                    this.setState({
                        latitude: data.lat,
                        longitude: data.lng
                    })
                    message.innerHTML = ''
                }
            })
        } else {
            alert('Please enter an address.')
        }
    }

    clickHandler = (event) => {
        this.setState({
            date: event.target.value
        }) 
    }

    getMetroAndEvents = () => {
            if (!this.state.date && this.state.latitude) {
                alert('Please choose a location and a date.')
            } else {
                fetch(`/getMetroAndEvents?location=${this.state.latitude},${this.state.longitude}&date=${this.state.date}`)
                .then(response => response.json())
                .then(data => {
                    if (data.error) {
                        alert(data.error)
                    } else {
                        let daysArray = this.breakUpByDay(data)
                        this.sortEachDay(daysArray)
                        console.log(daysArray)
                        this.setState({
                            events: daysArray
                        })
                      }
                    }
                )}
    }


    // The first function to breaking the events up by day (sorted days) and then sorting the events on that day by closest distance to me.
    // events is coming as 50 event objects that are sorted by date closest to the one given by the user.
    // when this function runs, it will return a new array of objects where each object holds all the events for that day
    // example: [{}, {}, {}, {}] monday, tuesday, wednesday, thurs
    // these new objects are given a new key 'date': '2020/3/15' and a key 'events': [{}, {}, {}, {}, {}, {}, {}]
    breakUpByDay = (events) => {
        let days = []
        let left = 0
        let right = 1
        for (let item of events) {
            item.distance = this.distance(this.state.latitude, this.state.longitude, item.venue.lat, item.venue.lng, 'N')
            if (right >= events.length) {
                let day = {}
                day['date'] = events[left].start.date
                day['events'] = events.slice(left, right)
                days.push(day)
            } else if (events[left].start.date !== events[right].start.date) {
                let day = {}
                day['date'] = events[left].start.date
                day['events'] = events.slice(left, right)
                left = right
                right = right + 1
                days.push(day)
            } else {
                right = right + 1
            }
        }
        return days
    }

    // now that we transformed the data so it's easier to deal with, I can sort each day of events by closest distance to me. 
    sortEachDay = (daysArray) => {
        for (let day of daysArray) {
            day.events = day.events.sort((a, b) => {
                if (a.distance === null) {
                    return 1
                } else if (b.distance === null) {
                    return -1
                }
                return a.distance > b.distance ? 1 : -1
            })
        }
    }

    distance = (lat1, lon1, lat2, lon2, unit) => {
        if ((lat1 === lat2) && (lon1 === lon2)) {
            return 0;
        } else if (lat2 == null) {
            return null
        } else {
            var radlat1 = Math.PI * lat1/180;
            var radlat2 = Math.PI * lat2/180;
            var theta = lon1-lon2;
            var radtheta = Math.PI * theta/180;
            var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            if (dist > 1) {
                dist = 1;
            }
            dist = Math.acos(dist);
            dist = dist * 180/Math.PI;
            dist = dist * 60 * 1.1515;
            if (unit==="K") { dist = dist * 1.609344 }
            if (unit==="N") { dist = dist * 0.8684 }
            return dist;
        }
    }

    

    render() {
        return (
            <Router>
                <div className='main'>
                    <Switch>
                        <Route path='/main'>
                            <h3 className='findShowsTitle'>Find Shows Near Me.</h3>
                            <Address getGeoFromAddress={this.getGeoFromAddress}
                                    latitude={this.state.latitude} 
                                    longitude={this.state.longitude}
                                    getGeoFromGeoButton={this.getGeoFromGeoButton}/>
                            {this.state.latitude ?
                            <Date getMetroAndEvents={this.getMetroAndEvents} clickHandler={this.clickHandler}/>
                            : null}
                        </Route>

                        <Route path='/events' render={(props) => (<EventContainer {...props} date={this.state.date} events={this.state.events} />)}/>
                    </Switch>   
                </div>
            </Router>
        )
    }
}
