import { NextFunction, Request, Response } from "express";
import { prismaClient } from '../databases/prismaClient'
import jwt from 'jsonwebtoken'

export const authMiddleware =async(request:Request,response: Response, next: NextFunction)=>{

    type jwtPayload={
        id:number;
        permissions:number[];
        roles:number[];
    }

    const{authorization}=request.headers
    console.log('123')
    console.log(authorization)
    if(!authorization){
        return response.json({error:"não autorizado"})
        
    }
        
    const token = authorization.split(' ')[1]
     console.log(token)

    try {
        const {id,permissions,roles}=jwt.verify(token, process.env.JWT_PASS ?? "") as jwtPayload//verifica o token
        // console.log(id,permissions,roles)

        request.user={//salva dentro da interface esses parâmetros
            id,
            permissions,
            roles,
        }
        // console.log(request.user.id)
        
        return{
            
        }
        
    } catch (error) {
        return response.status(500).json({ message: 'Failed to authenticate token.' })
    }
        
}
//middleware, reutilização de código pra cada página