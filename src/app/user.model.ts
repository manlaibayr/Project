export class UserModel {
    id: number;
    text: string;
    email: string;
    lastName: string;
    country: string;
  
    constructor(id: number, text: string, email:string, lastName:string, country:string) {
      this.id = id;
      this.text = text;
      this.lastName = lastName;
      this.email = email;
      this.country = country;
    }
  }
  