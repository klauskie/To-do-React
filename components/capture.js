import React, { useState } from 'react'
import { domainToASCII } from 'url'

const Capture = (props) => {

    const [text, setText] = useState("")

    const addTask = () => {
        let task = {
            type:"ADD_TASK",
            payload: { 
                message: text,
                completed: false,
                hidden:false
            }
        }
        props.dispatch(task)
        document.getElementById("task_input").value = "";
    }

    return(
        <div className="capture">
            <input id="task_input" type="text" placeholder="What?..." onChange={ e => setText(e.target.value) } />
            <button className="sub-button" onClick= { addTask } >Add</button>

            <style jsx global>{`

                .capture {
                    border-bottom: 1px #A0A0A0 solid;
                }

                #task_input {
                    width: 70%;
                    padding: 12px 20px;
                    margin: 8px 0;
                    display: inline-block;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    box-sizing: border-box;
                    margin-right: 2.5%;
                }

                .sub-button {
                    width: 20%;
                    background-color: #3fc5f0;
                    color: white;
                    padding: 14px 20px;
                    margin: 8px 0;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    margin-left: 2.5%
                  }

        `}</style>
        </div>
    )
}

export default Capture
