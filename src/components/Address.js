import React from 'react'

export default function Address({ latitude, longitude, getGeoFromAddress, getGeoFromGeoButton }) { 

    return (
        <div className='addressDiv'>
            <div className='addressFormDiv'>
            <form action='...' className='addressForm' onSubmit={getGeoFromAddress} >
                {latitude ? 
                <a target='_blank'
                rel="noopener noreferrer"
                href={'http://maps.google.com/?ll=' + latitude + ',' + longitude}>
                <img className='locationIcon' src='https://media.giphy.com/media/5dUpIQwwiHn2wQh10Z/giphy.gif'></img></a>

                : 
                
                null}
                <p className='addressMessage'></p>
                <input className='addressBar'
                       type='text'
                       name='searchBar'
                       placeholder='Enter an address'>
                </input>
            </form>
            </div>
                <p className='locationOption'>or</p>
                <button onClick={getGeoFromGeoButton} className='addressButton' type="submit">Use My Location</button>
        </div>
    )
}
