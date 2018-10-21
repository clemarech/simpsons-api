import React, {Component} from 'react';

const GenerateChar=({selectChar})=>{
  return (
      <div className="GenerateChar">
          <button onClick={selectChar}> Click for another character !</button>
      </div>
    )
  }
export default GenerateChar;
