import React, { Component } from "react";

export default class TaskItem extends Component {
  render() {
    let result;
    result = (
      <tr>
        <td>
          <span>{this.props.taskItem.taskName}</span>
        </td>
        <td>
          <button>Edit</button>
          <button>Delete</button>
        </td>
      </tr>
    );
    return result;
  }
}
