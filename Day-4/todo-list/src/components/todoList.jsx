export default function TodoList({todos, onDelete}) {
    return (
        <div>{
            todos.map((todo) => 
            <li key={todo.id}>{todo.text} <button onClick={() => onDelete(todo.id)}>Delete</button></li> )
            }
          </div>
    )
}