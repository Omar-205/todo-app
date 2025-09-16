import { useState, useEffect } from 'react';
import { Header } from './components/Header'
import { Tabs } from './components/Tabs'
import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/TodoList'
export interface ITodo{
  input: string;
  complete: boolean
}
function App() {
  
    const [todos, setTodos] = useState([
      { input: 'Hello! Add your first to do!', complete: true }
    ]);

    const [selectedTab, setSelectedTab] = useState('All');
    
    function handleAddTodo(newTodo: string){
      const newTodos = [...todos, {input: newTodo, complete: false}];
      setTodos(newTodos)
      handleSaveData(newTodos)
    }

    function handleCompleteTodo(index: number){
      const newTodoList = [...todos];
      newTodoList[index].complete = true;
      setTodos(newTodoList);
      handleSaveData(newTodoList)
    }
    function handleDeleteTodo(index: number){
      const newTodos = todos.filter((_todo, todoIndex) => {
        return index !== todoIndex
      })
      setTodos(newTodos)
      handleSaveData(newTodos)
    }
    function handleSaveData(currentTodos: ITodo[]){
      localStorage.setItem('todo-app', JSON.stringify({todos: currentTodos}));
    }

    useEffect(() => {
      if(!localStorage ) return;
      const storedData = localStorage.getItem('todo-app');
      const db = storedData ? JSON.parse(storedData) : [];
      setTodos(db.todos);
    },
    []
    )
     return (
      <>
        <Header todos={todos} />
        <Tabs todos={todos} selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
        <TodoList handleDeleteTodo={handleDeleteTodo} handleCompleteTodo={handleCompleteTodo} todos={todos} selectedTab={selectedTab}/>
        <TodoInput handleAddTodo={handleAddTodo} />
      </>
  )
}

export default App
