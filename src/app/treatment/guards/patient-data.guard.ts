import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router'; 
import { of, Observable } from 'rxjs';
import { PatientStateService } from 'src/app/shared/services/patient-state/patient-state.service';
@Injectable()
export class PaitentDataGuard implements CanActivate {
  constructor( 
    private router: Router, 
    private patientStateService: PatientStateService,
 
  ) { }
  canActivate(): boolean {

    console.log('here guard');
    
    if (!this.patientStateService.followupPatientSubject.value) {
      this.router.navigate(['/']);
      return false;
    }

    return true;
  }

   
}
