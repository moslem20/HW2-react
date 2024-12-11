import React, { Component } from 'react'

export default class CCtable extends Component {
  constructor(props){
    super(props);

    this.state= {
      mainWidth : "100%" 
    };
  }

  handleTableClick = () => {
    this.setState((prevState) => ({
      mainWidth: prevState.mainWidth = '50%',
    }));
  };

  handleTableDoubleClick = () => {
    this.setState((prevState) => ({
      mainWidth: prevState.mainWidth = '100%',
    }));
  };

  render() {
    return (
      <div style={{backgroundColor:'brown',margin:'20px'}}>
        
      <table 
      style={{border:"1 solid black",width:this.state.mainWidth,borderCollapse: 'collapse',marginBottom: '20px',cursor: 'pointer'}}
      onClick={this.handleTableClick}
      onDoubleClick={this.handleTableDoubleClick}
      >
      <thead>
            <tr>
              <th style={{ border: '1px solid black', padding: '10px' }}>Header 1</th>
              <th style={{ border: '1px solid black', padding: '10px' }}>Header 2</th>
              <th style={{ border: '1px solid black', padding: '10px' }}>Header 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid black', padding: '10px' }}>Row 1, Col 1</td>
              <td style={{ border: '1px solid black', padding: '10px' }}>Row 1, Col 2</td>
              <td style={{ border: '1px solid black', padding: '10px' }}>Row 1, Col 3</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '10px' }}>Row 2, Col 1</td>
              <td style={{ border: '1px solid black', padding: '10px' }}>Row 2, Col 2</td>
              <td style={{ border: '1px solid black', padding: '10px' }}>Row 2, Col 3</td>
            </tr>
          </tbody>
        </table>
    </div>
    )
  }
}
