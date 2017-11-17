import React, { Component } from 'react';

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

function addEl(text){
    let p = createNode("p");
    let br = createNode("br");
    p = document.createTextNode(text);
    append(document.getElementById('main-div'), br );
    append(document.getElementById('main-div'), p );
}


function getGreet(){
    
    fetch('http://localhost:8080/oi')
            .then((resp) =>  resp.text().then(function(text) {
                addEl(text);
              }))
            .catch((err) => console.log('nothing to show')
        )
    
}

function mountGreetTable(list){
    var arr = JSON.stringify(list);
    console.log(arr);
    for(var x=0; x < arr.length; x++){
        mountGreetTableItem(arr[x]);
    }
}

function mountGreetTableItem(listItem){    
    addEl(<span><b>listItem</b></span>);
}


function getGreetings(){
    fetch('http://localhost:8080/greetings')
            .then((resp) =>  resp.text().then(function(list) {
                mountGreetTable(list);
              }))
            .catch((err) => console.log('nothing to show')
        )
    
}

function sayBye(){
    fetch('http://localhost:8080/tchau')
    .then((resp) => resp.text().then(function(text){
        addEl(text);
    }))
}

function greet(){

    // let oReq = new XMLHttpRequest();

    let link = "http://localhost:8080/greet";
    
    // oReq.open("GET", link, true);
    // oReq.setRequestHeader("Access-Control-Allow-Origin", "true");
    // oReq.send();
    window.location = link;

}


class Greetings extends Component {

    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
        this.sayBye = this.sayBye.bind(this);
        this.greet = this.greet.bind(this);
        this.greetings = this.greetings.bind(this);
    }

    onClick(){
        getGreet();
    }

    sayBye(){
        sayBye();
    }

    greet(){
        greet();
    }

    greetings(){
        getGreetings();
    }

    render() {
        return (
            <div id='main-div'>
                <h1> Showing Greetings </h1>
                <button onClick={this.onClick}> say O.ee! </button> 
                <button onClick={this.sayBye}> say Bye..! </button> 
                <button onClick={this.greet}> Greet! </button> 
                <button onClick={this.greetings}> Around the World </button> 
                {/* <h3>{getGreet2()}</h3> */}
            </div>
        )
    }

}

export default Greetings;


