import { Router, Request, Response } from "express";
import { body, validationResult } from "express-validator";

const usuariosRoutes = Router();

import { createUsuarioController } from "../modules/usuarios/useCases/createUser";
import { updateUsuarioController } from "../modules/usuarios/useCases/updateUser";
import { listAllUsersController } from "../modules/usuarios/useCases/listAllUsers";
import { deleteUsuarioController } from "../modules/usuarios/useCases/deleteUser"
import { showUserController } from "../modules/usuarios/useCases/ShowUser";

usuariosRoutes.post("/",[
    body("email").isEmail().withMessage("Precisa ser um e-mail válido"),
    body("primeiro_nome").isLength({min:3, max: 30}).withMessage("Este campo deve ter entre 3 a 30 caracteres"),
    body("ultimo_nome").isLength({min: 3, max: 30}).withMessage("Este campo deve ter entre 3 a 30 caracteres"),
    body("telefone").isMobilePhone(["pt-BR", "en-US"]).withMessage("Insira um numero valido")
], (request: Request, response: Response) =>{

    const errors = validationResult(request);

    if(!errors.isEmpty()){
        return response.status(400).json({errors: errors.array()})
    }
    createUsuarioController.handle(request, response);
})


usuariosRoutes.get("/", (request, response) =>{
    listAllUsersController.handle(request, response);
})

usuariosRoutes.get("/:user_id", (request, response) =>{
    showUserController.handle(request, response);

})

usuariosRoutes.put("/:user_id", [
    body("email").isEmail().withMessage("Precisa ser um e-mail válido"),
    body("primeiro_nome").isLength({min:3, max: 30}).withMessage("Este campo deve ter entre 3 a 30 caracteres"),
    body("ultimo_nome").isLength({min: 3, max: 30}).withMessage("Este campo deve ter entre 3 a 30 caracteres"),
    body("telefone").isMobilePhone(["pt-BR", "en-US"]).withMessage("Insira um numero valido")
], (request: Request, response:Response) =>{

    const errors = validationResult(request);

    if(!errors.isEmpty()){
        return response.status(400).json({errors: errors.array()})
    }
    updateUsuarioController.handle(request, response);
})

usuariosRoutes.delete("/:user_id", (request, response) =>{
    deleteUsuarioController.handle(request, response);
    
})


export { usuariosRoutes }