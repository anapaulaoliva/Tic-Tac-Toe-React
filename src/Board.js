import React from 'react';
import boardStyle from  './board.module.css';
import Square from './Square';

export default class Board extends React.Component {

    renderSquare(i) {
      return (
        <Square 
          value = { this.props.squares[i] } 
          onClick = { () => this.props.onClick(i) }
        />
      );
    }
  
    render() {
      return (
        <div>
          <div className={ boardStyle.boardRow }>
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className={ boardStyle.boardRow }>
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className={ boardStyle.boardRow }>
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }