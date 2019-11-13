import React, {useState} from 'react';

const Task = (props) => {

  const toggle = () => {
    props.dispatch({type: 'TOGGLE_TASK', id: props.id})
  }

  return (
    <div className={ props.hidden ? 'hide' : 'task' }>
      <input type="checkbox" value={props.completed} onChange={toggle} ></input>
      <span className={ props.completed ? 'marked' : '' } >
        <span className="mess">{props.text}</span>
      </span>

      <style jsx>{`
           .task {
                font-size: 20px;
                color: #8c8c8c;
           }
           .hide {
               display: none;
           }
           .mess {
             margin-left: 10px;
           }
           .marked {
             color: gray;
             text-decoration: line-through;
           }
        `}</style>
    </div>
  )
}

export default Task