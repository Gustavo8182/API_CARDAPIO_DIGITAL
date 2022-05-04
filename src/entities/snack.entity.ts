import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'snack' })
export class Snack {

    @PrimaryGeneratedColumn({ name: 'idSnack' })
    idSnack?: number;

    @Column({ name: 'nam', type: 'varchar'})
    nam?: string;

    @Column({ name: 'descri', type: 'varchar'})
    descri?: string;

    @Column({ name: 'price', type: 'varchar'})
    price?: number;
    
    @Column({ name: 'num', type: 'varchar'})
    num?: number;
    
}