import React, { Component } from "react";
import TaskItem from "./TaskItem";
export default class TaskList extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.props.tasks.map((t, index) => {
            return <TaskItem key={index} taskItem={t} id={index} />;
          })}
        </tbody>
      </table>
    );
  }
}
