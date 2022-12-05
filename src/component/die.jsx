import React from "react"
import ReactDOM from "react-dom"
export default function Die (props){
  const style={
    backgroundColor: props.isHeld ? "green":"#D6E4E5"
  }
   function Hold(){
     console.log(props.DieNumber)

     }
  return(
    <div >
      <div
      onClick={Hold} className="die-face" style={style}><h1>{props.DieNumber}</h1></div>
    </div>
  )
}
