import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'users' })
export class User {

    @PrimaryGeneratedColumn({ name: 'idUser' })
    idUser?: number;

    @Column({ name: 'nam', type: 'varchar'})
    nam?: string;

    @Column({ name: 'email', type: 'varchar'})
    email?: string;

    @Column({ name: 'pass', type: 'varchar'})
    pass?: string;
    
}