import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router,ParamMap} from '@angular/router'
import { DepartmentService } from './department.service';

@Component({
  selector: 'app-department-details',
  template: `
    <p>
      you selected  department with ID = {{depId}}
    </p>
    <p>
    <button class="ui black tiny button" (click)="showOverview()">Overview</button>
    <button class="ui black tiny button" (click)="showContacts()">Contacts </button>

    </p>
    <hr>
    <router-outlet></router-outlet>
    <hr>
    <p>
    <button class="ui black tiny button" (click)="goPrevious($event)">Previous</button>
    <button class="ui black tiny button" (click)="goNext($event)">Next </button>
    <button class="ui black tiny button" (click)="goBack()">Back </button>
    </p>


  `,
  styles: []
})
export class DepartmentDetailsComponent implements OnInit {
  public depId ;
  constructor(private route :ActivatedRoute, private router : Router, private depService :DepartmentService) { }

  ngOnInit(): void {


    //let id= parseInt(this.route.snapshot.paramMap.get('id'));
    //this.depId = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.depId = id;
      this.depService.setId(""+id);
    })
  }
  goPrevious(event){
    let previousId = this.depId -1;
    //this.router.navigate(['/departments',previousId]);
    this.router.navigate(["../",previousId,"overview",{id:previousId}],{relativeTo :this.route });
  }
  goNext(event){
    let nextId = this.depId +1;
   // this.router.navigate(['/departments',nextId]);
    console.log(event);
   this.router.navigate(["../",nextId,"overview",{id:nextId}], {relativeTo :this.route });
  }

  goBack(){
    //this.router.navigate(['/departments',{id:this.depId}]);'
    this.router.navigate(["../",{id:this.depId}],{relativeTo :this.route })
  }
  showOverview(){
    this.router.navigate(["overview",{id:this.depId}],{relativeTo : this.route})
  }

  showContacts(){
    this.router.navigate(["contacts"],{relativeTo : this.route})

  }

}
