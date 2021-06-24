import { Request, Response } from "express";

import { DeleteUserUseCase } from "./DeleteUserUseCase";

class DeleteUserController{
    constructor(private deleteUsuarioUseCase: DeleteUserUseCase){}


    handle(request: Request, response: Response){
        const {user_id} = request.params;

        try{
            const usuarios = this.deleteUsuarioUseCase.execute({user_id});
            return response.status(200).json(usuarios);
        } catch(err){
            return response.status(400).json({error: err.message});
        }
    }
}

export {DeleteUserController}