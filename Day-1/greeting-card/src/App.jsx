import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState("");
  const [cardType, setCardType] = useState("");
  return (

    <div>
      <label htmlFor="name">Enter Name:</label>
      <input
        id="name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br/>

      <label htmlFor="cardType">Greeting Type:</label>
      <select
        onChange={(e) => {
          setCardType(e.target.value)}}>
        <option value=" ">Select</option>    
        <option value="birthday">Birthday</option>
        <option value="congrats">Congrats</option>
      </select>
      <br />

      {cardType === "birthday" && (
        <div className="happyBirthday">
          <h1> 🎉 Happy Birthday !! 🎂</h1>
          <h2>{name}</h2>
        </div>
      )}

      {cardType === "congrats" && (
        <div className="congrats">
          <h1>🎊 Congratulations 🎊</h1>
          <h2>{name}</h2>
        </div>
      )}
    </div>
  );
}

export default App