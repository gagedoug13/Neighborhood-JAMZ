import React, { Component } from 'react'
import Address from './Address'
import Date from './Date'

export default class Main extends Component {

        constructor(props){
            super(props)
                this.state = {
                    latitude: null,
                    longitude: null
            }
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
        fetch(`/searchAddress?q=${addressParameter}`)
        .then(response => response.json())
        .then(data => this.setState({
            latitude: data.lat,
            longitude: data.lng
        }))
    }
    


    render() {
        console.log(this.state)
        return (
            <div className='main'>
                <h3 className='findShowsTitle'>Find Shows Near Me.</h3>
                <Address getGeoFromAddress={this.getGeoFromAddress} />
                {this.state.latitude ? 
                
                <Date /> : null
            }
                
            </div>
        )
    }
}
