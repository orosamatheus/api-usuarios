import { Request, Response } from "express";

import { UpdateUserUseCase } from "./UpdateUserUseCase";

class UpdateUserController{
    constructor(private updateUsuarioUseCase: UpdateUserUseCase){}


    handle(request: Request, response: Response): Response{
        const { user_id } = request.params;
        const {email, primeiro_nome, ultimo_nome, telefone, password} = request.body;

        try{
            const usuario = this.updateUsuarioUseCase.execute({user_id},{email, primeiro_nome, ultimo_nome, telefone, password});
            return response.json(usuario);
        } catch(err){
            return response.status(400).json({error: err.message});
        }
    }
}

export { UpdateUserController }