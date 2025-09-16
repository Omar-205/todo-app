import {TodoCard} from './TodoCard'
import type { ITodo } from '../App';
interface IProps{
    todos: ITodo[]
    selectedTab: string
    handleDeleteTodo: (i: number) => void
    handleCompleteTodo: (i: number) => void
}
export function TodoList({todos, selectedTab, handleDeleteTodo, handleCompleteTodo}: Readonly<IProps>) {

    const filteredTodos = selectedTab == "All"?
        todos:
        selectedTab == "Open"?
        todos.filter(val=> !val.complete):
        todos.filter(val=> val.complete)

    return(
        <>
            {filteredTodos.map((todo, todoIndex) => {
                return (
                    <TodoCard key={todoIndex*2} 
                    todoIndex={todos.findIndex(
                        val => val.input === todo.input
                    )}
                    handleDeleteTodo={handleDeleteTodo}
                    handleCompleteTodo={handleCompleteTodo}
                    todo={todo}
                    todos={todos}
                    />
                )
            })}
        </>
    )
}