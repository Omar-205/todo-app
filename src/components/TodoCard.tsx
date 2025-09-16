import type { ITodo } from "../App";

interface IProps{
    todo: ITodo
    todos: ITodo[]
    todoIndex: number
    handleDeleteTodo: (i: number) => void
    handleCompleteTodo: (i:number) => void
}

export function TodoCard({todo, todoIndex, handleDeleteTodo, handleCompleteTodo, todos}: Readonly<IProps>){
    return (
        <div className="card todo-item">
           <p> {todo.input}</p>
           <div className="todo-buttons">
           <button
            disabled={todo.complete}
            onClick={() => handleCompleteTodo(todos.findIndex(
                val => val.input === todo.input
            ))}
            >
                <h6>Done</h6>
            </button>
            <button onClick={() => handleDeleteTodo(todoIndex)}>
                <h6>Delete</h6>
            </button>
           </div>
        </div>
    )
}