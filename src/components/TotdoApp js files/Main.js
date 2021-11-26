import React, { Component } from "react";
import CreateTask from "./CreateTask";
import TaskList from "./TaskList";
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };
    this.createTask = this.createTask.bind(this);
  }
  createTask(task) {
    if (task.trim() === "") {
      alert("Empty task cannot be added!");
      return;
    }
    let newTask = { taskName: task.trim(), isCompleted: false };
    let allTask = [...this.state.tasks, newTask];
    this.setState({ tasks: allTask });
  }
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <div>
          <CreateTask createTask={this.createTask} />
          <br />
          <TaskList tasks={this.state.tasks} />
        </div>
      </div>
    );
  }
}
