import React, { Component } from 'react'
import Address from './Address'
import Date from './Date'

export default class Main extends Component {

        constructor(props){
            super(props)
                this.state = {
                    latitude: null,
                    longitude: null,
                    date: null
            }
            this.getGeoFromAddress = this.getGeoFromAddress.bind(this)
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
        } 
    }

    clickHandler = (event) => {
        this.setState({
            date: event.target.value
        }) 
    }

    getMetroId = () => {
        if (this.state.date && this.state.latitude) {
            fetch(`/getMetro?location=${this.state.latitude},${this.state.longitude}`)
            .then(response => response.json())
            .then(console.log)
        } else (console.log('mmyellow'))
    }
    

    render() {
        console.log(this.state.date)
        return (
            <div className='main'>
                <h3 className='findShowsTitle'>Find Shows Near Me.</h3>
                <Address getGeoFromAddress={this.getGeoFromAddress} latitude={this.state.latitude} longitude={this.state.longitude}/>
                {this.state.latitude ? 
                
                <Date getMetroId={this.getMetroId} clickHandler={this.clickHandler}/> : null

                } 
            </div>
        )
    }
}
