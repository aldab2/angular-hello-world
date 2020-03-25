import { Component, OnInit, Input } from '@angular/core';
import { IUser } from 'src/app/models/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user = new IUser();


  constructor() { }

  ngOnInit(): void {
  }

}
