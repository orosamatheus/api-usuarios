import { Usuario } from "../../model/Usuario";
import { IUsuariosRepository, ICreateUsuarioDTO } from "../../repositories/IUsuariosRepository";

interface IRequest{
    user_id: string;
}


class UpdateUserUseCase {
    constructor(private usuariosRepository: IUsuariosRepository){}

    execute({user_id}: IRequest, {email, primeiro_nome, ultimo_nome, telefone, password}: ICreateUsuarioDTO): Usuario {
        const userExists = this.usuariosRepository.findById(user_id);

        if (!userExists){
            throw new Error("Usuario nao encontrado");
        }

        const usuario = this.usuariosRepository.update(userExists,{email, primeiro_nome, ultimo_nome, telefone, password});

        return usuario;

    }
}

export { UpdateUserUseCase };