import { v4 as uuidV4 } from 'uuid';

class Usuario {
    id: string;
    email: string;
    primeiro_nome: string;
    ultimo_nome: string;
    telefone: string;
    avatar: string;
    password: string;

    constructor(){
        if(!this.id){
            this.id = uuidV4();
            this.avatar = `http://via.placeholder.com/${Math.floor(Math.random() * 400) + 1}.png`
        }
    }
}

export { Usuario }