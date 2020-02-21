import React from 'react'


export default function Address() { 

    return (
        <div>
            <form >
                <input className='addressBar'
                       type='text'
                       placeholder='Enter your address'>
                </input>
                <button type="button"><i className="fa fa-search"></i></button>
                {/* <button className="geoButton" 
                        onClick={props.getLatLong}
                        type="button"
                        >Geo Locate</button> */}
            </form>
            
        </div>
    )
}
