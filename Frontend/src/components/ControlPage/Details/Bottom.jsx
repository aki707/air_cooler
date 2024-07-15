import React from 'react';
import './style/bottom.css';

function Bottom({showbox,setshowbox}) {
    const modeclick=()=>{
        setshowbox(!showbox)
    }

    return (
        <>
            <div className='main'>
            <div onClick={()=>{modeclick()}}>Mode </div>
            <div className='power'>
                Power<br />ON/OFF
            </div>
            <div>Timer </div>
            </div>
        </>
    )
}

export default Bottom