import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

   id : Subject<string>





  setId(newID :string ){
    this.id?.next(newID);
  }
  constructor() { }


}
