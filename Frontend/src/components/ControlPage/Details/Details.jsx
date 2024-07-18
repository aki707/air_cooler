import Navbar1 from './Navbar1';
import Climate from './Climate';
import Mid_portion from './Mid_portion.jsx';
import Bottom from './Bottom.jsx';
import React, { useState } from 'react';
function Details() {
  const[showbox,setshowbox]=useState(false);
  return (
  <>
    <Navbar1/>
    <Climate/>
    <Mid_portion showbox={showbox}/>
    <Bottom showbox={showbox} setshowbox={setshowbox}/>
  </>
  )
}

export default Details