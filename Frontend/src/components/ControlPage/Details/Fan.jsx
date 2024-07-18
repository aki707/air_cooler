import React, { useState } from 'react';
import CircularSlider from '@jsdev63/advanced_react-circular-slider';

const CircularSliderWithKeyLabel = ({ keyLabel }) => {
  const [value, setValue] = useState(50);

  const handleChange = (value) => {
    setValue(value);
  };

  return (
    <div style={{ textAlign: 'center',color:'black' }}>
      <CircularSlider
        width={200}
        label=""
        limit={270}
        dataIndex={value}
        onChange={handleChange}
        knobPosition="bottom"
        knobColor="#4a90e2"
        progressColorFrom="#B9D9EB"
        progressColorTo="#0039a6"
        progressSize={10}
        trackColor="#eeeeee"
        trackSize={10}
        data={[
            { key: 1, value: "" },//
            { key: 2, value: "" },
            { key: 3, value: "" },
            { key: 4, value: "" },
            { key: 5, value: "" },
            { key: 6, value: "" },
            { key: 7, value: "" },
            { key: 8, value: "" },
            { key: 9, value: "" },
            { key: 10, value: "" },
            { key: 11, value: "" },
            { key: 12, value: "" },
            { key: 13, value: "" },
            { key: 14, value: "" },
            { key: 15, value: "" },
            { key: 16, value: "" },
            { key: 17, value: "" },
            { key: 18, value: "" },
            { key: 19, value: "" },//
            { key: 20, value: "" },
            { key: 21, value: "" },
            { key: 22, value: "" },
            { key: 23, value: "" },
            { key: 24, value: "" },
            { key: 25, value: "" },
            { key: 26, value: "" },
            { key: 27, value: "" },
            { key: 28, value: "" },
            { key: 29, value: "" },
            { key: 30, value: "" },
            { key: 31, value: "" },
            { key: 32, value: "" },
            { key: 33, value: "" },
            { key: 34, value: "" },
            { key: 35, value: "" },
            { key: 36, value: "" },
            { key: 37, value: "" },
            { key: 38, value: "" },//
            { key: 39, value: "" },
            { key: 40, value: "" },
            { key: 41, value: "" },
            { key: 42, value: "" },
            { key: 43, value: "" },
            { key: 44, value: "" },
            { key: 45, value: "" },
            { key: 46, value: "" },
            { key: 47, value: "" },
            { key: 48, value: "" },
            { key: 49, value: "" },
            { key: 50, value: "" },
            { key: 51, value: "" },
            { key: 52, value: "" },
            { key: 53, value: "" },
            { key: 54, value: "" },
            { key: 55, value: "" },
            { key: 56, value: "" },
            { key: 57, value: "" }//
          ]}
      />


      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '20px',
        }}
      >
      </div>
    </div>
  );
};

function Fan(){
  return (
    <div>
      <CircularSliderWithKeyLabel keyLabel="Key" />
    </div>
  )
}


export default Fan