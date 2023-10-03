import { type Request, type Response } from 'express'
import { AddPessoaService } from '../services/pessoas/add_pessoa_service'
import { ListarPessoaService } from '../services/pessoas/listar_pessoa_service'
import { BuscarPessoaService } from '../services/pessoas/buscar_pessoa_service'
import { UpdatePessoaService } from '../services/pessoas/update_pessoa_service'
import { DeletePessoaService } from '../services/pessoas/delete_pessoa_service'

export class PessoaController {
  async salvarPessoa (request: Request, response: Response): Promise<Response> {
    const addPessoaService = new AddPessoaService()
    const { nome, email, cpf } = request.body
    await addPessoaService.add(nome, email, cpf)
    return response.json().status(201)
  }

  async listarPessoa (request: Request, response: Response): Promise<Response> {
    const listarPessoaService = new ListarPessoaService()
    const list = await listarPessoaService.load()
    return response.json(list)
  }

  async buscarPessoaPorId (request: Request, response: Response): Promise<Response> {
    const buscarPessoaService = new BuscarPessoaService()
    const buscar = await buscarPessoaService.findById(parseInt(request.params.id))
    return response.json(buscar)
  }

  async atualizarPessoa (request: Request, response: Response): Promise<Response> {
    const atualizarPessoaService = new UpdatePessoaService()
    await atualizarPessoaService
      .update(parseInt(request.params.id), request.body.nome, request.body.email, request.body.cpf)
    return response.json().sendStatus(204)
  }

  async deletarPessoa (request: Request, response: Response): Promise<Response> {
    const deletarPessoaService = new DeletePessoaService()
    await deletarPessoaService.delete(parseInt(request.params.id))
    return response.json().sendStatus(204)
  }
}
