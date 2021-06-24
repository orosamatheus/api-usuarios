import { UsuariosRepository } from "../../repositories/implementation/UsuariosRepository";
import { ShowUserUseCase } from "./ShowUserUseCase";
import {ShowUserController } from "./ShowUserController";

const usuariosRepository = UsuariosRepository.getInstance();
const showUserUseCase = new ShowUserUseCase(usuariosRepository);
const showUserController = new ShowUserController(showUserUseCase);

export {showUserController}