import { useState } from 'react'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'

export  function App() {
  const [count, setCount] = useState(0)

  function handleClick(){
    alert("button clicked");
  }

  const addToFive = (num) =>{
     alert(num + 5);
  }
  return (
    <div>
    <Friends></Friends>
    <Users></Users>
    <Counter></Counter>
    <Team></Team>
   <h1>Hi React</h1>
   <button onClick={handleClick}>Click Me</button>
   <button onClick={() =>{ alert("clicked")}}>Click2</button>
   <button onClick={()=> addToFive(33)}>click3</button>
     
    </div>
  )
}

