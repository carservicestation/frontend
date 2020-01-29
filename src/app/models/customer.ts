import { User } from './user';
import { Address } from './address';
import { Role } from './role';

export class Customer 
{

    id: number;
    name: string;
    email: string;
    phone: string;
    password: string;
    address: Address;
    role:Role;
    wallet:number;

    constructor()
    {
        this.id = 0;
        this.name = "";
        this.email = "";
        this.phone = "";
        this.password = "";
        this.wallet = 0;
        this.address = new Address();
        this.role = Role.CUSTOMER;
    }
}












