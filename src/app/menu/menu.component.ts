import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import $ from 'jquery';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  updateMenu(menuItem){
    $(menuItem)
    .addClass('active')
    .siblings('.item')
      .removeClass('active');
      console.log($(menuItem).text());
      this.childEvent.emit($(menuItem).text());
  }

}
