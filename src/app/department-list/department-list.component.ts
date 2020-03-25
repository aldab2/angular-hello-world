import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl : "./department-list.componenets.html",
  styles: []
})

/* export class DepartmentListComponent implements OnInit {
  
  public selectedId;
  departments = [
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "Node"},
    {"id": 3, "name": "MongoDB"},
    {"id": 4, "name": "Ruby"},
    {"id": 5, "name": "Bootstrap"}
  ]
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    
    } );
  }

  onSelect(department) {
    alert("Hi "+department.name)
    //this.router.navigate(['/departments', department.id]);
     this.router.navigate([department.id], { relativeTo: this.route });
  }

  isSelected(department) { return department.id === this.selectedId; }
} */

export class DepartmentListComponent implements OnInit {
  selectedId;
  isIdSelected = false;

  departmentItemClass = {
    "ui" : true,
    "link" : true,
    "active" : this.isIdSelected,
    "item" : true,
  }
  departments = [
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "Node"},
    {"id": 3, "name": "MongoDB"},
    {"id": 4, "name": "Ruby"},
    {"id": 5, "name": "Bootstrap"}
  ]
  constructor(private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
     this.route.paramMap.subscribe((params)=>{
      let id = params.get('id');
      this.selectedId = id;
    });
  }

  onSelect(department){
   // this.router.navigate(['/departments',department.id])
   this.router.navigate([department.id],{relativeTo :this.route })
  }

  isSelected(department){
    return  {
      "ui" : true,
      "link" : true,
      "active" : this.selectedId == department.id,
      "item" : true,
    };
  }

}
