export class Mitglied {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    birthDate: number;
    image: string;

    constructor(obj?: any) {
        this.id = obj ? obj.id : '';
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.email = obj ? obj.email : '';
        this.birthDate = obj ? obj.birthDate : '';
        this.image = obj ? obj.image : '';


    }
}





