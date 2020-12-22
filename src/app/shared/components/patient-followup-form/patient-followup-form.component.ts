import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormErrorService } from '../../services/form-error/form-error.service';
import { PatientStateService } from '../../services/patient-state/patient-state.service';

@Component({
  selector: 'patient-followup-form',
  templateUrl: './patient-followup-form.component.html',
  styleUrls: ['./patient-followup-form.component.scss']
})
export class PatientFollowupFormComponent implements OnInit {

  todayDate = new Date();
  form: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private formErrorService: FormErrorService,
    private router: Router, 
    private patientStateService: PatientStateService,
    private datePipe: DatePipe,

    ) { }

  ngOnInit(): void {
    this.setForm();
  }

  setForm(){    
    const format = (date) =>
      this.datePipe.transform(date, 'dd/MM/yyyy');
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      prc: [''],
      date: [format(this.todayDate), Validators.required]
    });
  }

  submit(){
    if (this.form.status === 'INVALID') { 
      return this.formErrorService.displayFormErrors(this.form);
    }
    this.patientStateService.followupPatientSubject.next(this.form.value);
    this.router.navigateByUrl('/treatment');
  }

  public hasRequiredError = (controlName: string): boolean =>
    this.formErrorService.hasRequiredError(controlName, this.form)
}
