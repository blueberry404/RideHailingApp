import { Entity, Column, OneToMany } from 'typeorm';
import { User } from './user';
import { ConsumerState } from '../enums/ConsumerState';
import { Ride } from './ride';

@Entity()
export class Consumers extends User {

    @Column({ type: 'enum', enum: ConsumerState })
    public state!: ConsumerState;

    @OneToMany(type => Ride, ride => ride.consumer)
    public rides!: Ride[];
}