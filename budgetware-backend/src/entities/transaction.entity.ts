import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Transaction {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column('decimal')
    amount: number;

    @CreateDateColumn()
    createdAt: Date;
}
