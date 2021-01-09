import { Applicant } from './components/applicant';
export class App {
  public message = 'List of Applicants';
  applicants:Applicant[];
  
  constructor(){
    this.applicants = [
      new Applicant(1, "Hamza", "Dahmoun", "Blida", "Algeria", "hamza.dahmoun7@gmail.com", 33, true),
      new Applicant(2, "John", "Doe", "Manchester", "UK", "john.doe@gmail.com", 33, false),
      new Applicant(3, "Ahmed", "Mohamed", "Cairo", "Egypt", "ahmed.mohamed@gmail.com", 33, true)
    ]
  }

  deleteApplicant(applicant:Applicant){
    let applicantIndex = this.applicants.findIndex(a=>a.ID==applicant.ID);
    this.applicants.splice(applicantIndex, 1);
  }
  
}
