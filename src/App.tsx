import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import * as Mui from "@mui/material"
import InputField from './component/inputField'
import { todo } from './model'
import TodoList from './component/todolist'

const App: React.FC = () => {
  const [todo,setTodo] = useState<string>("")
  const [todos,setTodos] = useState<todo[]>([])
  const handleAdd = (e:React.FormEvent)=>{
   e.preventDefault();
   if(todo){
     setTodos([ ...todos,{id:Date.now(),todo,isDone:false} ])
     setTodo("")
   }
  }
  console.log(todos)
  return (
    <div className="App">

    <Mui.Typography variant='h2' sx={{  fontFamily: 'Rubik Beastly', color: "#c9d655"}}>Tasky</Mui.Typography>
    <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
    <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App
