import { UsuariosRepository } from "../../repositories/implementation/UsuariosRepository";
import { DeleteUserUseCase } from "./DeleteUserUseCase";
import { DeleteUserController} from "./DeleteUserController";

const usuariosRepository = UsuariosRepository.getInstance();
const deleteUsuarioUseCase = new DeleteUserUseCase(usuariosRepository);
const deleteUsuarioController = new DeleteUserController(deleteUsuarioUseCase);

export {deleteUsuarioController};