import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Usuario } from './usuario'

export enum Genero {
    MAS = 'Masculino',
    FEM = 'Feminino',
    OUT = 'Outros'
}

@Entity('candidatos')
export class Candidato {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: 'nm_completo' })
  nomeCompleto: string

  @Column({ unique: true })
  cpf: string

  @Column({ unique: true })
  whatsapp: string

  @Column({ enum: Genero, default: Genero.OUT })
  sexo: string

  @Column({ name: 'dt_nascimento' })
  dataNascimento: Date

  @ManyToOne((type) => Usuario)
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuario
}
