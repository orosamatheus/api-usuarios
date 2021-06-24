import { Usuario } from "../../model/Usuario";
import { IUsuariosRepository } from "../../repositories/IUsuariosRepository";
import { hashSync } from "bcrypt"

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

        const passwordHash = hashSync(password, 8);


        const user = this.usuariosRepository.create({email, primeiro_nome,ultimo_nome,password: passwordHash,telefone})
        return user;
    }
}

export { CreateUsuarioUseCase }