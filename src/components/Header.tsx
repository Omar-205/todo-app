import type { ITodo } from "../App"

export function Header({todos}: Readonly<{todos: ITodo[]}>){
    const OpenTasks = todos.filter(val=> !val.complete).length
    return(
        <header>
            <h1 className="text-gradient">You have {(OpenTasks ==1? "1 open task.":`${OpenTasks} open tasks.`)} </h1>
        </header>
    )
}