import React from 'react'


export default function Address(props) { 

    return (
        <div>
            <form className='addressForm' onSubmit={props.getGeoFromAddress} >
                {props.latitude ? 
                <a target='_blank'
                   rel="noopener noreferrer"
                   href={'http://maps.google.com/?ll=' + props.latitude + ',' + props.longitude}>
                <h3>View location on Map</h3></a>

                : 
                
                null}
                <input className='addressBar'
                       type='text'
                       name='searchBar'
                       placeholder='Enter an address'>
                </input>
                <button type="submit"></button>
            </form>
        </div>
    )
}
