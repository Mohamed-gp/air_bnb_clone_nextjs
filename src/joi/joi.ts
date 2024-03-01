import { authBody } from "@/types/interfaces";
import joi from "joi";

// use `prisma` in your application to read and write data in your DB

const registerVerify = (obj : authBody) => {
    const schema = joi.object({
        email : joi.string().min(5).max(50).trim().required(),
        password : joi.string().min(5).max(50).trim().required(),
        username : joi.string().min(5).max(50).trim().required(),
    })
    return schema.validate(obj)

}


const loginVerify = (obj:authBody) => {
    
    const schema = joi.object({
        email : joi.string().min(5).max(50).trim().required(),
        password : joi.string().min(5).max(50).trim().required(),
    })
    return schema.validate(obj)

}

export {registerVerify,loginVerify}