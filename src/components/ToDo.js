import { Fragment, useState } from "react";
import classes from "./ToDo.module.css";
function ToDo() {
  const [todos, setToDo] = useState([]);
  const [task, setTask] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  function enteredTodo(event) {
    setTask(event.target.value);
  }

  function addtoDo(event) {
    event.preventDefault();

    if (isEditing) {
      setToDo((prevToDo) =>
        prevToDo.map((todo) =>
          todo.Id === editId ? { ...todo, text: task } : todo
        )
      );
      setIsEditing(false);
      setEditId(null);
      setTask("");
    } else {
      if (task.trim().length === 0) {
        alert("Input Cant Be Empty!");
        return;
      }

      setToDo((prevToDo) => [
        {
          Id: Math.random(),
          text: task,
        },
        ...prevToDo,
      ]);
      setTask("");
      console.log(task);
    }
  }
  function DeleteTask(id) {
    setToDo((prevToDo) => prevToDo.filter((todo) => todo.Id !== id));
    // console.log(id)
  }
  function EditTask(id) {
    const taskToBeEdited=todos.find((todo)=>todo.Id===id)
    setTask(taskToBeEdited.text)
    setIsEditing(true)
    setEditId(id)
    // console.log(id)
  }

  function toggleCompleteHandler(id){
    setToDo((prevToDo)=>prevToDo.map((todo)=>todo.Id===id?{...todo,isCompleted: !todo.isCompleted}:todo))
  }

  return (
    <Fragment>
      <main className={classes.container}>
        <div className={classes.inputSection}>
          <form onSubmit={addtoDo}>
            <label htmlFor="task">Enter To-Do</label>
            <input type="text" id="text" onChange={enteredTodo} value={task} />
            <button type="submit">Add-ToDo</button>
          </form>
        </div>

        {/* todo task */}
        <div className={classes.taskList}>
          {todos.length === 0 && <p>No tasks Added Yet</p>}
          <ul>
            {todos.map((todo) => (
              <li key={todo.Id} className={`${classes.taskItem} ${todo.isCompleted ? classes.completed:''}`}>
                <span>{todo.text}</span>
                <div>
                <button
                    onClick={()=>toggleCompleteHandler(todo.Id)}
                    className={classes.edit}
                  >
                    {todo.isCompleted?"unmark":"Mark As Complited"}
                  </button>
                  <button
                    onClick={EditTask.bind(null, todo.Id)}
                    className={classes.edit}
                  >
                    Edit
                  </button>
                  <button onClick={DeleteTask.bind(null, todo.Id)}>
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </Fragment>
  );
}

export default ToDo;
