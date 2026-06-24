
import { write } from "node:fs";
import winston, { transport } from "winston";

export const logger = winston.createLogger({
  level: "http",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports :[
 new winston.transports.Console(),
 new winston.transports.File({
    filename: "los/combined.log"
 })
  ]

})

// export const morganStream = {
//     write: (message: String) => {
//         logger.http(message.trim())
//     }
// }

export const morganStream = {
    write: (message:string) =>{
        logger.http(message.trim())
    }
}