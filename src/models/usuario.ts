import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  apelido: string

  @Column({ unique: true })
  email: string

  @Column()
  senha: string

  @CreateDateColumn({ name: 'dt_criacao' })
  dataCriacao: Date
}
