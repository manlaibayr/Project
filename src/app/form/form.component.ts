import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'
import { UserModel } from '../user.model';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  
  model : UserModel;
  public firstName: string;
  public userEmail: string;
  public lastName: string;
  public id : number;
  private country: any;
  private user : UserModel;
  countries = [
    'UK',
    'US',
    'Mongolia',
    'Poland',
    'France',
    'Russia'
  ];
  isEdit = false;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((p) => {
      if (p && p.id) {
        let foundUser = this.userService.getUserById(p.id);
        this.id = p.id;
        this.firstName = foundUser.text;
        this.userEmail = foundUser.email;
        this.country = foundUser.country;
        this.lastName = foundUser.lastName;
       // console.log(p.id);
        this.isEdit = true;
      } else {
        this.isEdit = false;
      }
    })
  }

  private addUser(): void {
    if (this.isEdit) {
      this.userService.editUser(this.id, this.firstName, this.userEmail, this.lastName,this.country); 
    }
    else {
      this.userService.addUser(this.firstName, this.userEmail, this.lastName,this.country);
    }
  }
}
