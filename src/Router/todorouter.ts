// import { CreateTodoSchema } from './../schema/todo.schema';
import { Router } from "express";
import { createtodo, gettodos, gettodosbyid, Updatetodo } from "../Controller/todocontroller";
import { body } from "express-validator";
import { validate } from "../middleware";
import { CreateTodoSchema, ParamSchema, UpdateTodoSchema } from "../schema/todo.schema";

export const router = Router()

router.get("/todos",
    gettodos)

router.get("/todos/:id",
    validate({params:ParamSchema}),
    gettodosbyid)

router.post("/todos",
    validate({body:CreateTodoSchema}),
    createtodo 
)

router.put("/todos/:id",
    validate({body:UpdateTodoSchema,params:ParamSchema}),
    Updatetodo)




