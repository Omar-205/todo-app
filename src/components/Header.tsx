import type { ITodo } from "../App"

export function Header({todos}: Readonly<{todos: ITodo[]}>){
    const todosLength = todos.filter(val=> !val.complete).length
    return(
        <header>
            <h1 className="text-gradient">You have {(todosLength ==1? "1 open task.":`${todosLength} open tasks.`)} </h1>
        </header>
    )
}