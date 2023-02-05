import { useState,useEffect } from "react"
import Button from "./Button";
import InputField from "./InputField";

export const TodoForm = (props)=>{
    let [todo,setTodo] = useState(props.todo);

    useEffect(() =>{
        console.log("effect called ");
        setTodo(props.todo);
        return ()=>{
            console.log("Component unmounted");
        }
    },[props.todo.isUpdate !== props.todo.isUpdate]);

    const submit = (event)=>{
        event.preventDefault(); 
        props.onSubmit(todo);
        setTodo({...todo,name:"",todo:""});
    }

    const changeName = (name)=>{
        setTodo({...todo,name:name});
    }

    const handleTodo = (todoValue)=>{
        setTodo({...todo,todo:todoValue});
    }

    const handleClicked = ()=>{
        
    }

    return (
        <div>
            <div className="container">
                <h1 className="text-center font-bold">Add Todo</h1>
                <form onSubmit={submit}>
                    <InputField type="text" placeholder="Enter name" required={true} value={todo.name} label="Name" onChange={changeName} />
                    <InputField type="text" placeholder="Enter todo" required={true} value={todo.todo} label="Todo" onChange={handleTodo} />
                    <Button buttonType="submit" type="primary" onClick={handleClicked} text={props.todo.isUpdate?"Update":"Add"} />
                </form>
            </div>
        </div>
    );

}