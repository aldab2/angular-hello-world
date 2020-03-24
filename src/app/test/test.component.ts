import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import $ from 'jquery';
//import { $ } from 'protractor';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input("parentData1") firstMessage ;
  @Input() secondMessage ;
  @Output() childEvent = new  EventEmitter()
  public name = "Abdullah Barnawi"
  public siteUrl = window.location.href;
  public isDisabled = true;
  public isBlue = true;
  public message = ""
  public semanticLabelClass = {
    "ui" : true,
    "blue" : this.isBlue,
    "inverted" : this.isBlue,
    "label" : true
  };
  public semanticFieldClass = {
    "ui" : true,
    "disabled" : this.isDisabled, 
    "field" : true
  };
  public interactoinBtnText ="Send to parent "+ this.name + " to Parent" 
  
  constructor() { }

  ngOnInit(): void {
  }

   greetUser() {
    return "Hello "+this.name;
  }
  disableField(){
    this.isDisabled = !this.isDisabled;
    this.isBlue = !this.isBlue;
    
    this.semanticLabelClass = {
      "ui" : true,
      "blue" : this.isBlue,
      "inverted" : this.isBlue,
      "label" : true
    }

    this.semanticFieldClass = {
      "ui" : true,
      "disabled" : this.isDisabled, 
      "field" : true
    }
    //$('.ui.field').hide();
  }
  toggleMessage(message) {
    this.message = message.length==0? "Greetings" : ""
  }

  toggleElementVisbility(element){
    $(element).toggle();
  }
  sendToParent(name){
    this.childEvent.emit(name);
    this.interactoinBtnText = " Data has been sent"
  }

}
