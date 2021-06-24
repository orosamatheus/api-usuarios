import { UsuariosRepository } from "../../repositories/implementation/UsuariosRepository";
import { UpdateUserUseCase } from "./UpdateUserUseCase";
import { UpdateUserController } from "./UpdateUserController";

const usuariosRepository = UsuariosRepository.getInstance();
const updateUsuarioUseCase = new UpdateUserUseCase(usuariosRepository);
const updateUsuarioController = new UpdateUserController(updateUsuarioUseCase);

export {updateUsuarioController}

