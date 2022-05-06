import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'users' })
export class User {

    @PrimaryGeneratedColumn({ name: 'idUser' })
    idUser?: number;

    @Column({ name: 'name', type: 'varchar'})
    name?: string;

    @Column({ name: 'email', type: 'varchar'})
    email?: string;

    @Column({ name: 'password', type: 'varchar'})
    password?: string;
    
}