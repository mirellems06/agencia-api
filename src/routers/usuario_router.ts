import { type Router } from 'express'
import { UsuarioController } from '../controllers/usuario_controller'

const usuarioController = new UsuarioController()

export default (router: Router): void => {
  router.post('/usuarios/salvar', usuarioController.adicionarUsuario)
//   router.get('/carregar')
}
