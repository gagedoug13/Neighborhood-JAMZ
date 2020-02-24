import React, { Component } from 'react'
import Address from './Address'
import Date from './Date'

export default class Main extends Component {

    
        state = {
            latitude: null,
            longitude: null
        }
    
    componentDidMount() {
        console.log('hello')
        navigator.geolocation.getCurrentPosition(position => this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        }))
        console.log(this.state)
    }

    
    
    


    render() {
        console.log(this.state)
        return (
            <div className='main'>
                <h3 className='findShowsTitle'>Find Shows Near Me.</h3>
                <Address getLatLong={this.getLatLong} />
                {this.state.latitude ? 
                
                <Date /> : null
            }
                
            </div>
        )
    }
}
