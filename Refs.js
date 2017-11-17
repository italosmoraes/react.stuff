import React, { Component } from 'react';
import PropTypes from 'react';

class BirthName extends Component{
    
}

BirthName.PropTypes = {

    firstName: PropTypes.String,
    middleName: PropTypes.String

}

class customTextInput extends React.Component{
    constructor(props){
        super(props);
        this.focus = this.focus.bind(this);
    }

    componentWillReceiverProps() {

    }

    focus(){
        this.textInput.focus();
    }

    render(){
        return(
            <div>
                <input
                    type="text"
                    ref={(input) => { this.textInput = input; }}>
                </input>
                <input
                    type="button"
                    value="focus the text input"
                    onClick={this.focus} >
                </input>
            </div>
        );
    }
}

export default customTextInput;
