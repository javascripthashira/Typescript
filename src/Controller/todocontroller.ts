import { NextFunction, Request, Response } from "express";
import { CreateTodo, GetTodobyId, GetTodos, UpdateTodo } from "../Service/todoservice";


export const gettodos = (req:Request,res:Response)=>{
    const todos = GetTodos()
    res.status(200).json({message:"succesful",data:todos})
}

export const gettodosbyid = (req:Request,res:Response, next:NextFunction)=>{
    const id = parseInt(req.params.id as string)
    const todo = GetTodobyId(id)
    if(!todo){
      next(new Error("no todo found for this id"))
      return;
    }
     res.status(200).json({message:"succesful",data:todo})
}

export const createtodo = (req:Request,res:Response) =>{
    const body = req.body;
    CreateTodo(body)
    res.status(200).json({message:"added succesfuly",data:body})
}

export const Updatetodo = (req:Request,res:Response)=>{
    const id = parseInt(req.params.id as string)
    const update = UpdateTodo(req.body,id)
    res.send(update )
}