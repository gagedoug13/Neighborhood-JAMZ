import React from 'react'
import {Link} from 'react-router-dom'

export default function Date(props) {

    return (
        <div className='dateDiv'>
            <form >
                <input name='dateInput' onChange={props.clickHandler} type='date'/>
                <Link to='/events'>
                
                <button onClick={props.getMetroAndEvents} type='submit' name='addressButton'>GO</button>
                </Link>
            </form>
        </div>
    )
}
