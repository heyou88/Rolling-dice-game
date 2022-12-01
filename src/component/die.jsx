import React from "react"
import ReactDOM from "react-dom"
export default function Die (props){
  return(
    <div >
      <div className="die-face"><h1>{props.number}</h1></div>
    </div>
  )
}
