import React from 'react'

export default function Date(props) {

    return (
        <div className='dateDiv'>
            <form>
                <input onChange={props.clickHandler} type='date'/>
                <button onClick={props.getMetroId}>GO</button>
            </form>
        </div>
    )
}
