import { type Router } from 'express'
import { CandidatoController } from '../controllers/candidato_controller'

const candidatoController = new CandidatoController()

export default (router: Router): void => {
  router.post('/candidatos/registrar', candidatoController.addCandidato)
}
