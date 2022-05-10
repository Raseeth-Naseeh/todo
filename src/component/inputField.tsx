import React, { useRef } from "react";
import * as Mui from "@mui/material";

interface props{
  todo:string,
  setTodo:React.Dispatch<React.SetStateAction<string>>,
  handleAdd:(e:React.FormEvent)=>void
}

const InputField :React.FC<props>= ({todo,setTodo,handleAdd}) => {
const inputRef = useRef<HTMLInputElement>(null)
  return (
    <div>
      <form
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "5rem",
        }}
        onSubmit={(e)=>{
          handleAdd(e)
          inputRef.current?.blur();
        }}
      >
        <Mui.TextField
          placeholder="Enter Task"
          ref={inputRef}
          color="secondary"
          style={{
            width: "50%",
            borderRadius: "20px",
            backgroundColor: "#ffffad",
          }}
          value={todo}
          onChange={(e)=>setTodo(e.target.value)}
        />
        <Mui.Button
          style={{
            backgroundColor: "#0058a0",
            color: "white",
            borderRadius: "20px",
          }}
          type="submit"
        >
          Go
        </Mui.Button>
      </form>
    </div>
  );
};

export default InputField;
