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

  public userText: string;
  public userEmail: string;
  public lastName: string;
  public id : number;
  user : UserModel;
  country: any;
  countries = [
    'UK',
    'US',
    'Mongolia'
  ];
  isEdit = false;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) {
    
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((p) => {
      if (p && p.id) {
        //edit hiih gej bn. id orj irsen gesen ug. ene p.id-g ashiglaj delgetsiin medeelliig durgene
       // console.log(p.id);
        this.isEdit = true;
      } else {
        this.isEdit = false;
      }
    })
  }

  private addzUser(): void {
    if (this.isEdit) {
      //this.userService.editUser(this.id, this.userText, this.userEmail, this.lastName);
    }
    else {
      this.userService.addUser(this.userText, this.userEmail, this.lastName);
    }
  }
}
