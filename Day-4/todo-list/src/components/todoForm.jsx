import { useState } from "react"

export default function TodoForm({onAdd}) {
    const [value, setValue] = useState("")

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleAdd = () => {
        onAdd(value)
        setValue("")
    }

    return(
        <div>
             <input  value={value} onChange={handleChange}   type="text" placeholder="Enter your task"/>
             <button onClick={handleAdd}>Add</button>
        </div>
       
    )
}