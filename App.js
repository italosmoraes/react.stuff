import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <h4> Now updated! </h4>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

function mountTaskListItem(taskItem) {

  
  return    <span><span className="task-status">STATUS </span><span className="task-description"> {taskItem.description} </span></span>;
  
}

var taskList = loadTestTasks(7);

function mountList(taskList){
  for (var x = 1; x <= taskList.length; x++) {
    mountTaskListItem(taskList[x]);
  }
}

function Task(stat, desc) {
  this.description = desc;
  this.status = stat;
};

const taskElement = (
  <div className="tasks-container">
    {mountTaskListItem(taskList)}
  </div>
);

function loadTestTasks(qty) {
  var list = [];

  for (var x = 1; x <= qty; x++) {
    var task = new Task("OPEN", " this is task " + x + "__ ...");
    list.push(task);
  }

  return list;
}

class WorkReportApp extends Component {
  render() {
    return (
      <div className="WorkReport-Container">
        <div className="task-list">
          <div className="task-item">
            {loadTestTasks(3)}
          </div>
        </div>
      </div>

    );
  }
}

//export default App;
export default WorkReportApp;
