import React from 'react'

function Relogio(){
    return (
      <h2>
        {new Date().toLocaleTimeString()}
      </h2>
    );

  }
  
  export default Relogio;