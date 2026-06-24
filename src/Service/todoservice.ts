import { logger } from "../config/logger";

type todo = {
    id:number,
    task: string,
    status: "pending" | "done";
}

const todos: todo [] = [{
    id:1,
    task:"wash plates",
    status:"pending"
},
{
    id:2,
    task:"wash car",
    status:"done"
},
{
    id:3,
    task:"clean",
    status:"pending"
}

]

//loic for ettin todos
export const GetTodos = ()=>{
   return todos;
}

//get todo by id

export const GetTodobyId = (id:number)=>{
    const todo = todos.find((t) =>t.id === id)
    return todo;

}

export const CreateTodo = (body: todo) => {
    todos.push(body)
}

export const UpdateTodo = (body: todo,id:number )=>{
    const index = todos.findIndex((t) => t.id === id)
    todos[index] = body;

}
 


