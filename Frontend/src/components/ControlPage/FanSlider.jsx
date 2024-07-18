import React, { useState, useEffect } from 'react';
import CircularSlider from 'react-circular-slider-svg'; // Adjust import as necessary

// Define breakpoints and sizes
const breakpoints = {
  small: 300,
  medium: 400,
  large: 500
};

const sliderSizes = {
  small: 100,
  medium: 200,
  large: 300
};

// Custom hook to get window size
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

const FanSlider = () => {
  const [value1, setValue1] = useState(20);
  const windowSize = useWindowSize();

  const getSliderColor = (value) => {
    if (value < 33) {
      return "#98B2EC"; // Blue for values less than 33
    } else if (value >= 33 && value <= 66) {
      return "#3F72E8"; // Blue for values between 33 and 66
    } else {
      return "#002BA9"; // Dark Blue for values greater than 66
    }
  };

  const parentStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    height: '300px',
  };

  const imageStyle = {
    position: 'absolute',
    maxWidth: '500px',
    textAlign: 'center',
  };

  const getSliderSize = () => {
    if (windowSize.width < breakpoints.small) {
      return sliderSizes.small;
    } else if (windowSize.width < breakpoints.medium) {
      return sliderSizes.medium;
    } else {
      return sliderSizes.large;
    }
  };

  return (
    <div style={parentStyle}>
      <CircularSlider
        size={getSliderSize()}
        trackWidth={10}
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
        arcColor={getSliderColor(value1)}
        arcBackgroundColor="#CECECE"
      />
      <div style={imageStyle}>
        <img src={'Fan.svg'} className=" h-36" alt="Fan" />
      </div>
    </div>
  );
};

export default FanSlider;
