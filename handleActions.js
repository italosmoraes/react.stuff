import React, { Component } from 'react';

class Action extends Component {

    constructor(props){
        super(props);
        this.state = {isToggledOn: true};
        this.handleClick = this.handleClick.bind(this);
        this.changeText = this.changeText.bind(this);
    }

    handleClick() {
        this.setState (prevState => ({
            isToggledOn: !prevState.isToggledOn
        }));
    }

    changeText() {
        return document.appendChild(<p> new stuff... </p>)
    }

    render() {
        return (
            <div>
            <button onClick={this.handleClick}>
                {this.state.isToggledOn ? 'ON':'OFF'}
            </button>
            <h2 onClick={this.changeText}>
                HEY
            </h2>
            </div>
        )
    }

}


class handleActions extends Component {
    render() {
        return ( 
        <div>
        <Action /> 
        <Action /> 
        </div>
        );
    }
}

export default handleActions;