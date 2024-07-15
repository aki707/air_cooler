import React, {useState} from 'react';
import './style/climate.css';
// import A from './A';
var waterlevel;
function Climate() {
    const [temp, settemp]= useState();
    const [waterlevel, setwaterlevel]= useState("0");
    const [humidity, sethumidity]= useState();
    return (
        <>
            {/* <div className='mainn'>
            <div>
                Tempreature&nbsp;{temp} <img src="temp.png" alt="tempreature" className='deatils_img' />
            </div>
            <div>Water level&nbsp;{waterlevel}% &emsp;
                <div className="teardrop" style={{background: `linear-gradient(45deg, rgb(38, 78, 255) 0%, rgb(207, 207, 231) ${waterlevel+20}%, white 200%)`}}></div>
            </div>
            <div>
                Humidity&nbsp;{humidity} <img src="weather.png" alt="hum" className='deatils_img' />
            </div>

            </div> */}

            {/* <div className="big">
                <div className="small">
                    <input placeholder='  temp' id='temp' type="text" style={{border:"2px solid black", backgroundColor:"lightgrey"}} onClick={function(){document.getElementById('temp').value=""}} />
                    <button onClick={function(){
                    let newtemp= Number(document.getElementById('temp').value);
                    console.log(typeof(newtemp));
                    // level=waterlevel;
                    settemp(newtemp);
                    }}>&nbsp;Submit</button>
                </div>

                <div className="small">
                    <input placeholder='  waterlevel' id='waterlevel' type="text" style={{border:"2px solid black", backgroundColor:"lightgrey"}} onClick={function(){document.getElementById('waterlevel').value=""}} />
                    <button onClick={function(){
                    let newwaterlevel= Number(document.getElementById('waterlevel').value);
                    console.log(typeof(newwaterlevel));
                    // level=waterlevel;
                    setwaterlevel(newwaterlevel);
                    }}>&nbsp;Submit</button>
                </div>

                <div className="small">
                    <input placeholder='  humidity' id='humidity' type="text" style={{border:"2px solid black", backgroundColor:"lightgrey"}} onClick={function(){document.getElementById('humidity').value=""}} />
                    <button onClick={function(){
                    let newhumidity= Number(document.getElementById('humidity').value);
                    console.log(typeof(newhumidity));
                    // level=waterlevel;
                    sethumidity(newhumidity);
                    }}>&nbsp;Submit</button>

                </div>
            </div> */}



            <div className=" md:flex md:flex-row md:justify-around  border-red-700">

                <div className=" mainn flex-col">
                <div >
                    Tempreature&nbsp;{temp} <img src="temp.png" alt="tempreature" className='deatils_img' />
                </div>

                <div className="small flex">
                    <input placeholder='  temp' id='temp' type="text" style={{border:"2px solid black", backgroundColor:"lightgrey"}} onClick={function(){document.getElementById('temp').value=""}} />
                    <button onClick={function(){
                    let newtemp= Number(document.getElementById('temp').value);
                    console.log(typeof(newtemp));
                    // level=waterlevel;
                    settemp(newtemp);
                    }}>&nbsp;Submit</button>
                </div>
                </div>

                <div className=" mainn flex-col">
                <div>Water level&nbsp;{waterlevel}% &emsp;
                <div className="teardrop" style={{background: `linear-gradient(45deg, rgb(38, 78, 255) 0%, rgb(207, 207, 231) ${waterlevel+20}%, white 200%)`}}></div>
                </div>

                <div className="small flex">
                    <input placeholder='  waterlevel' id='waterlevel' type="text" style={{border:"2px solid black", backgroundColor:"lightgrey"}} onClick={function(){document.getElementById('waterlevel').value=""}} />
                    <button onClick={function(){
                    let newwaterlevel= Number(document.getElementById('waterlevel').value);
                    console.log(typeof(newwaterlevel));
                    // level=waterlevel;
                    setwaterlevel(newwaterlevel);
                    }}>&nbsp;Submit</button>
                </div>

                </div>

                <div className=" mainn flex-col">
                <div>
                Humidity&nbsp;{humidity} <img src="weather.png" alt="hum" className='deatils_img' />
                </div>

                <div className="small flex">
                    <input placeholder='  humidity' id='humidity' type="text" style={{border:"2px solid black", backgroundColor:"lightgrey"}} onClick={function(){document.getElementById('humidity').value=""}} />
                    <button onClick={function(){
                    let newhumidity= Number(document.getElementById('humidity').value);
                    console.log(typeof(newhumidity));
                    // level=waterlevel;
                    sethumidity(newhumidity);
                    }}>&nbsp;Submit</button>

                </div>
                </div>
                 
            </div>

        </>
    )
}

export default Climate;