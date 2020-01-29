import { Role } from './role';

export class Owner 
{
	id: number;
    name: string;
    email: string;
    phone: string;
	password: string;
	role:Role;
	
	constructor(){
	this.id = 0;
	this.name ="";
	this.email ="";
	this.phone ="";
	this.password ="";
	this.role = Role.OWNER;
	}
}