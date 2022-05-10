import React from 'react';
import {todo} from "../model"
import * as Mui from "@mui/material"
import SingleTodo from './singleTodo';

interface Props {
    todos:todo[];
    setTodos: React.Dispatch<React.SetStateAction<todo[]>>;
}


const TodoList: React.FC<Props> = ({todos,setTodos}) => {
  return <div >
       <Mui.Stack
    >
   {todos.map((todo)=>(
     <SingleTodo todo={todo} todos={todos} setTodos={setTodos} />
   ))}
   </Mui.Stack>
  </div>;
};

export default TodoList;
