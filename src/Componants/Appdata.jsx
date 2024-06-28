import React from 'react'
import { useState } from 'react';

function Appdata({ taskdata, setTaskdata }) {

    const [task, setTask] = useState(" ");
    const [description, setDescription] = useState("");

    const addNewData = () => {
        const addTaskData = {
            Name: task,
            Description: description,
            status: "Complited",
        };
        setTaskdata([...taskdata, addTaskData]);
    };
    return (
        <> <div className='container'>
            <div className='row'>
                <div className='d-flex justify-content-around'>
                    <input type="text" className="form-control m-4 border-success" placeholder="Todo Name"
                        value={task} onChange={(e) => setTask(e.target.value)} />

                    <input type="text" className="form-control m-4 border-success" placeholder="Enter the Description"
                        value={description} onChange={(e) => setDescription(e.target.value)} />

                    <button className="btn btn-success btn-lg m-4 "
                        onClick={addNewData}>AddTodo</button>

                </div>
            </div>
        </div>
        </>
    )
}

export default Appdata
