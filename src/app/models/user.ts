import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'address'
})
export class UserAddressPipe implements PipeTransform {
  transform(user :IUser): string {
    return user.address?.city +"-"+user.address?.street+": "+user.address?.zipcode

  }
}


export class IUser {
  id : number = -1;
  name : string = "Dummy Name";
  username : string = "Dummy Username";
  email : string = "Dummy Email";
  address : IAddress = new IAddress();




  getAddress():string{
    return this.address.city +"-"+this.address.street+": "+this.address.zipcode
  }

}

class IAddress {
  street: string ="";
  suite: string="";
  city:string="";
  zipcode:string="";
  geo : IGeo;
}

interface IGeo {
  lat:number,
  lng:number
}
