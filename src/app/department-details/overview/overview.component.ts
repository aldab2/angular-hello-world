import { Component, OnInit, ElementRef, Input } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { DepartmentService } from "../department.service";
import { IUser } from "src/app/models/user";

@Component({
  selector: "app-overview",
  templateUrl:'./overview.component.html' /* `
              <p> Inline overview works with id = {{depId}} </p>

             <app-user-card [user]="users.length==0?dummyUser:users[depId]"><app-user-card>








              <button class="ui black tiny button" (click)="goPrevious()">Previous</button>
              <button class="ui black tiny button" (click)="goNext()">Next </button>



              <br>
              <p>Commooon</p>

            ` */,
  styleUrls: ["./overview.component.css"]
})
export class OverviewComponent implements OnInit {
  depId;
  dummyUser = new IUser();
  users = [];

  constructor(
    private _userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private depService: DepartmentService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: ParamMap) => {
      //alert("params "+JSON.stringify(params['id']));
      let id = parseInt(params["id"]);
      this.depId = id;
    });

    this._userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  goPrevious() {
    let previousId = this.depId - 1;
    //this.router.navigate(['/departments',previousId]);
    this.router.navigate(["../../",previousId,"overview",{id:previousId}],{relativeTo :this.route });

  }
  goNext() {
    let nextId = this.depId + 1;
    // this.router.navigate(['/departments',nextId]);

    this.router.navigate(["../../",nextId,"overview",{id:nextId}],{relativeTo :this.route });

  }
}
