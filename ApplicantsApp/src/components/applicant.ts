import {bindable} from 'aurelia-framework';


export class Applicant{
  //@bindable model: MovieModel;
  ID: number;
  Name: string;
  FamilyName:string;
  Address:string;
  CountryOfOrigin:string;
  EmailAddress: string;
  Age: number;
  Hired:boolean;

  
  constructor(ID: number,
    Name: string,
    FamilyName:string,
    Address:string,
    CountryOfOrigin:string,
    EmailAddress: string,
    Age: number,
    Hired:boolean){
      this.ID=ID;
      this.Name=Name;
      this.FamilyName=FamilyName;
      this.Address=Address;
      this.CountryOfOrigin=CountryOfOrigin;
      this.EmailAddress=EmailAddress;
      this.Age=Age;
      this.Hired=Hired;
  }
}
