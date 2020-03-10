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
            // this.getMetroAndEvents = this.getMetroAndEvents.bind(this)
        }
    
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(position => this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        }))
    }

    getGeoFromAddress(event) {
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
                .then(response => this.setState({
                    events: response
                }))
            }
            
    }
    

    render() {
        return (
            <Router>
                <div className='main'>
                    <Switch>
                        <Route path='/main'>
                            <h3 className='findShowsTitle'>Find Shows Near Me.</h3>
                            <Address getGeoFromAddress={this.getGeoFromAddress} latitude={this.state.latitude} longitude={this.state.longitude}/>
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
