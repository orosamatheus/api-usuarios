import {UsuariosRepository} from "../../repositories/implementation/UsuariosRepository";
import { CreateUsuarioUseCase } from "./CreateUsuarioUseCase";
import { CreateUsuarioController} from "./CreateUsuarioController";

const usuariosRepository = UsuariosRepository.getInstance();
const createUsuarioUseCase = new CreateUsuarioUseCase(usuariosRepository);
const createUsuarioController = new CreateUsuarioController(createUsuarioUseCase);

export { createUsuarioController}