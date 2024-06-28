import React from 'react'
import Main from './main'
import Top from "./Top"


function Workspace() {
  return (
    <div className="flex flex-col w-full border-opacity-50 h-screen">
      <div className="grid h-20 card rounded-box place-items-center m-1">
        <Top />
      </div>
      <div className="grid flex-glow">
        <Main />
      </div>
    </div>
  )
}

export default Workspace
