import React, { Component } from 'react';

function formatName(user) {
    return user.firstName + ' ___ ' + user.lastName;
}

const user = {
    firstName: 'Italo',
    lastName: 'Moraes'
}

function formatGreeting(user) {
    if (user) {
        return <h2> Nice {user.firstName} {user.lastName}, you have a name! </h2>
    } else {
        return <h4> Bummer, dont know your name. </h4>
    }
}

const element = (
    <h1> Hey there, {formatName(user)} </h1>
);

const lineElement = (
    <hr width="350" />
);

function showLine(set) {
    if ('yes') {
        return lineElement
    } else {
        console.log('no line shown')
    }
}

function tick() {
    return <Clock/>
}

class Clock extends React.Component {

    constructor(props){
        super(props);
        this.state = {date: new Date(), text: 'hey...'};
        this.x = 0;
    }

    componentDidMount() {
        this.timerID = setInterval( () => this.tick(), 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick() {
        this.x += 1;
        this.setState({date: new Date(), text: 'wow...' + this.x });
    }

    render() {
        return (
        <div>
            <hr />
            <h3> --- Clock Component --- </h3>
            <h4> Time now: {this.state.date.toLocaleTimeString()} </h4>
            <FormattedDate date={this.state.date}/>
        </div>
        )
    };
}

function FormattedDate(props){
    return <h2> It is ... {props.date.toLocaleTimeString()} </h2>
}

function Welcome(props){
    return <h2> This will show the NAME property: {props.name}, {props.id} </h2>
}

const welement = <Welcome name="yardiness" id="t1"/>;

function showCustomWelcomeElement(){
    return welement
}

function App(){

    return <div id="clocks">
        <Clock />
        <Clock />
        <Clock />
    </div>
}

class intro extends Component {
    render() {
        return (
            <div className="main-intro-container">
                {formatGreeting(user)}
                {showLine('yes')}
                {tick()}
                {showLine('yes')}
                {showCustomWelcomeElement()}
                {App()}
            </div>

        );
    }
}

export default intro;
