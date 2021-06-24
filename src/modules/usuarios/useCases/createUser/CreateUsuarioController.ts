import { Response, Request } from "express";

import { CreateUsuarioUseCase } from "./CreateUsuarioUseCase";

class CreateUsuarioController{
    constructor(private createUsuarioUseCase: CreateUsuarioUseCase){}

    handle(request: Request, response: Response): Response{
        try{
            const {email, primeiro_nome, ultimo_nome, password, telefone} = request.body;
            const usuario = this.createUsuarioUseCase.execute({email, primeiro_nome, ultimo_nome,password, telefone});
            return response.status(201).json(usuario)
        } catch(err){
            return response.status(400).json({error: err.message});
        }
    }
}
export { CreateUsuarioController}