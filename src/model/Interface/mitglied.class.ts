export class Mitglied {
    id: any;
    firstName: string;
    lastName: string;
    email: string;
    birthDate: any;
    image: string;
    gender: string;
    age: string;




    constructor(obj?: any) {
        this.id = obj ? obj.id : '';
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.email = obj ? obj.email : '';
        this.birthDate = obj ? obj.birthDate : '';
        this.image = obj ? obj.image : '';
        this.gender = obj ? obj.gender : '';
        this.age = obj ? obj.age : '';



    }
}





