import React from 'react';
import './style/navbar1.css'
import Navbar from '../DevicesPage/Navbar'

function Navbar1() {
    

    return (
        <>
            <Navbar />
            <nav className='nav'>
                <div><button className='btn'>Sign in</button></div>
                <div className='text'>AIR COOLER</div>
                <div><button className='connected'>Device <br /> connected</button></div>
            </nav>
        </>
    )
}

export default Navbar1;