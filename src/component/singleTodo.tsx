import React from "react";
import { todo } from "../model";
import * as Mui from "@mui/material";
import { AiFillDelete, AiFillEdit, AiOutlineCheck } from "react-icons/ai";
import TodoList from "./todolist";
type props = {
  todo: todo;
  todos: todo[];
  setTodos: React.Dispatch<React.SetStateAction<todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: props) => {
    const handleDone=(id:number)=>{
        setTodos(
            todos.map((todo)=>
            todo.id === id ? { ...todo, isDone: !todo.isDone } :todo
        )
        );
        };
  return (
    <div>
      <Mui.Card sx={{ margin: "1rem", width: "40%" }}>
        <Mui.Stack direction="row" sx={{ justifyContent: "space-between" }}>
            {
                todo.isDone? (
                    <s>{todo.todo}</s>

                ):(
                    <Mui.CardContent>{todo.todo}</Mui.CardContent>

                )
            }
          <Mui.Stack direction="row">
            <Mui.CardActions>
              <AiFillEdit />
            </Mui.CardActions>
            <Mui.CardActions>
              <AiFillDelete />
            </Mui.CardActions>
            <Mui.CardActions>
              <AiOutlineCheck onClick={()=>{handleDone(todo.id)}} style={{cursor:"pointer"}}/>
            </Mui.CardActions>
          </Mui.Stack>
        </Mui.Stack>
      </Mui.Card>
    </div>
  );
};

export default SingleTodo;
