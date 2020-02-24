import React from 'react'


export default function Address() { 

    return (
        <div>
            <form className='addressForm' >
                <h3>Press 'allow' or enter your address</h3>
                <input className='addressBar'
                       type='text'
                       placeholder='Enter your address'>
                </input>
                <button type="button"><i className="fa fa-search"></i></button>
            </form>
            
        </div>
    )
}
