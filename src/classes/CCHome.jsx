import React, { Component } from 'react'
import CCinput from './CCinput'
import CCform from './CCform'
import CCtable from './CCtable'

export default class CCHome extends Component {
  constructor(props){
    super(props);
    this.state ={
      currentComponent: null,
    };
  }

  renderComps(){
    switch(this.state.currentComponent){
      case 'one':
        return <CCinput/>;
      case 'two':
        return <CCform/>;
      case 'three':
        return <CCtable/>;
      default:
          return <div>Please select a component.</div>;
    }
  }

  


  render() {
    return (
      <div style={{border:'2px black solid',borderRadius:'10px'}}>
        <h2>Home Page</h2>
        <button onClick={() => this.setState({currentComponent:'one'})}>Q1 - input</button>
        <button onClick={() => this.setState({currentComponent:'two'})}>Q2 - Form</button>
        <button onClick={() => this.setState({currentComponent:'three'})}>Q3 - Table</button>

        <div style={{ border: '1px solid black', marginTop: '20px', padding: '10px' }}>
          {this.renderComps()}
        </div>
      </div>
    )
  }
}
