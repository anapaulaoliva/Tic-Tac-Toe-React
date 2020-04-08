import React from 'react';
import squareStyle from './square.module.css';

export default (props) => {
    return (
        <button 
          className={ squareStyle.square } 
          onClick={ props.onClick }
          >
            { props.value }
          </button>
    );
  }