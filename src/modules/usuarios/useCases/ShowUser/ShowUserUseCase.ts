import { Usuario } from "../../model/Usuario";
import { IUsuariosRepository } from "../../repositories/IUsuariosRepository";

interface IRequest{
    user_id: string;
}

class ShowUserUseCase{
    constructor(private usuariosRepository:IUsuariosRepository){}

    execute({user_id}:IRequest):Usuario|undefined{
        const usuario = this.usuariosRepository.findById(user_id);
        
        if(!usuario){
            throw new Error("User not found")
        }
        return usuario;
    }
}
export {ShowUserUseCase}