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



// const create listing loginVerify 
const createListingVerify = (obj:authBody) => {
    const schema = joi.object({
        title : joi.string().min(5).max(20).trim().required(),
        description : joi.string().min(5).max(300).trim().required(),
        price : joi.number().min(5).max(10000).required(),
        imageSrc : joi.string().trim().required(),
        userId: joi.string().min(5).max(50).trim().required(),
        locationValue: joi.string().trim().required(),
        // user id
        guestCount : joi.number().min(1).max(50).required(),
        roomCount : joi.number().min(1).max(50).required(),
        bathroomCount : joi.number().min(1).max(50).required(),
        category : joi.string().trim().required(),

    })
    return schema.validate(obj)
}

export {registerVerify,loginVerify,createListingVerify}