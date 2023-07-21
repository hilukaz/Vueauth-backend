import { Request,Response } from "express"

import { prismaClient } from '../databases/prismaClient'


export class PerfilController{
    
    async view(request:Request, response:Response){

        const User=await prismaClient.user.findFirst({
            where:{
                id:Number(request.user.id)
            }/*,
            include:{
                UserCategory:true,
            }*/
        })

        if(!User){
            return response.json({
                error:"não existe o produto"
            })
        }

        return response.json(User)
            
    }        

    async viewpu(request:Request, response:Response){

        const User=await prismaClient.user.findMany({
            where:{
                public:true,
            }/*,
            include:{
                UserCategory:true,
            }*/
        })

        if (!User || User.length === 0) {
            return response.json({
              error: "Não existem usuários públicos."
            });
          }

        return response.json(User)
            
    }        
    async publicar(request:Request, response:Response){
        const{id}=request.params
        const{public: isPublic}=request.body;

        let User=await prismaClient.user.findFirst({
            where:{
                id:Number(request.user.id)
            }/*,
            include:{
                UserCategory:true,
            }*/
        })
        if(!User){
            return response.json({
                error:"não existe o produto"
            })
        }

        User=await prismaClient.user.update({
            where:{
                id:Number(request.user.id)
            },
            data:{
                ['public']: isPublic
                
            }
        })
        console.log('aparentemente certo')
        return response.json(User)
    }    


}