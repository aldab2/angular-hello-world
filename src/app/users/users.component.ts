import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users = [];
  public num = 999;
  constructor(private _userService : UserService ) { }

  ngOnInit() {
    
    this._userService.getUsers().subscribe(data => this.users = data,err => {
      alert("Error in getting data");
    } )
  }
  

}
