import './style/mid_portion.css';
// import Bottom from './Bottom';
import Fan from './Fan';
function Mid_portion({showbox}) {
    return (
        <>
            <div className='mid'>
                {/* ////////////// first div ////////// */}
                <div className='mid_one'>
                    {/* display in and out */}
                    <div  className={showbox?'mode':'notmode'}>
                        <p>
                            Night Mode <br />Auto Mode
                        </p>
                    </div>
                    
                    <div className=''>
                    {/* fan component */}
                    {/* <div className='fan'>
                        <div className="m">M</div>
                        <div className="inner">
                            <div className="l">L</div>
                            <div className="center">
                                <div className="pointer"></div>
                                <div className="in_center">
                                    <Fan/>
                                </div>
                            </div>
                            <div className="h">H</div>
                        </div>
                    </div> */}
                    <div className="control">
        <div className="circular-control">
        <Fan/>
          <div className="icon low"><button><b>L</b></button></div>
          <div className="icon medium"><button><b>M</b></button></div>
          <div className="icon high"><button><b>H</b></button></div>
        </div>
        <div style={{ textAlign:'center'}}>Fan Speed</div>
      </div>
                    </div>
                </div>
                {/* ////////////second div//////////// */}
                <div className='mid_two'>
                    {/* <div> */}
                    <div className='t_1'>&nbsp;+</div>
                    <div className='t_2'></div>
                    <div className='t_3'>&nbsp;-</div>
                    {/* </div> */}
                </div>            
            </div>
        </>
    )
}

export default Mid_portion;