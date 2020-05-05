import React from 'react';

class Counter extends React.Component{
    constructor(){
      super();
      this.state = {
        counter: 0
      }
    }
  
    handleClick = () => {
      this.setState({ counter: this.state.counter + 1 });
    }
  
    render(){
      return (
        <React.Fragment>
        <span className="value">{this.state.counter}</span>
        <button id="inc" onClick={this.handleClick}>Incrementa</button>
        </React.Fragment>
      )
    }
  }

  export default Counter;