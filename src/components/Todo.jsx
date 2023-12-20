import React, { useState } from "react";

function Todo() {
  const [toDoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };
  const addTask = () => {
    if (newTask.trim() === "") {
      return; // Don't add empty tasks
    }

    const task = {
      id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
      taskName: newTask,
    };

    setToDoList([...toDoList, task]);
    setNewTask(""); // Clear the input field after adding a task
  };

  const deleteTask = (taskName) => {
    //const newTodoList = toDoList.filter((task) => task !== taskName);
    /* if (task === taskName) {
        return false;
      } else {
        return true;
      } */

    setToDoList(toDoList.filter((task) => task.id !== taskName));
  };

  return (
    <div className="h-full items center">
      <input onChange={handleChange} type="text" className="border mr-10 p-2" />
      <button onClick={addTask} className="bg-gray-300 p-2 rounded">
        Add Task
      </button>
      <div className="list text-center my-5">
        {toDoList.map((task) => {
          return (
            <div>
              {" "}
              <button
                onClick={() => deleteTask(task.id)}
                className="border border-gray-700 bg-blue-400 p-1 rounded-lg"
              >
                Delete
              </button>
              <h1>{task.taskName}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Todo;
