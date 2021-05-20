import React from 'react'
import { Link } from 'react-router-dom'

export default function Date({ getMetroAndEvents, clickHandler, date, lat }) {
    
    return (
        <div className='dateDiv'>
            <form >
                <p className='dateMessage'>Please select a day.</p>
                <input className='dateInputBar'
                        id='date'
                       name='dateInput' 
                       onChange={clickHandler} 
                       type='date'/>
                <Link to='/events'>
                {lat && date ?
                <button onClick={getMetroAndEvents}
                        className='dateButton'
                        type='submit'
                        name='addressButton'
                        >GO</button>
                        : null}
                </Link>
                
            </form>
        </div>
    )
}
