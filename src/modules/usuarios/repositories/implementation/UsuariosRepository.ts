import { Usuario } from "../../model/Usuario";
import { IUsuariosRepository, ICreateUsuarioDTO } from "../IUsuariosRepository";

class UsuariosRepository implements IUsuariosRepository{
    private usuarios: Usuario[];

    private static INSTANCE: UsuariosRepository;

    private constructor(){
        this.usuarios = [];
    }

    public static getInstance(): UsuariosRepository{
        if(!UsuariosRepository.INSTANCE){
            UsuariosRepository.INSTANCE = new UsuariosRepository();
        }
        return UsuariosRepository.INSTANCE;
    }


    create({ email, primeiro_nome, ultimo_nome, telefone, password }: ICreateUsuarioDTO): Usuario {
        const usuario = new Usuario();

        Object.assign(usuario,{
            email,
            primeiro_nome,
            ultimo_nome,
            telefone, 
            password
        });

        this.usuarios.push(usuario);
        return usuario;
    }
    findById(id: string): Usuario | undefined {
        const usuario = this.usuarios.find((usuario) => usuario.id === id);
        return usuario;
    }
    findByEmail(email: string): Usuario | undefined {
        const usuario = this.usuarios.find((usuario)=> usuario.email === email );
        return usuario;
    }
    update(usuarioRecebido: Usuario, {email, primeiro_nome, ultimo_nome, telefone, password}: ICreateUsuarioDTO): Usuario {
        const usuario = usuarioRecebido;
        
        usuario.email = email;
        usuario.password = password;
        usuario.primeiro_nome = primeiro_nome;
        usuario.ultimo_nome = ultimo_nome;
        usuario.telefone = telefone;

        const usuarioIndex  = this.usuarios.findIndex(
            (usuario) => usuario.id === usuarioRecebido.id
        );
        Object.assign(this.usuarios[usuarioIndex], usuario);

        return usuario;
    }
    delete(usuarioRecebido: Usuario): Usuario[]{
        const usuarioIndex = this.usuarios.findIndex(
            (usuario) => usuario.id === usuarioRecebido.id
        )
        this.usuarios.splice(usuarioIndex, 1);
        return this.usuarios;
    }
    list(): Usuario[] {
        return this.usuarios;
    }
    
}
export {UsuariosRepository}