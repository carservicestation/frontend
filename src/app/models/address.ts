export class Address 
{
    id: number;
    streetAddress: string;
    landmark: string;
    city: string;
    pincode: string;
    state: string;
    country: string
    
    constructor(){ 
        this.id = 0;
        this.streetAddress = "";
        this.landmark = "";
        this.city = "";
        this.pincode = "";
        this.state = "";
        this.country = "";
    }
}