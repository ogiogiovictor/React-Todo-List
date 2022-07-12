import React, { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa"
import "./TodoItem.css"


const TodoItem = (props) => {

    const [editing, setEditing] = useState(false)

    const { completed, id, title } = props.todo;

    const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
      }

    const handleEditing = () => {
        setEditing(true)
      }

    const handleUpdatedDone = event => {
        if (event.key === "Enter") {
          setEditing(false)
        }
      }

 let viewMode = {};
  let editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }


  return (
    <div>
      <li className="item">
      <div onDoubleClick={handleEditing} style={viewMode}>
            <input
            type="checkbox"
            className="checkbox"
            checked={completed}
            onChange={() => props.handleChangeProps(id)}
            />
            
        <span style={props.todo.completed ? completedStyle : null}>
            {title}
            </span>

            <button onClick={() => props.deleteTodoProps(id)}>
            <FaTrash />
            </button>
        </div>
        <input type="text" style={editMode} className="textInput" value={title} 
        onChange={e => { props.setUpdate(e.target.value, id)  }}
        onKeyDown={handleUpdatedDone}
        />
      </li>
    </div>
  );
};

export default TodoItem;
