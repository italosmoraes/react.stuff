import React, { Component } from 'react';

function UserGreeting (props){
    return <h2> hello USER. Welcome back </h2>;
}

function GuestGreeting (props) {
    return <h1> Welcome stranger. How about registering? </h1>;
}

function Greet(props){
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        return <UserGreeting/>
    }else{
        return <GuestGreeting/>
    }
}

function LoginButton(props) {
    return (<button onClick={props.onClick}> LOGIN </button>);
}

function LogoutButton(props) {
    return (<button onClick={props.onClick}> LOGOUT </button>);
}

class LoginControl extends React.Component {
    constructor(props){
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: props.isLoggedIn};
    }

    handleLoginClick(){
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick(){
        this.setState({isLoggedIn: false});
    }

    render (){
        const isLoggedIn = this.state.isLoggedIn;

        let button = null;
        if(isLoggedIn){
            button = <LogoutButton onClick={this.handleLogoutClick} />
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />
        }

        return (
            <div>
                <Greet isLoggedIn={true}/>
                {button}
            </div>
        )
    }
}

class MailBox extends Component {
    constructor(props){
        const unreadMsgs = props.unreadMsgs;
    }

    render(){
        <div>
            <h2><b> Unread Messages: </b></h2>
            unreadMsgs
        </div>
    }
}

class main extends Component{
    render () {
        return (<LoginControl />)
    }
}

export default main;