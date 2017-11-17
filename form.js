import React, { Component } from 'react';
import PropTypes from 'react';

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
      return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
  }

class Calculator extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {temperature: ''};
    }
  
    handleChange(e) {
      this.setState({temperature: e.target.value});
    }
  
    render() {
      const temperature = this.state.temperature;
      return (
        <div>
        <fieldset>
          <legend>Enter temperature in Celsius:</legend>
          <input
            value={temperature}
            onChange={this.handleChange} />
          <BoilingVerdict
            celsius={parseFloat(temperature)} />
            
        </fieldset>
        {returnProps()}
        <hr/>
        <customTextInput/>
        </div>



      );
    }
  }

function Greeting (props){
    
        return (
        <h1> {props.name} , {props.surname} </h1>
        );
    
}

// const Greeting = props => (<h1> {props.name} , {props.surname} </h1>);

function returnProps(){
    const props = {name: 'jack', surname: 'sparrow'};
    return <Greeting {...props}/>
}

export default Calculator;