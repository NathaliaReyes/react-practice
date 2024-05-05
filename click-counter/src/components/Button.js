// import React from 'react';
import '../stylesheets/Button.css';
// Aplicamos sintaxis de desestructuración


function Button({ text, isButtonClick, handleClick }) {
  return (
    <button 
      className={ isButtonClick ? 'btnClick' : 'btnRestart' }
      onClick={handleClick}>
      {text} 
    </button>
  );
}

export default Button;