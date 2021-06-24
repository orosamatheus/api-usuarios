import {Request, Response} from "express";

import { ShowUserUseCase } from "./ShowUserUseCase";

class ShowUserController{
    constructor(private showUserUseCase: ShowUserUseCase){}

    handle(request: Request, response: Response): Response{
        try{
            const {user_id} = request.params;
            const usuario = this.showUserUseCase.execute({user_id});
            return response.status(200).json(usuario);
        } catch(err){
            return response.status(400).json({error: err})
        }
    }

}
export { ShowUserController}