import React, { Component } from 'react'

export default class CCinput extends Component {
  constructor(props){
    super(props);

    this.state ={
      divColor: 'white'
    };
  }

  colorCh = (color)=>{
    this.setState({divColor : color})
  }


  render() {
    let colors = ['Black','Red','Blue','Green','Gray','Pink','white','Gold']
    return (
      <div style={{marginLeft:"18px" ,border:'2px , white , dotted',width:250,backgroundColor:this.state.divColor}}>
        <h3 style={{backgroundColor:'black'}}>Pick a color</h3>

        
        {colors.map((color) =>(
          <button key={color} onClick={() => this.colorCh(color)}>
            {color}
          </button>
        ))}
        

      </div>
    )
  }
}
