import React, { Component } from 'react'
import Address from './Address'
import localShow from '../localShow.png'
import Date from './Date'

export default class Main extends Component {

    state = {
        userAddress: null,
        localEvents: []
    }

    

    updateUserAddress = (event) => {
        this.setState({
            userAddress: event.target.value
        })
    } 

    render() { 
        return (
            <div>
                <img className='logo' alt ='logo didnt make it' src={localShow}></img>
                <h3 className='findShowsTitle'>Find Shows Near Me.</h3>
                <Address updateUserAddress={this.setState} userAddress={this.state.userAddress}/>

                {this.state.userAddress
                ? 
               <Date />  : null }
            </div>
        )
    }
}
