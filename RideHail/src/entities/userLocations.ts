import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Ride } from "./ride";

@Entity()
export class UserLocations {

    @PrimaryGeneratedColumn()
    public id!: number

    @Column()
    public logTime!: Date

    @Column('simple-json')
    public location!: { latitude: number, longitude: number }

    @ManyToOne(type => Ride, ride => ride.locations)
    public ride!: Ride
}