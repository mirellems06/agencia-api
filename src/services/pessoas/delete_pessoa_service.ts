import { AppDataSource } from '../../config/data_source'
import { Pessoa } from '../../models/pessoa'

export class DeletePessoaService {
  async delete (id: number): Promise<void> {
    const pessoaRepository = AppDataSource.getRepository(Pessoa)
    await pessoaRepository.createQueryBuilder()
      .delete()
      .where('id = :id', { id })
      .execute()
  }
}
