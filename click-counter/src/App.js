import './App.css';
import silviaLogo from './images/logo-silvia.png';
import Button from './components/Button';
import Counter from './components/Counter';
// This is the package that we need to import to use the useState hook
import { useState } from 'react';

function App() {
  // 2 valores, el primero el estado. El segundo es una función que nos permite modificar el estado
  const [numClicks, setNumClicks] = useState(0); // 0 es el valor inicial del estado

  const handleClick = () => {
    setNumClicks(numClicks + 1);
  }

  const reStartCounter = () => {
    setNumClicks(0);
  }

  return (
    <div className="App">
      <div className='silvia-logo-container'>
        <img 
          className='silvia-logo' 
          src={silviaLogo}
          alt='Silvia Logo'
        />
        <div className='main-container'>
          <Counter numClicks={numClicks} />
          <Button 
            text = 'Click me!' 
            isButtonClick = {true} 
            handleClick = {handleClick}/>
          <Button 
            text = 'ReStart!' 
            isButtonClick = {false} 
            handleClick = {reStartCounter}/>
        </div>
      </div>
    </div>
  );
}

export default App;
