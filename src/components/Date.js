import React from 'react'

export default function Date(props) {

    return (
        <div className='dateDiv'>
            <form onSubmit={props.getMetroAndEvents}>
                <input name='dateInput' onChange={props.clickHandler} type='date'/>
                <button type='submit' name='addressButton'>GO</button>
            </form>
        </div>
    )
}
