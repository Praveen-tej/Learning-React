import '../App.css'

export default function TodoList({todos, onDelete}) {
    return (
        <div>{
            todos.map((todo) => 
            <li key={todo.id}>{todo.text} <button className="del-btn" onClick={() => onDelete(todo.id)}>Delete</button></li> )
            }
          </div>
    )
}