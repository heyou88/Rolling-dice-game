import React from "react"
// import click from '../assets/beep-6-96243.mp3'

export default function Die (props){
  const style={
    backgroundColor: props.isHeld ? "#554994":"#D6E4E5"
  }
  //  function Hold(){
  //    console.log(props.DieNumber)

  //    }
  return(
    <div >
      <div
      onClick={props.Hold} className="die-face" style={style}><h1>{props.DieNumber}</h1></div>
    </div>
  )
}
