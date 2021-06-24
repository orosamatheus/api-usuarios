import { Usuario } from '../model/Usuario'

interface ICreateUsuarioDTO{
    email: string;
    primeiro_nome: string;
    ultimo_nome: string;
    telefone: string;
    password: string;
}

interface IUsuariosRepository{
    create({email, primeiro_nome, ultimo_nome, telefone, password}: ICreateUsuarioDTO):Usuario;
    findById(id: string): Usuario | undefined;
    findByEmail(email: string): Usuario | undefined;
    update(usuario: Usuario, {email, primeiro_nome, ultimo_nome, telefone, password}: ICreateUsuarioDTO): Usuario;
    delete(usuario: Usuario): Usuario[];
    list(): Usuario[];
}

export { ICreateUsuarioDTO, IUsuariosRepository}