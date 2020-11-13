import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualPlotingComponent } from './manual-ploting.component';

describe('ManualPlotingComponent', () => {
  let component: ManualPlotingComponent;
  let fixture: ComponentFixture<ManualPlotingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualPlotingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualPlotingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
