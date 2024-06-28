import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function Editdata({ taskdata, setTaskData, showForm, setShowForm, editId }) {

  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [taskStatus, setTaskStatus] = useState("");

  useEffect(() => {
    const selectedData = taskdata.filter((doc, idx) => idx == editId);
    console.log(selectedData);
    setTask(selectedData[0].Name);
    setDescription(selectedData[0].Description)
    setTaskStatus(selectedData[0].status)
  }, [editId]);

  const updateData = () => {
    const updateTaskData = {
      Name: task,
      Description: description,
      status: taskStatus
    };
    taskdata[editId] = updateTaskData;
    // setTaskData([...taskdata]);
    // console.log(taskdata[editId]); 

    setShowForm(!showForm);
  };
  return (
    <div>
      <div className='container'>
        <div className='row'>

          <div className='d-flex justify-content-around'>

            <input type="text" className="form-control m-4 border-success" placeholder="Todo Name"
              value={task} onChange={(e) => setTask(e.target.value)} />

            <input type="text" className="form-control m-4 border-success" placeholder="Enter the Description"
              value={description} onChange={(e) => setDescription(e.target.value)} />

            <button className="btn btn-info btn-lg m-4" onClick={updateData}>Update</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Editdata
