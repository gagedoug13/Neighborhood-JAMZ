import React from 'react'

export default function Address(props) {

    return (
        <div>
            <form >
                <input className='addressBar'
                       type='text'
                       onChange={props.updateUserAddress({userAddress: 'state changed'})}
                       value={props.userAddress}
                       placeholder='Enter your address'>
                </input>
                <button type="submit"><i className="fa fa-search"></i></button>
                <button className="geoButton" type="sumbit" >Geo Locate</button>
            </form>
            
        </div>
    )
}
