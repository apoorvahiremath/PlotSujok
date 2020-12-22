import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientStateService {

  public followupPatientSubject: BehaviorSubject<any>;
  
  constructor() { 
    this.followupPatientSubject = new BehaviorSubject<any>(null);
  }
}
