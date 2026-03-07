import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const  increment = () => {
    setCount(count+1)
  }

  const decrement = () => {
    setCount(count-1)
  }
 
  const reset = () => {
    setCount(0)
  }

  return (
    <>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={reset} >Reset</button>
    <div>Count:{count}</div>
    </>
  )
}

export default App