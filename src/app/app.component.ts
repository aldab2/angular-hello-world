import { Component } from '@angular/core';
import { Router, RouterLink, NavigationStart, ActivationStart, NavigationEnd } from '@angular/router';
import $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  
  isPathEmpty = this.router.url=="/"?true:false ;
  
  route = this.router.url
  
  menuValue = ""
  title = 'Barnawi\'s Hello World';
  message1 = "This is the first message";
  message2 = "This is the second message";
  constructor(private router : Router){
    this.router.events.subscribe(event =>{
        if(event instanceof NavigationEnd){
          this.route = this.router.url
          this.isPathEmpty = this.router.url=="/home"||this.router.url==""?true:false

        }
    })
  }



  
  navigate(path:string){
    path = "/"+path.toLowerCase();
   // this.menuValue = path;
    //this.route = this.router.url
  //  this.isPathEmpty = this.router.url=="/"||this.router.url==""?true:false
    this.router.navigateByUrl(path);
   

  }
  updateMenu(menuItem){
    /* $(menuItem)
    .addClass('active')
    .siblings('.item')
      .removeClass('active');
      */
  }
  updatePage(){
    this.isPathEmpty = this.router.url=="/"?true:false

  }
  updatePath(newPath){
    this.route = this.router.url
  this.isPathEmpty = this.router.url=="/"||this.router.url==""?true:false

  }
}


