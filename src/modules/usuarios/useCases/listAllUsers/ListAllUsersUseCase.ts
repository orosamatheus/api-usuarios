import { Usuario } from "../../model/Usuario";
import {IUsuariosRepository} from "../../repositories/IUsuariosRepository"

class ListAllUsersUseCase{
    constructor(private usuariosRepository:IUsuariosRepository){}

    execute():Usuario[]{
        const usuarios = this.usuariosRepository.list();
        return usuarios;
    }
}

export {ListAllUsersUseCase}