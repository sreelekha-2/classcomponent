import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(){
        super()
        this.state={count:0}
    }

    incrementCounter=()=>{
        this.setState({count:this.state.count+1})
    }
    
    decrementCounter=()=>{
        this.setState({count:this.state.count-1})
    }
    resetCounter=()=>{
        this.setState({count:0})
    }

  render() {
    return (
      <div>
          <h2>Counter</h2>
          <p>{this.state.count}</p>
          <div>
              <button onClick={this.incrementCounter}>Increase</button>
              <button onClick={this.decrementCounter}>Decrease</button>
              <button onClick={this.resetCounter}>Reset</button>
          </div>
      </div>
    )
  }
}
