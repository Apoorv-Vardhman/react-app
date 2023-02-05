import { PageTitle } from "../components/PageTitle";
import {createContext, useState} from "react";
import { TodoFormUseContext } from "../components/TodoFormUseContext";
import {Todos} from "../components/table/Todos";
export const PropsContext = createContext();
export const PropsDrilling = ()=>{
    let [todos,setTodos] = useState([]);
    let [currentTodo,setTodo] = useState({name:"",todo:"",isUpdate:false,id:0});

    const submitTodo = (todo)=>{
        if(todo.isUpdate){
          setTodos(todos.map(value=>{
            if(value.id===todo.id){
              value.name = todo.name;
              value.todo = todo.todo;
            }
            return value;
          }))
        } else{
          todo.id = todos.length+1;
          setTodos([...todos,todo]);
        }
    }

    const deleteTodo = (todo)=>{ 
        setTodos(todos.filter(value=>todo.id!==value.id));
    }
    
    const updateTodo = (todo)=>{
        console.log(todo);
        todo.isUpdate = true;
        setTodo(todo);
    }

    return (
        <PropsContext.Provider value={{currentTodo,setTodo}}>
            <div>
                <PageTitle title="Props Drilling" />
                <div className="container mx-auto mt-6">
                    <h1 className="font-bold mb-4">Problems</h1>
                    <p>Prop drilling is basically a situation when the same data is being sent at almost every level due to requirements in the final level.</p>
                    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20210618101141/Untitled.png" alt="not found" />
                </div>
                <div className="container mt-4 mx-auto">
                    <div className='bg-green-300 w-full pt-4 pb-6'>
                        <div className="xl:max-w-lg mx-auto">
                        <div className="bg-white shadow rounded px-8 pt-6 pb-8">
                            <TodoFormUseContext onSubmit={submitTodo} todo={currentTodo} />
                        </div>
                        </div>
                    </div>

                    <div className='bg-gray-300 w-full pt-4 pb-6 mb-20'>
                        <div className='xl:max-w-2xl sm:min-w mx-auto'>
                        <div className="bg-white shadow rounded px-8 pt-4 pb-4">
                            <Todos todos={todos} delete={deleteTodo} update={updateTodo}/>
                        </div>
                        </div>
                    </div>

                </div>
            </div>
        </PropsContext.Provider>
    );
}