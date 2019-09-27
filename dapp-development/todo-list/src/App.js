import React, { Component } from 'react'
import Web3 from 'web3'
import './App.css'
import { TODO_LIST_ABI, TODO_LIST_ADDRESS } from './config'
import TodoList from './TodoList'

class App extends Component {


    constructor(props) {
        super(props);
        this.state = {
            account: '',
            taskCount: 0,
            tasks: [],
            loading: true
        };

        this.createTask = this.createTask.bind(this);
        this.toggleTask = this.toggleTask.bind(this);
    }


  componentWillMount() {
    this.loadBlockchainData()
  }

  async loadBlockchainData() {

        // Load blockchain data

  }

  async loadTasks() {

        // Load tasks

  }


  createTask(content) {

    // Create a task

  }

  toggleTask(taskId) {

    // Toggle the task

  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#"> Todo List</a>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
              <small><a className="nav-link" href="#"><span id="account"></span></a></small>
            </li>
          </ul>
        </nav>
        <div className="container-fluid">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex justify-content-center">
              { this.state.loading
                ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div>
                : <TodoList
                  tasks={this.state.tasks}
                  createTask={this.createTask}
                  toggleTask={this.toggleTask} />
              }
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
