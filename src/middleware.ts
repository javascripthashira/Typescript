
import { Schema } from './../node_modules/zod/src/v4/core/json-schema';
import { error } from 'node:console';
//A middleware is a function that runs before your res and after your req,
//so its in the middle of your req,(middleware),res

import { NextFunction, Request, Response } from "express";
import { randomUUID } from "node:crypto";
import z from 'zod';
import { logger } from './config/logger';



export const RequestLogger = (req:Request, res:Response, Next:NextFunction)=>{
    const timestamp = new Date().toDateString()
    const requrl = req.url
    const reqmethod = req.method
    console.log(`${reqmethod} - ${timestamp} - ${requrl}`)
    Next()
}

export const attachid = (req:Request, res:Response, Next:NextFunction) =>{
    (req as any).requestId = randomUUID()
    res.setHeader("Y-REQUEST-ID",(req as any).requestId)
    Next()
}

export const errorHandler = (err:Error, req:Request, res:Response, Next:NextFunction) =>{
    logger.error(`error: ${err.message}`)
    res.status(500).send({errormessage:err.message})
}

export const validate = (Schema: {body?: z.ZodType, params?: z.ZodType, query?:z.ZodType}) =>{
    return(req:Request, res:Response, Next:NextFunction) =>{
     
        if(Schema.body){
            const results = Schema.body.safeParse(req.body)

            if(!results.success){
                 res.status(422).json({ error: 'failed', msg: results.error.issues });
             return;
            }
            req.body = results.data
        }
         if(Schema.params){
            const results = Schema.params.safeParse(req.params)

            if(!results.success){
                 res.status(422).json({ error: 'failed', msg: results.error.issues });
             return;
            }
            req.params = results.data as Record<string, string>;
        }
         if(Schema.query){
            const results = Schema.query.safeParse(req.query)

            if(!results.success){
                 res.status(422).json({ error: 'failed', msg: results.error.issues });
             return;
            }
            req.query = results.data as Record<string, string>
        }
    Next()
}




// interface RequestSchemas {
//   body?: z.ZodType;
//   params?: z.ZodType;
//   query?: z.ZodType;
// }

// export const validate = (Schema:RequestSchemas ) =>{
//     return (req:Request, res:Response, Next:NextFunction) => {
       

//         if(Schema.body){
//              const result = Schema.body.safeParse(req.body);
//          if (!result.success) {
//         res.status(422).json({ error: 'failed', msg: result.error.issues });
//         return;
//       }
//       req.body = result.data;
//         }

//     if(Schema.params){
//      const result = Schema.params!.safeParse(req.params);
//       if (!result.success) {
//         res.status(422).json({ error: 'failed', msg: result.error.issues });
//         return;
//       }
//       req.params = result.data as Record<string, string>;;
//       }

//       if(Schema.query){
//      const result = Schema.query.safeParse(req.query);
//       if (!result.success) {
//         res.status(422).json({ error: 'failed', msg: result.error.issues });
//         return;
//       }
//       req.query = result.data as Record<string, string>;;
//       }
//        Next()
       
      
//     }
  
  
          
//     }
   
 
















// export const validate = (Schema: z.ZodType) =>{
//     return (req:Request, res:Response, Next:NextFunction) => {
//         const result = Schema.safeParse(req.body);
//        if(!result.success){
//         res.status(422).json({error:"failed",msg:result.error.issues})
//          return
//        }
     
        
//     }
// }



}
