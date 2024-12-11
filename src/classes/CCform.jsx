import { Component } from 'react'

export default class CCform extends Component {
  constructor(props) {
    super(props);


    this.state = {
      lastName: '',
      firstName: '',
      psychometricScore: '',
      message: '',
    };
  }

  focus = (event)=>{
    this.setState({ message: `Fill the ${event.target.name} field.` });
  };

  blur = () =>{
    this.setState({message:''});
  };

  changeFN = (event) => {
    this.setState({ firstName: event.target.value});
  };
  changeLN = (event) => {
    this.setState({ lastName: event.target.value});
  };
  changePG = (event) =>{
    this.setState({psychometricScore: event.target.value});
  };


  submit = (event) =>{
    event.preventDefault();
    if (parseInt(this.state.psychometricScore, 10) > 555) {
      this.setState({ 
        message: `${this.state.firstName} ${this.state.lastName} ,Your score is above 555. You can be accepted for next year.` });
      }
      else{
      this.setState({ 
        message: `${this.state.firstName} ${this.state.lastName} ,Your score is under 555. You cant be accepted for next year.`  });
    }
  };

  
  render() {
    
    return (
      <form onSubmit={this.submit} style={{border:'3px black solid', backgroundColor:'gray',margin:'7px',padding:'15px'}}>
        <h3>Form</h3>
        <label>Family Name</label> <br />
        <input type='text' name='last name' value={this.state.lastName} onChange={this.changeLN} onFocus={this.focus} onBlur={this.blur}></input><br />

        <label>First Name</label><br />
        <input type='text' name='first name' value={this.state.firstName} onChange={this.changeFN} onFocus={this.focus} onBlur={this.blur}></input><br />


        <label>Psychometric score</label><br />
        <input type='number' name='psychometric score' value={this.state.psychometricScore} onChange={this.changePG} onFocus={this.focus} onBlur={this.blur}></input><br />

        <button type='submit'>Submit</button>

        {this.state.message && <h5 style={{backgroundColor:'red'}}>{this.state.message}</h5>}
      </form>
    )
  }
}

