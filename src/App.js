import './App.css';
import {useState} from 'react';

function App() {
  const [colorName, setColorName] = useState("");
  return (
    <div className="App">
      <div className="left">
        <h1>Text field to change the color of back</h1>
        <input
          type="text"
          id="colorInput"
          value={colorName}
          onChange={(e) => setColorName(e.target.value)}
        />
      </div>
      <div className="right" style={{backgroundColor:colorName}}>
      </div>
    </div>
  );
}

export default App;
