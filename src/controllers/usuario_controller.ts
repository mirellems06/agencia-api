import { type Request, type Response } from 'express'
import { AddUsuarioService } from '../services/usuarios/add_usuario_service'

export class UsuarioController {
    async adicionarUsuario (request: Request, response: Response): Promise<Response> {
        const addUsuarioService = new AddUsuarioService()
        const { apelido, email, senha } = request.body
        const usuario = await addUsuarioService.add(apelido, email, senha)
        return response.json(usuario)
    }
}
