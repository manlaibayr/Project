import { Injectable } from '@angular/core';
import { UserModel } from './user.model';

@Injectable()
export class UserService {

  private users: UserModel[];
  private nextId: number;
  private user: UserModel;

  constructor() {
    let users = this.getUsers();

   if (users.length == 0){
     this.nextId = 0;
   }
   else {
     let maxId = users[users.length-1].id;
     this.nextId = maxId+1;
   }
  }

  public addUser(text: string, email:string, lastName:string, country:string): void {
    let user = new UserModel(this.nextId, text, email, lastName, country);
    let users = this.getUsers();
    users.push(user);
    this.setLocalStorageUsers(users);
    this.nextId++;
  }

  public getUsers(): UserModel[] {
    let localStorageItem = JSON.parse(localStorage.getItem('users'));
    return localStorageItem == null ? [] : localStorageItem.users;
  }

  public removeUser(id: number): void {
    let users = this.getUsers();
    users = users.filter((user)=> user.id != id);
    this.setLocalStorageUsers(users);
  }

  private setLocalStorageUsers (users: UserModel[]) : void{
    localStorage.setItem('users', JSON.stringify({users: users}));
  }

  public getUserById(id: number){
    this.users = this.getUsers();
    return this.users.find((user: UserModel) => user.id == id);
  }

  public editUser(id:number, firstName:string, email:string, lastName:string, country:string): void {
    let users = this.getUsers();
    var user : UserModel;
    var searchTerm = id;
    let index = -1;
    for(var i = 0; i < users.length; i++) {
      if (users[i].id == searchTerm) {
          index = i;
          break;
      }
    }

    users[index].text = firstName;
    users[index].email = email;
    users[index].lastName = lastName;
    users[index].country = country;

    this.setLocalStorageUsers(users);
  }
}
