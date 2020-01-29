import { FuelType } from './fueltype';

export class Vehicle
{
    id : number;
    make : string;
    model: string;
    fuelType: FuelType;

    constructor()
    {
        this.id  = 0;
        this.make  = "";
        this.model = "";
        this.fuelType = FuelType.DIESEL;
    }
}