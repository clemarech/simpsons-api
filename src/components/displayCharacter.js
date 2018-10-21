import React, {Component} from 'react';
import Api from './api';

const DisplayChar =({ char }) =>{
  return(
      <div>
          <img src={char.image} />
            <ul>
                <li>
                  {char.quote}
                </li>
                <li>
                  {char.character}
                </li>
            </ul>
      </div>
  )
}
export default DisplayChar;
