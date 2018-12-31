import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service'
import { UserModel } from '../user.model'
import { Router } from '@angular/router'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  private user: UserModel;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  private removeUser(): void {
    this.userService.removeUser(this.user.id);
  }

  editUser() {
    this.router.navigate(['form', this.user.id]);
    console.log(this.user);
  }

}
