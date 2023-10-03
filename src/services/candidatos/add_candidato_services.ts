import { AppDataSource } from '../../config/data_source'
import { Candidato, type Genero } from '../../models/candidato'
import { type Usuario } from '../../models/usuario'

export class AddCandidatoService {
    async addCandidato (nomeCompleto: string, cpf: string, whatsapp: string,
        dataNascimento: Date, sexo: Genero, usuario: Usuario): Promise<Candidato> {
            const candidatoRepository = AppDataSource.getRepository(Candidato)
            const candidato = candidatoRepository.create({ nomeCompleto, cpf, whatsapp, dataNascimento, sexo, usuario })
            const candidatoDB = await candidatoRepository.save(candidato)
            return candidatoDB
        }
}
