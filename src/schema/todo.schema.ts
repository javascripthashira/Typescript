
import z from "zod";


export const CreateTodoSchema = z.object({
    id:z.number().min(1),
    task:z.string().min(2).toLowerCase(),
    status:z.enum(["pending","done"])
})

export const UpdateTodoSchema =  z.object({
    id:z.number().min(1),
    task:z.string().min(2),
    status:z.enum(["pending","done"])
})

//param 
export const ParamSchema = z.object({
    id:z.coerce.number().min(1)
})


//queryy
export const QuerySchema = z.object({
    status:z.enum(["pending","done"]).optional(),
    task:z.string().optional()
})
