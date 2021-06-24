import { Usuario } from "../../model/Usuario";
import { IUsuariosRepository } from "../../repositories/IUsuariosRepository";

interface IRequest{
    email:string,
    primeiro_nome: string;
    ultimo_nome: string;
    password:string;
    telefone: string;
}

class CreateUsuarioUseCase{
    constructor(private usuariosRepository: IUsuariosRepository){}

    execute({email, primeiro_nome,ultimo_nome,password,telefone}: IRequest):Usuario{
        const emailAlreadyExists = this.usuariosRepository.findByEmail(email);

        if(emailAlreadyExists){
            throw new Error("This email already exists");
        }

        const user = this.usuariosRepository.create({email, primeiro_nome,ultimo_nome,password,telefone})
        return user;
    }
}

export { CreateUsuarioUseCase }