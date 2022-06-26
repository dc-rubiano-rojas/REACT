import React from "react";
import { useState } from "react";

const TaskCreator = ({ createTask }) => {
  const [newTaskName, setNewTaskName] = useState("");

  const handleSubmitted = (e) => {
    e.preventDefault();
    createTask(newTaskName);
    setNewTaskName("");
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmitted} className="my-2 row">
        <div className="col-9">
          <input
            type="text"
            placeholder="Enter a new task"
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="col-3">
          <button className="btn btn-primary btn-sm">Save task</button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default TaskCreator;
