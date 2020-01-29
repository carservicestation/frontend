import { Customer } from './customer';
import { ServiceCenter } from './service-center';
import { Vehicle } from './vehicle';
import { Payment } from './payment';
import { Address } from './address';
import { Service } from './service';
import { Owner } from './owner';
import { Status } from './status';

export class Appointment
{
        date : Date;
        customer: Customer;
        serviceCenter: ServiceCenter;
        vehicle: Vehicle;
        payment:Payment;
        pickupAddress:Address;
        services:Service[];
        owner:Owner;
        status:Status;
                
        constructor(){
            this.date = new Date();
            this.customer = new Customer();
            this.serviceCenter = new ServiceCenter();
            this.vehicle = new Vehicle();
            this.payment = new Payment();
            this.pickupAddress= new Address();
            this.services = [];
            this.owner= new Owner();
            this.status = Status.NEW;
        }
}


    // Integer id;
	// Date datetime;
	// Customer customer;
	// ServiceCenter serviceCenter;
	// Vehicle vehicle;
	// Payment payment;
	// Address pickupAddress;
	
	// Set<Services> services = new HashSet<>();