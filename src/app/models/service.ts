import { ServiceCenter } from './service-center';
import { from } from 'rxjs';
import { Appointment } from './appointment';

export class Service {

	id: number;
	name: string;
	desc: string;
	price: number;
	image: any;

	constructor() 
	{
		this.id = 0;
		this.name = "";
		this.desc = "";
		this.price = 0;
		this.image = "";
	}
}