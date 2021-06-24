import { UsuariosRepository } from "../../repositories/implementation/UsuariosRepository";
import { ListAllUsersUseCase } from "./ListAllUsersUseCase";
import { ListAllUsersController} from "./ListAllUsersController";

const usuariosRepository = UsuariosRepository.getInstance();
const listAllUsersUseCase = new ListAllUsersUseCase(usuariosRepository);
const listAllUsersController = new ListAllUsersController(listAllUsersUseCase);

export { listAllUsersController};