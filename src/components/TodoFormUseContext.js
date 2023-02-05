import { useContext } from "react"
import { PropsContext } from "../pages/PropsDrilling";
import Button from "./Button";
import InputField from "./InputField";
export const TodoFormUseContext = (props)=>{

    const {currentTodo,setTodo} = useContext(PropsContext);

    const submit = (event)=>{
        event.preventDefault();
        props.onSubmit(currentTodo);
        setTodo({...currentTodo,name:"",todo:"",isUpdate:false});
    }

    const changeName = (name)=>{
        setTodo({...currentTodo,name:name});
    }

    const handleTodo = (todo)=>{
        setTodo({...currentTodo,todo:todo});
    }

    const handleClicked = (event)=>{
        console.log("submit clicked");
    }

    return (
            <div>
                <div className="container">
                    <h1 className="text-center font-bold">Add Todo</h1>
                    <form onSubmit={submit}>
                        <InputField type="text" placeholder="Enter name" required={true} value={currentTodo.name} label="Name" onChange={changeName} />
                        <InputField type="text" placeholder="Enter todo" required={true} value={currentTodo.todo} label="Todo" onChange={handleTodo} />
                        <Button buttonType="submit" type="primary" onClick={handleClicked} text={currentTodo.isUpdate?"Update":"Add"} />
                    </form>
                </div>
            </div>
        );
}