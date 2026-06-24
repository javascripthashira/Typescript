// import { morgan } from 'morgan';
// // import { Morgan } from 'morgan';
import express from "express";
import morgan from "morgan";
import { attachid, errorHandler, RequestLogger} from "./middleware";
import { router } from "./Router/todorouter";
import { logger, morganStream } from "./config/logger";




const app = express();

/// req  -> (middleware) -> res


// middleware
 app.use(express.json())
 app.use(morgan("combined", { stream: morganStream }))

//  app.use(RequestLogger)
//  app.use(attachid)
//  app.use(cors({
//     origin:"localhost:5347/",
//     methods:["GET","POST","PUT","PATCH"]
//  }))

 //routes 
 app.use(router)
 
//  app.use(validate)


//  app.use(middleware1)
//   app.use(middleware2)
//   app.use(middleware3)

// type todo = {
//     id:number,
//     task: string,
//     status: "pending" | "done";
// }

// const todos: todo [] = [{
//     id:1,
//     task:"wash plates",
//     status:"pending"
// },
// {
//     id:2,
//     task:"wash car",
//     status:"done"
// },
// {
//     id:3,
//     task:"clean",
//     status:"pending"
// }

// ]






// app.get("/",(req,res)=>{
//     res.send("hello world")

// })

// // app.get("/todos",(req,res, next)=>{
// //     const {status} = req.query
// //     const {task} = req.query

// //     if(status){
// //         const filtered = todos.filter((t)=> t.status === status)
// //         res.status(404).send(filtered)
// //     }
// //     if(task){
// //         const filtered = todos.filter((t)=>t.task === task)
// //         res.send(filtered)
// //     }
    
// //     res.send(todos)
    
// })


//  app.post("/todos",(req,res)=>{
//     const newtodo = req.body //
//     todos.push(newtodo)
//     res.send(todos)
//     console
//  })


//  app.get("/todos/:id/", (req,res,next)=>{
//     const id = parseInt(req.params.id)
//     const todo = todos.find((t) =>t.id === id) 
    
//     if(!todo){
//         next(new Error("todo not found"))
//      }

//     res.send(todo)
//  })

//  app.delete("/todos/:id/",(req,res) =>{
//     const id = parseInt(req.params.id)
//     const filtered = todos.filter((t)=> t.id !== id)
//     res.send(filtered)

//  })
  

//  //replace the entire thing


//     app.put("/todos/:id",(req,res)=>{
//     const id = parseInt(req.params.id)
//     const index = todos.findIndex((t) =>t.id === id)
//     todos[index] = req.body
//     res.send(todos)
//  })

 


//  app.patch("/todos/:id", (req,res,next)=>{
//     const id = parseInt(req.params.id)
//     const index = todos.findIndex((t) =>t.id === id)
//     const todo = todos[index]
//     if(!todo){
//         next(new Error("todo with this id not found "))
//     }
  
  
//     const {task,status} = req.body

//     if(req.body.task !== undefined){
//         todo.task = task
//     }

//     if(req.body.status !== undefined){
//         todo.status = status
//     }
//     // if(!index){
//     //     next(new Error("no todo found with that id "))
//     // }

//     if(!task && !status){
//         next(new Error("this is not part of the array"))
//     }
//     // if(!todos[index]){
//     //     next(new Error("errorrr"))
//     // }
    
//     res.send(todos)


//  })

 app.use(errorHandler)












//  app.patch("/todos/:id", (req,res)=>{
//     const id = parseInt(req.params.id)
//     const {task,status} = req.body;

//     const todoIndex = todos.findIndex((t) => t.id === id)

//     if(task !== undefined) {
//         todos[todoIndex].task = task;

//     }
//     if (status !== undefined){
//         todos[todoIndex].status = status
//     }

//     res.send({
//         message:'todo updated',
//         todo: todos[todoIndex]
//     })
//  })








 // request objects 
 //request.url 
 //request.method
 //request.body 

//  app.post("/ex/:id",(req,res)=>{
//     const {status} = req.query
//     const {task} = req.query

//     const reqsummary = {
//         body:req.body,
//         method:req.method,
//         url:req.url,
//         params:req.params,
//         query:req.query,
//         Head:req.headers,
//     }

//     res.send(reqsummary)
//  })




//  seraching && FILTERING && SORTING

// app.patch("/")

// app.put("/")

// app.delete("/")

app.listen(3000,()=>{
   
    logger.info("server started")
})