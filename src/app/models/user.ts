import { Role } from './role';

export class User {

    id: number;
    email: string;
    password: string;
    newPassword: string;
    role: Role;

    constructor() {
        this.id = 0;
        this.email = "";
        this.password = "";
        this.newPassword = "";
        this.role = Role.CUSTOMER;
    }
}