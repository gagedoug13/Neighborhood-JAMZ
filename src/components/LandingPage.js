import React from 'react'
import {Link} from 'react-router-dom'

export default function () {
    return (
        <div className='landingPageDiv'>
            <h1 className='welcomeInstructions'>Welcome to Local Show. You give us a location and a date and we'll give you a list of shows happening in your area</h1>
            <Link to='/main'>
                <button className='launchButton'>See Shows</button>
            </Link>
        </div>
    )
}
