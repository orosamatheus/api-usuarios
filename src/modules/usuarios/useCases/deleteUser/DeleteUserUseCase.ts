import { Usuario } from "../../model/Usuario"
import { IUsuariosRepository } from "../../repositories/IUsuariosRepository";

interface IRequest{
    user_id: string;
}

class DeleteUserUseCase{
    constructor(private usuariosRepository:IUsuariosRepository){}

    execute({user_id}: IRequest):Usuario[]{
        const userExists = this.usuariosRepository.findById(user_id);

        if(!userExists){
            throw new Error ("Usuário não encontrado")
        }
        const usuarios = this.usuariosRepository.delete(userExists);
        return usuarios;
    }
}

export { DeleteUserUseCase}