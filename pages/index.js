import React, { useReducer } from 'react'
import Task from '../components/task'
import Capture from '../components/capture'

import reducer from '../store/reducer'

const Home = () => {
  const [state, dispatch] = useReducer(reducer, [])

  const showAll = () => {
    console.log("all")
    console.log(state)
    let tasks = {
      type: "All_TASKS",
      payload: state
    }
    dispatch(tasks)
  }

  const showCompleted = () => {
    console.log("completed")
    console.log(state)
    let task = {
      type:"COMPLETED_TASK"
    }
    dispatch(task)
  }

  return (
    <div className="content">
      <div className="content-header"><h2>To-Do List</h2></div>
      <Capture dispatch={dispatch} />
      {
        state.map(t => <Task
          key={t.id}
          id={t.id}
          text={t.message}
          completed={t.completed}
          hidden={t.hidden}
          dispatch={dispatch}
        />)
      }
      <div className="content-footer">
        <button className="util-button" onClick={ showAll }>All</button>
        <button className="util-button" onClick={ showCompleted }>Completed</button>
      </div>
      

      <style jsx global>{`
          body {
            background-color: #FAFAFA;
            font-family: sans-serif;
          }
          .content {
            max-width:600px;
            margin: 0 auto;
            margin-top: 5em;
            background-color: #FFFFFF;
            box-shadow: 0px 0px 2px 2px #F3F3F3;
          }
          .content-header {
            background-color: #1B97EE;
            color: #FFF;
            padding-left: 10%;
            height: 40px;
            line-height: 40px;
            margin-bottom:10px;
          }
          .content-footer {
            text-align:right;
            padding-top: 20px;
            margin-right: 2.5%;
            padding-bottom: 10px;
          }

          .util-button {
            font-size: 100%;
            padding: .5em 1em;
            color: #444;
            color: rgba(0,0,0,.8);
            border: 1px solid #999;
            border: none transparent;
            background-color: #e6e6e6;
            text-decoration: none;
            border-radius: 2px;
            margin-right: 2%;
          }
        `}</style>

    </div>
  )
}
export default Home