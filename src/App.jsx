import './App.css';
import React, { useState } from 'react';

function App() {
  const [bgColor, setBgColor] = useState('white'); // default white background

  const handleChangeColor = (color) => {
    setBgColor(color);
  };

  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center text-center"
        style={{ backgroundColor: bgColor, height: '100vh' }}
      >
        <div className="bg-light border p-1" style={{ width: '350px', height: '400px', paddingTop: '250px', paddingLeft: '600px' }}>
          <h4 style={{ fontSize: '25px' }} className="text-danger">Background Color Changer App</h4>
          <div className="d-flex flex-column gap-2">
            <button
              className="btn fw-bolder"
              onClick={() => handleChangeColor('red')}
              style={{ padding: '10px', fontSize: '16px', margin: '10px', backgroundColor: 'red', color: 'white' }}
            >
              Red
            </button>
            <button
              className="btn fw-bolder"
              onClick={() => handleChangeColor('green')}
              style={{ padding: '10px', fontSize: '16px', margin: '10px', backgroundColor: 'green', color: 'white' }}
            >
              Green
            </button>
            <button
              className="btn fw-bolder"
              onClick={() => handleChangeColor('blue')}
              style={{ padding: '10px', fontSize: '16px', margin: '10px', backgroundColor: 'blue', color: 'white' }}
            >
              Blue
            </button>
            <button
              className="btn fw-bolder"
              onClick={() => handleChangeColor('yellow')}
              style={{ padding: '10px', fontSize: '16px', margin: '10px', backgroundColor: 'yellow', color: 'black' }}
            >
              Yellow
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
