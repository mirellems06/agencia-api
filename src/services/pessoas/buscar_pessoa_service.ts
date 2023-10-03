import { AppDataSource } from '../../config/data_source'
import { Pessoa } from '../../models/pessoa'

export class BuscarPessoaService {
  async findById (idPessoa: number): Promise<Pessoa | null> {
    const pessoaRepository = AppDataSource.getRepository(Pessoa)
    return await pessoaRepository.findOneBy({ id: idPessoa })
  }
}
