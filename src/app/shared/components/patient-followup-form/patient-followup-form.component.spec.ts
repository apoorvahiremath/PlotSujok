import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientFollowupFormComponent } from './patient-followup-form.component';

describe('PatientFollowupFormComponent', () => {
  let component: PatientFollowupFormComponent;
  let fixture: ComponentFixture<PatientFollowupFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientFollowupFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientFollowupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
