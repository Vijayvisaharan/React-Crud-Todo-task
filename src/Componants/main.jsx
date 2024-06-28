import React from 'react'
import { useState } from "react";
import Appdata from './Appdata';
import EditData from "./Editdata";

function Main(props) {
  const data = [
    {
      Name: "office Task-1",
      Description: "This is My descripstion of first task",
      status: "Not Complited"
    },
    {
      Name: "office Task-2",
      Description: "This is My descripstion of second task",
      status: "Complited"
    },
    {
      Name: "office Task-3",
      Description: "This is My descripstion of Thired task",
      status: "Not Complited"
    }
  ];
  const [taskdata, setTaskdata] = useState(data);
  const [showForm, setShowForm] = useState(true);
  const [editId, setEditId] = useState("");
  

  // delete the data
  const deldata = (id) => {
    const newdata = taskdata.filter((todo, idx) => idx != id);
    setTaskdata(newdata);
  };

  const handleEdit = (id) => {
    setShowForm(false);
    setEditId(id);
  };

  const handleStatusChange = (id, event) => {
    taskdata[id].status = event.target.value;
    setTaskdata([...taskdata]);
  }


  return (
    <div className="main">
      {showForm == true ?
        (<Appdata taskdata={taskdata} setTaskdata={setTaskdata} />) :
        (<EditData taskdata={taskdata} setTaskdata={setTaskdata}
          showForm={showForm} setShowForm={setShowForm} editId={editId} />)
      }
      <div className='container'>
        <div className='row'>
          <div className="flex">
            <div className="Right_side">
              <h1 className="Right_side m-3"><b>My Todos</b></h1></div>


            <div className="d-flex justify-content-end">
              <h4 className="d-flex justify-content-end "><b>Status Filter : </b></h4>
              <select name='isAvailable' className="select select-bordered select-sm w-20 max-w-xs flex-row btn btn-danger" >
                <option value={'ALL'}>All</option>
                <option value={'Completed'}>Completed</option>
                <option value={'Not Completed'}>Not Completed</option>
              </select></div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row g-3'>
          <div class="col-sm-3">
            <div className='flex flex-wrap'>

              {taskdata && (
                <>
                  {taskdata?.map((todo, idx) => (


                    <div className="card mt-5 " style={{ width: "18rem", backgroundColor: '#ccffee' }}>
                      <div className="card-body">
                        <p>Name : {todo.Name}</p>
                        <p>Descripstion:{todo.Description}</p>
                        <p>status:</p>
                        <select className="btn btn-danger dropdown-toggle"
                          onChange={(e) => handleStatusChange(idx, e)}>
                          {todo.status == "Complited " ? (
                            <option className='btn btn-success'>Complited</option>) : (
                            <option >Not Complited</option>
                          )}
                          {todo.status == "Not Complited" ? (
                            <option className='btn btn-success'>Complited</option>) : (
                            <option className='btn btn-success'> Complited</option>
                          )}
                        </select>
                        <div className="card-actions justify-end">
                          <button className="btn btn-success"
                            onClick={() => handleEdit(idx)}>Edit</button>
                          <button className="btn btn-danger m-3"
                            onClick={() => deldata(idx)}>Delete</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
export default Main