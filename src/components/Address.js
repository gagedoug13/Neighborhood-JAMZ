import React from 'react'


export default function Address(props) { 

    return (
        <div>
            <form className='addressForm' onSubmit={props.getGeoFromAddress} >
                <h3>Press 'allow' or enter your address</h3>
                <input className='addressBar'
                       type='text'
                       name='searchBar'
                       placeholder='Enter your address'>
                </input>
                <button type="submit"></button>
            </form>
        </div>
    )
}
