import { useState } from 'react'
import './App.css'
import TodoForm from './components/todoForm'
import TodoList from './components/todoList'
function App() {
  
  const [todo, setTodo] = useState([]);

  const addTodo = (newTodo) => {
    const todoItem = {
      id:Date.now(),
      text:newTodo
    }
    setTodo([...todo,todoItem])
  }

  const deleteTodo = (id) => {
    setTodo(todo.filter((item) => item.id != id ))
  }

  return (
    <>
    <TodoForm onAdd={addTodo}/>
    <TodoList todos={todo} onDelete={deleteTodo}/>
    </>
  )
}

export default App
