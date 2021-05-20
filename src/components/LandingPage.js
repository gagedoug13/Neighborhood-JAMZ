import React from 'react'
import { Link } from 'react-router-dom'

export default function () {
    return (
        <div className='landingPageDiv'>
            <h1 className='welcomeInstructions'>You give us a <span className='welcomeLocation'>location</span> and a <span className='welcomeDate'>date</span></h1>
            <h2 className='secondWelcomeInstruction'>We'll give you a list of concerts near <span className='welcomeYou'>you</span>.</h2>
            <Link to='/main'>
                <button className='launchButton'>See Shows</button>
            </Link>
        </div>
    )
}
