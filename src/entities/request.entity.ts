import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'request' })
export class Request {

    @PrimaryGeneratedColumn({ name: 'idRequest' })
    idRequest?: number;

    @Column({ name: 'nameClient', type: 'varchar'})
    nameClient?: string;

    @Column({ name: 'dat', type: 'date'})
    dat?: Date;

    @Column({ name: 'payment', type: 'varchar'})
    payment?: string;   

    @Column({ name: 'totalPrice', type: 'double'})
    totalPrice?: number;

    @Column({ name: 'address', type: 'varchar'})
    address?: number;

    @Column({ name: 'snack', type: 'int'})
    snack?: number;   
    
}