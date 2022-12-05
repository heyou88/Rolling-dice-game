import React from "react"
import ReactDOM from "react-dom"
import Die from "./component/die"
import {nanoid} from "nanoid"
export default function App (){

function newDice(){
  let Dice = [];
  for(let a=0; a<10; a++){
    Dice.push({number:Math.floor(Math.random()*6),
               isHeld: false,
               id: nanoid()
    })
  }

return Dice
}
 function Hold(id){
  setDieState(prevState=>
    prevState.map(dice=> {
      return id === dice.id? {...dice,isHeld:!dice.isHeld}:dice




    })


  )
  console.log(id)

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
function Roll(){
  setDieState(newDice())
}

  return(
    <div className="main">
      <div className="die-grid" >
         {Cards}
      </div>
      <div>
        <button onClick={Roll}>Roll</button>
      </div>
    </div>
  )
}

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

// export default App
