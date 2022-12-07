import React from "react"
import Die from "./component/die"
import {nanoid} from "nanoid"
import Confetti from 'react-confetti'
import yay from './assets/yay-6326.mp3'
import rolling from './assets/rolling-dice-2-102706.mp3'
import click from './assets/beep-6-96243.mp3'

export default function App (){
function newDice(){
  let Dice = [];
  for(let a=0; a<10; a++){
    Dice.push({number:Math.ceil(Math.random()*6),
               isHeld: false,
               id: nanoid()
    })
  }

return Dice
}
 function Hold(id){
  var audio = new Audio(click)
  audio.play()
  setDieState(prevState=>
    prevState.map(dice=> {
      return id === dice.id? {...dice,isHeld:!dice.isHeld}:dice

    })
  )
 }


const[dieState,setDieState]= React.useState(newDice())
  const Cards= dieState.map(dice=>{
    return(
      <Die
      Hold={()=>Hold(dice.id,dice.isHeld)}
      key={dice.id}
      DieNumber={dice.number}
      isHeld={dice.isHeld}

       />
    )
  }
  )
  const[tenzies,setTenzies]=React.useState(false)
  function won(){
   setTenzies(()=>dieState.every((dice,index,array) => dice.number === array[0].number&&dice.isHeld))?true:false
  //  setTenzies(dieState.every((dice,index,array)=>{dice.number==array[0].number&&dice.isHeld})
  }
  React.useEffect(function(){won()},[dieState])
  function cheers(){
  var audio = new Audio(yay);
  tenzies&&audio.play();
  }
  React.useEffect(function(){cheers()},[tenzies])


function Roll(){
  var audio = new Audio(rolling);
  audio.play();
  setDieState(prevState=>
    prevState.map(dice=> {
      return dice.isHeld?dice:{...dice,number:Math.floor(Math.random()*6)}
    })
  )
}
function NewGame(){
  console.log("newgame")
   setDieState(newDice())
}
// const { width, height } = useWindowSize()
  return(
    <div className="main">
      {tenzies&&<Confetti/>}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="die-grid" >
         {Cards}
      </div>
      <div>
        <button onClick={tenzies?NewGame:Roll}>{tenzies?"New Game":"Roll"}</button>
      </div>
    </div>
  )
}
