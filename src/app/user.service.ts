import { Injectable } from '@angular/core';
import { UserModel } from './user.model';

@Injectable()
export class UserService {

  private users: UserModel[];
  private nextId: number;

  constructor() {
    let users = this.getUsers();
/*     this.users = [
      new UserModel(0, "Alex", "make@email.com", "Page"),
      new UserModel(1, "Robert", "make@email.com", "Bob"),
      new UserModel(2, "Phill", "make@email.com", "Jackson")
    ]; */

   // this.nextId = 3;
   if (users.length == 0){
     this.nextId = 0;
   }
   else {
     let maxId = users[users.length-1].id;
     this.nextId = maxId+1;
   }
  }

  public addUser(text: string, email:string, lastName:string): void {
    let user = new UserModel(this.nextId, text, email, lastName);
    //this.users.push(user);
    let users = this.getUsers();
    users.push(user);

    this.setLocalStorageUsers(users);
    this.nextId++;
  }

  public getUsers(): UserModel[] {
  //  return this.users;
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

  public editUser(id: number, text: string, email:string, lastName:string): void {
    let user = new UserModel(id, text, email, lastName);
    let users = this.getUsers();
    users.push(user);
    this.setLocalStorageUsers(users);
    console.log(this.users)
  }

}
