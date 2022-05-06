import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'requestSnack' })
export class Request {

    @PrimaryGeneratedColumn({ name: 'idRS' })
    idRequest?: number;

    @Column({ name: 'namSnack', type: 'varchar'})
    namSnack?: string;

    @Column({ name: 'price', type: 'double'})
    price?: Date;

    @Column({ name: 'amount', type: 'int'})
    amount?: string;   

    @Column({ name: 'nameClient', type: 'varchar'})
    nameClient?: number;

    @Column({ name: 'dat', type: 'date'})
    dat?: number;

    @Column({ name: 'payment', type: 'varchar'})
    payment?: number;   
    
    @Column({ name: 'address', type: 'varchar'})
    address?: number; 
    
}