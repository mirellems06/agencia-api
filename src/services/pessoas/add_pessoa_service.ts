import { AppDataSource } from '../../config/data_source'
import { Pessoa } from '../../models/pessoa'

export class AddPessoaService {
  async add (nome: string, email: string, cpf: string): Promise<void> {
    const pessoaRepository = AppDataSource.getRepository(Pessoa)
    const pessoa = pessoaRepository.create({ nome, email, cpf })

    await pessoaRepository.save(pessoa)
  }
}
