import { Import } from 'lucide-react';
import { useState } from 'react';
import CircularSlider from "react-circular-slider-svg";
const FanSlider = () => {
  const [value1, setValue1] = useState(20);
  
  const getSliderColor = (value) => {
    if (value < 33) {
      return "#00FF00"; // Red for values less than 33
    } else if (value >= 33 && value <= 66) {
      return "#FFFF00"; // Yellow for values between 33 and 66
    } else {
      return "#FF0000"; // Green for values greater than 66
    }
  };
  const parentStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // This makes it a reference for absolute positioned children
    height: '300px', // Ensure this matches or exceeds the CircularSlider size for proper centering
  };
  
  // Add a CSS class for the image container to position it absolutely in the center
  const imageStyle = {
    position: 'absolute',
    maxWidth: '500px',
    textAlign: 'center', // Center the image within the div if it's not filling it entirely
  };
  
  return (
    <div style={parentStyle}>
      <CircularSlider
        size={300}
        trackWidth={8}
        minValue={0}
        maxValue={100}
        startAngle={70}
        endAngle={290}
        angleType={{
          direction: "cw",
          axis: "-y"
        }}
        handle1={{
            value: value1,
            onChange: v => setValue1(v)
          }}
          arcColor={getSliderColor(value1)} // Use the dynamic color based on the slider's value
          arcBackgroundColor="#CECECE"
        />
        <div style={imageStyle}> 
          <img src={'Fan.svg'} className="mw-12 h-36" alt="Fan"></img>
        </div>
      </div>
    );
};
export default FanSlider;