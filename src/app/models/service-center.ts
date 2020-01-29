import { Address } from './address';
import { Service } from './service';
import { Owner } from './owner';

export class ServiceCenter
{ 
	id : number;
	name : string;
	email: string;
	phone: string;
	address:Address;
	owner: Owner;
	services:Service[];

	constructor()
	{
		this.id = 0,
		this.name = "";
		this.email = "";
		this.phone = "";
		this.address = new Address();
		this.owner = new Owner();
		this.services=[];
	}
}