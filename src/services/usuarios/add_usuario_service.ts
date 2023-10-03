import { AppDataSource } from '../../config/data_source'
import { Usuario } from '../../models/usuario'

export class AddUsuarioService {
    async add (apelido: string, email: string, senha: string): Promise<Usuario> {
        const usuarioRepository = AppDataSource.getRepository(Usuario)
        const usuario = usuarioRepository.create({ apelido, email, senha })
        const usuarioDB = await usuarioRepository.save(usuario)
        return usuarioDB
    }
}
